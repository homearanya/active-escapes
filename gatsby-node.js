const path = require('path')
var kebabCase = require('lodash.kebabcase')
const {
  createFilePath,
  createRemoteFileNode,
} = require('gatsby-source-filesystem')

const createSlugFromString = (text) => {
  let output = text.trim().toLowerCase()
  const words = text.trim().toLowerCase().split(' ')
}

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  // create site pages (except blog listing and posts)
  try {
    const { errors, data } = await graphql(`
      {
        allMarkdownRemark(
          limit: 1000
          filter: {
            fileAbsolutePath: { regex: "/src/pages/" }
            frontmatter: { templateKey: { nin: ["blog-page", "post-page"] } }
          }
        ) {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                templateKey
                code
                filter {
                  destination
                  activity
                }
              }
            }
          }
        }
      }
    `)
    if (errors) {
      errors.forEach((e) => console.error(e.toString()))
      throw new Error('error on graphql for filesystem nodes')
    }

    const { edges: pages } = data.allMarkdownRemark

    pages.forEach(({ node }) => {
      const { id, frontmatter, fields } = node
      let activity, destination
      switch (frontmatter.templateKey) {
        case 'activity-page':
          activity = frontmatter.code
          break
        case 'destination-page':
          destination = frontmatter.code
          break
        case 'destination-activity-page':
          activity = frontmatter.filter.activity
          destination = frontmatter.filter.destination
          break
      }
      createPage({
        path: fields.slug,
        component: path.resolve(
          `./src/templates/${frontmatter.templateKey}.tsx`,
        ),
        // additional data can be passed via context
        context: {
          id,
          destination,
          activity,
        },
      })
    })
  } catch (error) {
    console.log(error)
  }
  // create post pages
  try {
    const { errors, data } = await graphql(`
      {
        allMarkdownRemark(
          limit: 1000
          filter: {
            fileAbsolutePath: { regex: "/src/pages/" }
            frontmatter: { templateKey: { eq: "post-page" } }
          }
        ) {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                templateKey
                tags
              }
            }
          }
        }
      }
    `)
    if (errors) {
      errors.forEach((e) => console.error(e.toString()))
      throw new Error('error on graphql for filesystem nodes')
    }

    const { edges: posts } = data.allMarkdownRemark
    // first collect information for tags
    const tags = {}
    posts.forEach(({ node }) => {
      const { frontmatter } = node
      if (frontmatter && frontmatter.tags) {
        frontmatter.tags.forEach((tag) => {
          if (tags[tag]) {
            tags[tag].count++
          } else {
            tags[tag] = { slug: `/blog/tags/${kebabCase(tag)}/`, count: 1 }
          }
        })
      }
    })
    // Create tags pages
    Object.keys(tags).forEach((tag) => {
      const slug = tags[tag].slug
      createPage({
        path: slug,
        component: path.resolve(`./src/templates/tag-page.tsx`),
        // additional data can be passed via context
        context: {
          tag,
          tags,
          slug,
        },
      })
    })
    // Create post pages
    posts.forEach(({ node }) => {
      const { id, fields } = node

      createPage({
        path: fields.slug,
        component: path.resolve(`./src/templates/post-page.tsx`),
        // additional data can be passed via context
        context: {
          id,
          tags,
        },
      })
    })
    // create blog page
    try {
      const { errors, data } = await graphql(`
        {
          allMarkdownRemark(
            limit: 1000
            filter: {
              fileAbsolutePath: { regex: "/src/pages/" }
              frontmatter: { templateKey: { eq: "blog-page" } }
            }
          ) {
            edges {
              node {
                id
                fields {
                  slug
                }
              }
            }
          }
        }
      `)
      if (errors) {
        errors.forEach((e) => console.error(e.toString()))
        throw new Error('error on graphql for filesystem nodes')
      }

      const { edges: pages } = data.allMarkdownRemark
      // there should be only one
      pages.forEach(({ node }) => {
        const { id, fields } = node
        createPage({
          path: fields.slug,
          component: path.resolve(`./src/templates/blog-page.tsx`),
          // additional data can be passed via context
          context: {
            id,
            tags,
          },
        })
      })
    } catch (error) {
      console.log(error)
    }
  } catch (error) {
    console.log(error)
  }
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  // filtering contentfull nodes as they don't have fileAbsolutePath
  if (node.fileAbsolutePath && node.internal.type === `MarkdownRemark`) {
    let value = createFilePath({ node, getNode })
    if (node.frontmatter.templateKey === 'tour-page') {
      const { slug, activity, destination } = node.frontmatter
      const defaultSlug = slug ? `${slug}/` : value.replace('/tours/', '')
      value = `/${destination}/${activity[0].name}/${defaultSlug}`
    }
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

exports.createSchemaCustomization = ({ actions, schema }) => {
  const { createTypes } = actions
  const typeDefs = [
    `
    type MarkdownRemark implements Node { 
      frontmatter: Frontmatter 
    }
    type TableItem {
      pax: String
      price: String
    }
    type MarkdownRemarkFrontmatterPrice @infer {
      overview: [String]
      heading2: String
      overview2: [String]
      table2: [TableItem]
      notIncludes: [String]
    }
    `,
    schema.buildObjectType({
      name: 'Frontmatter',
      fields: {
        tours: {
          type: '[MarkdownRemark]',
          resolve: (source, args, context, info) => {
            return context.nodeModel
              .getAllNodes({ type: 'MarkdownRemark' })
              .filter((node) => {
                if (node.frontmatter.templateKey === 'tour-page') {
                  console.log(
                    'buildObjectType',
                    source.code,
                    node.frontmatter.destination,
                    node.frontmatter.activity,
                  )
                  return (
                    (node.frontmatter.destination &&
                      node.frontmatter.destination === source.code) ||
                    (node.frontmatter.activity &&
                      node.frontmatter.activity.find(
                        ({ name }) => name === source.code,
                      ))
                  )
                } else {
                  return false
                }
              })
          },
        },
      },
    }),
  ]
  createTypes(typeDefs)
}
