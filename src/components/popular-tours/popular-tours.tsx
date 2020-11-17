import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import PopularTour from '../popular-tour'

const PopularTours = () => {
  const {
    allMarkdownRemark: { edges },
  } = useStaticQuery(graphql`
    query PopularTours {
      allMarkdownRemark(
        filter: {
          frontmatter: {
            templateKey: { eq: "tour-page" }
            popularTour: { featured: { gt: 0 } }
          }
        }
        sort: { fields: [frontmatter___popularTour___featured], order: ASC }
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
                  publicURL
                }
                description
              }
              destination {
                frontmatter {
                  code
                }
              }
              activity {
                name {
                  frontmatter {
                    code
                  }
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
