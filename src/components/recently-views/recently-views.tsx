import React, { useState, useEffect, useReducer } from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { useCookies } from 'react-cookie'
import useMedia from 'use-media'

import ActivitiesList from '../activities-list'

interface State {
  maxHeight: number
  heights: number[]
  totalMeasurements: number
}

interface Action {
  type: string
  payload: {
    index: number
    height: number
  }
}

const reducer = (state: State, action: Action) => {
  const { maxHeight, heights, totalMeasurements } = state
  const { type, payload } = action
  const { index, height } = payload
  switch (type) {
    case 'add':
      if (!heights[index] || height > heights[index]) {
        heights[index] = height
        return {
          maxHeight: height > maxHeight ? height : maxHeight,
          heights,
          totalMeasurements: height ? totalMeasurements + 1 : totalMeasurements,
        }
      }
      return state
    default:
      throw state
  }
}

const RecentlyViews = () => {
  const isNotMobile = useMedia({ minWidth: 660 })
  const [cookies] = useCookies(['recently-views'])
  const [{ tours, allTours }, setTours] = useState({ tours: [], allTours: [] })
  const {
    tours: { edges },
  } = useStaticQuery(graphql`
    query RecentlyViews {
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
                name {
                  id
                  frontmatter {
                    activityName
                    code
                    icon
                  }
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
                    fluid(maxWidth: 500, maxHeight: 375, quality: 70) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                  publicURL
                }
              }
            }
          }
        }
      }
    }
  `)
  useEffect(() => {
    let tours
    if (!cookies['recently-views']) {
      tours = []
    } else {
      tours = cookies['recently-views']
    }
    const allTours = edges
      .filter(({ node }) =>
        tours.find((tour) => tour === node.frontmatter.slug),
      )
      .reduce((acc, { node }) => {
        acc[node.frontmatter.slug] = node
        return acc
      }, {})
    setTours({ tours, allTours })
  }, [edges])

  const initialState: State = {
    maxHeight: 0,
    heights: tours.map((e) => 0),
    totalMeasurements: 0,
  }

  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <aside className="recent-block recent-list recent-wide-thumbnail">
      <div className="container">
        <h2 className="text-center text-uppercase">RECENTLY VIEWED</h2>
        <div className="row recent-block-row">
          {tours.map((tour, index) => {
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
            const tourLink = `/${destination.frontmatter.code}/${activity[0].name.frontmatter.code}/${slug}`
            const { image } = popularTour
            return (
              <article key={id} className="col-sm-6 col-md-3 article">
                <div className="thumbnail">
                  <h3
                    ref={(h3) => {
                      if (
                        isNotMobile &&
                        h3 &&
                        (h3.clientHeight > state.heights[index] ||
                          !state.heights[index])
                      ) {
                        dispatch({
                          type: 'add',
                          payload: { index, height: h3.clientHeight },
                        })
                      }
                    }}
                    style={
                      isNotMobile && state.totalMeasurements >= tours.map.length
                        ? { height: `${state.maxHeight}px` }
                        : {}
                    }
                    className="no-space"
                  >
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
