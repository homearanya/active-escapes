import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const FeaturedTours = () => {
  const data = useStaticQuery(`
    query FeaturedToursQuery {
      allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "tour-page"}, featured: {eq: true}}}) {
        edges {
          node {
            frontmatter {
              tourName
            }
          }
        }
      }
    }
  `)

  return <div>featured tour</div>
}
export default FeaturedTours
