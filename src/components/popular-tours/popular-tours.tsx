import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import PopularTour from '../popular-tour'

const PopularTours = () => {
  const {
    allMarkdownRemark: { edges },
  } = useStaticQuery(graphql`
    query PopularToursQuery {
      allMarkdownRemark(
        filter: {
          frontmatter: { templateKey: { eq: "tour-page" }, popular: { gt: 0 } }
        }
        sort: { order: ASC, fields: frontmatter___popular }
      ) {
        edges {
          node {
            id
            frontmatter {
              slug
              popularTour {
                title
                tagline
                image {
                  childImageSharp {
                    fluid(maxWidth: 500, maxHeight: 291, quality: 70) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
                description
              }
              destination {
                frontmatter {
                  code
                }
              }
              activity {
                frontmatter {
                  code
                }
              }
            }
          }
        }
      }
    }
  `)
  return (
    <section className="content-block content-spacing">
      <div className="container">
        <header className="content-heading">
          <h2 className="main-heading">POPULAR TOURS</h2>
          <span className="main-subtitle">
            Active Escapes has the trip to meet your adventurous expectations!
          </span>
          <div className="seperator"></div>
        </header>
        <div className="content-holder">
          <div className="row db-3-col">
            {edges.map(
              ({
                node: {
                  id,
                  frontmatter: {
                    slug,
                    popularTour: { image, tagline, title, description },
                    destination,
                    activity,
                  },
                },
              }) => (
                <PopularTour
                  key={id}
                  data={{
                    slug,
                    image,
                    tagline,
                    title,
                    description,
                    activity,
                    destination,
                  }}
                />
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
export default PopularTours
