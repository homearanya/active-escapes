import React, { useMemo } from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { useCookies } from 'react-cookie'

import ActivitiesList from '../activities-list'

const RecentlyViews = () => {
  const [cookies] = useCookies(['recently-views'])
  const {
    tours: { edges },
  } = useStaticQuery(graphql`
    query RecentlyViewsQuery {
      tours: allMarkdownRemark(
        filter: { frontmatter: { templateKey: { eq: "tour-page" } } }
      ) {
        edges {
          node {
            id
            frontmatter {
              tourName
              slug
              duration
              fromPricing
              difficultyLevel {
                frontmatter {
                  title
                  code
                  icon
                }
              }
              destination {
                frontmatter {
                  code
                  destinationName
                }
              }
              activity {
                id
                frontmatter {
                  activityName
                  code
                  icon
                }
              }
              subActivity {
                id
                frontmatter {
                  code
                  icon
                  title
                }
              }
              popularTour {
                image {
                  childImageSharp {
                    fluid(maxWidth: 250, maxHeight: 210, quality: 70) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `)
  let tours
  if (!cookies['recently-views']) {
    tours = []
  } else {
    tours = cookies['recently-views']
  }
  const allTours = useMemo(
    () =>
      edges
        .filter(({ node }) =>
          tours.find((tour) => tour === node.frontmatter.slug),
        )
        .reduce((acc, { node }) => {
          acc[node.frontmatter.slug] = node
          return acc
        }, {}),
    edges,
  )
  return (
    <aside className="recent-block recent-list recent-wide-thumbnail">
      <div className="container">
        <h2 className="text-center text-uppercase">RECENTLY VIEWED</h2>
        <div className="row recent-block-row">
          {tours.map((tour) => {
            console.log(tour)
            console.log(allTours[tour])
            const { id, frontmatter } = allTours[tour]
            const {
              tourName,
              slug,
              duration,
              fromPricing,
              destination,
              activity,
              subActivity,
              popularTour,
            } = frontmatter
            const tourLink = `/${destination.frontmatter.code}/${activity[0].frontmatter.code}/${slug}`
            const { image } = popularTour
            return (
              <article key={id} className="col-sm-6 col-md-3 article">
                <div className="thumbnail">
                  <h3 className="no-space">
                    <Link to={tourLink}>{tourName}</Link>
                  </h3>
                  <strong className="info-title">
                    {destination.frontmatter.destinationName}
                  </strong>
                  <div className="img-wrap">
                    {image && image.childImageSharp ? (
                      <Img fluid={image.childImageSharp.fluid} alt={tourName} />
                    ) : null}
                  </div>
                  <footer>
                    <div className="sub-info">
                      <span>{duration}</span>
                      <span>{fromPricing}</span>
                    </div>
                    <ActivitiesList data={{ activity, subActivity }} />
                  </footer>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </aside>
  )
}
export default RecentlyViews
