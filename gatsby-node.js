const path = require('path')
const {
  createFilePath,
  createRemoteFileNode,
} = require('gatsby-source-filesystem')

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  // create site pages
  try {
    const { errors, data } = await graphql(`
      {
        allMarkdownRemark(
          limit: 1000
          filter: { fileAbsolutePath: { regex: "/src/pages/" } }
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
      const destination =
        frontmatter.templateKey === 'destination-page'
          ? frontmatter.code
          : undefined
      createPage({
        path: fields.slug,
        component: path.resolve(
          `./src/templates/${frontmatter.templateKey}.tsx`,
        ),
        // additional data can be passed via context
        context: {
          id,
          destination,
        },
      })
    })
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
      value = `/${destination}/${activity[0]}/${defaultSlug}`
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
    type MarkdownRemarkFrontmatterPrice @infer {
      overview: [String]
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
                  return (
                    (node.frontmatter.destination &&
                      node.frontmatter.destination === source.code) ||
                    (node.frontmatter.activity &&
                      node.frontmatter.activity.find(
                        (activity) => activity === source.code,
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
