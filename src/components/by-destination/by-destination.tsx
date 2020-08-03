import React, { useMemo } from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import FeaturedDestination from '../featured-destination'

interface ByDestinationData {
  activity: string
}

interface ByDestinationProps {
  data: ByDestinationData
}

const ByDestination = ({ data: { activity } }: ByDestinationProps) => {
  const {
    tours: { edges: tourEdges },
    destinations: { edges: destinationEdges },
  } = useStaticQuery(graphql`
    query ByDestinationQuery {
      tours: allMarkdownRemark(
        filter: { frontmatter: { templateKey: { eq: "tour-page" } } }
      ) {
        edges {
          node {
            frontmatter {
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
      destinations: allMarkdownRemark(
        filter: { frontmatter: { templateKey: { eq: "destination-page" } } }
      ) {
        edges {
          node {
            id
            frontmatter {
              destinationName
              code
              activities {
                activity
                featured
                image {
                  childImageSharp {
                    fluid(maxWidth: 500, maxHeight: 291, quality: 70) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
                heading
                subHeading
                description
                link
                filter
              }
            }
          }
        }
      }
    }
  `)

  const featuredDestinations = useMemo(
    () =>
      destinationEdges
        .map(({ node: { id, frontmatter } }) => {
          const activityObject = frontmatter.activities.find(
            (e) => e.activity === activity,
          )
          if (activityObject) {
            activityObject.id = id
            activityObject.destinationName = frontmatter.destinationName
            activityObject.code = frontmatter.code
          }
          return activityObject
        })
        .filter((e) => e && e.featured > 0)
        .sort((a, b) => a.featured - b.featured),
    destinationEdges,
  )
  const destinationActivities = useMemo(
    () =>
      tourEdges.reduce(
        (
          acc,
          {
            node: {
              frontmatter: { destination, activity: activities },
            },
          },
        ) => {
          if (!destination) return acc
          if (!acc[destination.frontmatter.code]) {
            acc[destination.frontmatter.code] = 0
          }
          if (activities.find((e) => e.frontmatter.code === activity)) {
            acc[destination.frontmatter.code]++
          }
          return acc
        },
        {},
      ),
    tourEdges,
  )
  return (
    <article className="content-block article-boxed featured-destinations">
      <div className="container">
        <header className="content-heading">
          <h2 className="main-heading">By Destination</h2>
        </header>
        <div className="content-holder content-boxed">
          <div className="row db-3-col featured-destination-row">
            {featuredDestinations.map(
              ({
                id,
                destinationName,
                code,
                image,
                heading,
                subHeading,
                description,
                link,
                filter,
              }) => {
                return (
                  <FeaturedDestination
                    key={id}
                    data={{
                      destinationName,
                      image,
                      heading,
                      subHeading,
                      description,
                      link,
                      filter,
                    }}
                    numberOfTours={
                      destinationActivities[code]
                        ? destinationActivities[code]
                        : 0
                    }
                  />
                )
              },
            )}
          </div>
        </div>
      </div>
    </article>
  )
}
export default ByDestination
