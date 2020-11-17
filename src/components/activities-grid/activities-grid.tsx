import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import GridOfCards from '../grid-of-cards'
const ActivitiesGrid = () => {
  const { activities } = useStaticQuery(graphql`
    query ActivitiesGrid {
      activities: allMarkdownRemark(
        filter: { frontmatter: { templateKey: { eq: "activity-page" } } }
        sort: { fields: [frontmatter___order], order: ASC }
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              banner {
                image {
                  childImageSharp {
                    fluid(maxWidth: 500, maxHeight: 291, quality: 75) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                  publicURL
                }
                heading
                subHeading
              }
            }
          }
        }
      }
    }
  `)
  const items = activities.edges.map(({ node }) => {
    const { id, fields, frontmatter } = node
    return {
      id,
      image: frontmatter.banner.image,
      name: frontmatter.banner.heading,
      blurb: frontmatter.banner.subHeading,
      link: fields.slug,
    }
  })
  return <GridOfCards items={items} />
}

export default ActivitiesGrid
