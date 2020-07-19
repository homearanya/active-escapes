// const { GraphQLString } = require('gatsby/graphql')
// const kebabCase = require('lodash.kebabcase')
// const uniq = require('lodash.uniq')
// const path = require('path')
// const { createFilePath } = require('gatsby-source-filesystem')
// const entities = require('entities')

// exports.createPages = async ({ actions, graphql }) => {
//   const { createPage } = actions
//   // create site's pages
//   try {
//     const { errors, data } = await graphql(`
//       {
//         allMarkdownRemark(
//           limit: 1000
//           filter: { fileAbsolutePath: { regex: "/src/pages/" } }
//         ) {
//           edges {
//             node {
//               id
//               fields {
//                 slug
//               }
//               frontmatter {
//                 templateKey
//               }
//             }
//           }
//         }
//       }
//     `)
//     if (errors) {
//       errors.forEach((e) => console.error(e.toString()))
//       throw new Error('error on graphql for filesystem nodes')
//     }

//     const { edges: pages } = data.allMarkdownRemark

//     pages.forEach(({ node }) => {
//       const { id, frontmatter, fields } = node
//       createPage({
//         path: fields.slug,
//         component: path.resolve(
//           `./src/templates/${frontmatter.templateKey}.tsx`
//         ),
//         // additional data can be passed via context
//         context: {
//           id,
//         },
//       })
//     })
//   } catch (error) {
//     console.log(error)
//   }
// }

// exports.onCreateNode = ({ node, actions, getNode }) => {
//   const { createNodeField } = actions

//   // filtering contentfull nodes as they don't have fileAbsolutePath
//   if (node.fileAbsolutePath && node.internal.type === `MarkdownRemark`) {
//     const value = createFilePath({ node, getNode })
//     createNodeField({
//       name: `slug`,
//       node,
//       value,
//     })
//   }
// }
