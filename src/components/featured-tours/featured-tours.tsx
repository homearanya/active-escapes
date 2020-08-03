import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import FeaturedTour from '../featured-tour'

export interface FeaturedToursData {
  heading: string
  subHeading: string
}

interface FeaturedToursProps {
  data: FeaturedToursData
}

const FeaturedTours = ({
  data: { heading, subHeading },
}: FeaturedToursProps) => {
  const {
    site: {
      siteMetadata: { siteUrl },
    },
    allMarkdownRemark: { edges },
  } = useStaticQuery(graphql`
    query FeaturedToursQuery {
      site {
        siteMetadata {
          siteUrl
        }
      }
      allMarkdownRemark(
        filter: {
          frontmatter: { templateKey: { eq: "tour-page" }, featured: { gt: 0 } }
        }
        sort: { order: ASC, fields: [frontmatter___featured] }
      ) {
        edges {
          node {
            id
            frontmatter {
              slug
              tourName
              shortDescription
              thumbnail {
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
                  destinationName
                }
              }
              activity {
                frontmatter {
                  code
                  activityName
                }
              }
            }
          }
        }
      }
    }
  `)

  return (
    <article className="content-block article-boxed featured-tours">
      <div className="container">
        <header className="content-heading">
          <h2 className="main-heading">{heading}</h2>
          <span className="main-subtitle">{subHeading}</span>
          <div className="seperator" />
        </header>
        <div className="content-holder content-boxed">
          <div className="row db-3-col featured-tour-row">
            {edges.map(({ node }) => {
              const {
                id,
                frontmatter: {
                  tourName,
                  slug,
                  shortDescription,
                  thumbnail: { image, tagline, title, description },
                  destination,
                  activity,
                },
              } = node
              return (
                <FeaturedTour
                  key={id}
                  data={{
                    siteUrl,
                    tourName,
                    slug,
                    shortDescription,
                    image,
                    tagline,
                    title,
                    description,
                    destination,
                    activity,
                  }}
                />
              )
            })}
          </div>
        </div>
      </div>
    </article>
  )
}
export default FeaturedTours
