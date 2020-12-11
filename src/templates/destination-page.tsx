import React, { useState, useEffect } from 'react'
import { graphql } from 'gatsby'
import { Flipper, Flipped } from 'react-flip-toolkit'
import { scroller } from 'react-scroll'

import TaylorMadeCard from '../components/taylor-made-card'
import DestinationTour from '../components/destination-tour'

import { ImageSharp, Reference } from '../types'
import Layout from '../components/layout'
import SEO from '../components/seo'
import ActivityIntro, { ActivityIntroData } from '../components/activity-intro'
import BannerDestination, {
  BannerDestinationData,
} from '../components/banner-destination'
import RecentlyViews from '../components/recently-views'

type TourEdges = {
  node: {
    id: string
    frontmatter: {
      slug: string
      tourName: string
      duration: string
      fromPricing: string
      shortDescription: string
      difficultyLevel: Reference
      destination: Reference
      activity: { name: Reference; featured: number }[]
      subActivity: Reference[] | null
      destinationTour: {
        title: string
        image: ImageSharp
        description?: string
        descriptionInParagraphs?: string[]
        emailLink: string
      }
    }
  }
}[]

interface DestinationPageProps {
  readonly data: PageQueryData
  readonly location: History
}
const DestinationPage = ({
  data: {
    site: {
      siteMetadata: { siteUrl },
    },
    markdownRemark: {
      frontmatter: {
        meta: { title, description },
        destinationName,
        banner,
        intro,
        customListings,
      },
    },
    tours,
    allDifficultyLevels,
    allHolidayTypes,
    allSubactivitiesTypes,
  },
  location,
}: DestinationPageProps) => {
  const [openFilter, setOpenFilter] = useState(false)
  const [grid, setGrid] = useState(false)
  const [{ holidayTypes, difficultyLevels }, setDropdowns] = useState({
    holidayTypes: {},
    difficultyLevels: {},
  })

  const [{ holidayType, difficulty }, setFilter] = useState({
    holidayType: location.state ? location.state.activity : '',
    difficulty: '',
  })
  const [filteredTours, setFilteredTours] = useState<TourEdges | null>(null)

  const breadcrumbs: Breadcrumbs = [
    { id: '1', name: 'home', href: '/' },
    { id: '2', name: 'destination', href: '' },
    { id: '3', name: destinationName, href: '' },
  ]
  const bannerData: BannerDestinationData = {
    heading: banner.heading,
    subHeading: banner.subHeading,
    heroImage: banner.image.childImageSharp.fluid,
    breadcrumbs,
  }

  useEffect(() => {
    const toursHolidayType = holidayType
      ? tours.edges.filter(({ node }) => {
          const { activity: tourActivity, subActivity } = node.frontmatter
          return (
            tourActivity.find((e) => e.name.frontmatter.code === holidayType) ||
            (subActivity &&
              subActivity.find((e) => e.frontmatter.code === holidayType))
          )
        })
      : tours.edges
    const toursDifficultyLevel = difficulty
      ? toursHolidayType.filter(
          ({ node }) =>
            node.frontmatter.difficultyLevel.frontmatter.code === difficulty,
        )
      : toursHolidayType

    setFilteredTours(toursDifficultyLevel)
  }, [holidayType, difficulty])

  useEffect(() => {
    // Difficulty Levels
    const dfLevels = tours.edges.reduce(
      (
        acc,
        {
          node: {
            frontmatter: { difficultyLevel },
          },
        },
      ) => {
        if (difficultyLevel) {
          if (!acc[difficultyLevel.frontmatter.code]) {
            acc[difficultyLevel.frontmatter.code] = 1
          } else {
            acc[difficultyLevel.frontmatter.code]++
          }
        }
        return acc
      },
      {},
    )
    const difficultyLevelsMap = allDifficultyLevels.edges.reduce((acc, cur) => {
      acc[cur.node.frontmatter.code] = cur.node.frontmatter.title
      return acc
    }, {})
    const finalDFLevels = {}
    Object.keys(dfLevels).forEach(
      (e) =>
        (finalDFLevels[e] = {
          name: difficultyLevelsMap[e] ? difficultyLevelsMap[e] : e,
          count: dfLevels[e],
        }),
    )

    // Holiday Types
    const hTypes = tours.edges.reduce(
      (
        acc,
        {
          node: {
            frontmatter: { activity, subActivity },
          },
        },
      ) => {
        if (activity) {
          activity.forEach((e) => {
            if (!acc[e.name.frontmatter.code]) {
              acc[e.name.frontmatter.code] = 1
            } else {
              acc[e.name.frontmatter.code]++
            }
          })
        }
        if (subActivity && Array.isArray(subActivity)) {
          subActivity.forEach((e) => {
            if (
              !activity ||
              !activity.find(
                (item) => item.name.frontmatter.code === e.frontmatter.code,
              )
            ) {
              if (!acc[e.frontmatter.code]) {
                acc[e.frontmatter.code] = 1
              } else {
                acc[e.frontmatter.code]++
              }
            }
          })
        }
        return acc
      },
      {},
    )

    let holidayTypesMap = allHolidayTypes.edges.reduce((acc, cur) => {
      acc[cur.node.frontmatter.code] = cur.node.frontmatter.activityName
      return acc
    }, {})
    holidayTypesMap = allSubactivitiesTypes.edges.reduce((acc, cur) => {
      acc[cur.node.frontmatter.code] = cur.node.frontmatter.title
      return acc
    }, holidayTypesMap)
    const finalHTypes = {}
    Object.keys(hTypes).forEach(
      (e) =>
        (finalHTypes[e] = {
          name: holidayTypesMap[e] ? holidayTypesMap[e] : e,
          count: hTypes[e],
        }),
    )

    setDropdowns({ holidayTypes: finalHTypes, difficultyLevels: finalDFLevels })
  }, [])

  useEffect(() => {
    if (location.state && location.state.scroll) {
      scroller.scrollTo('filters', {
        duration: 1500,
        smooth: 'easeInOut',
        offset: -100,
      })
    }
  }, [location])

  return (
    <Layout pageClassName="destination-page">
      <SEO title={title} description={description} />
      <BannerDestination data={bannerData} />
      <ActivityIntro data={intro} destination />
      {tours && tours.edges.length > 0 && (
        <div id="filters" className="content-block">
          {customListings && customListings.length > 0 && (
            <div className="container">
              <div className="content-block content-sub">
                {customListings.map((data, index) => {
                  const {
                    title,
                    image,
                    description,
                    link: pageLink,
                    emailLink,
                  } = data
                  const link = pageLink
                    ? {
                        href: pageLink,
                        text: 'explore',
                      }
                    : undefined
                  const link2 = emailLink
                    ? {
                        href: emailLink,
                        text: 'Enquire now',
                      }
                    : undefined
                  return (
                    <TaylorMadeCard
                      key={index}
                      data={{
                        title,
                        image,
                        description,
                        link,
                        link2,
                      }}
                      first={index === 0}
                      last={index === customListings.length - 1}
                    />
                  )
                })}
              </div>
            </div>
          )}
          <div className="container">
            <div
              className={`filter-option${openFilter ? ' filter-active' : ''}`}
            >
              <strong className="result-info">
                {`${filteredTours?.length} TRIPS MATCHES YOUR SEARCH CRITERIA`}
              </strong>
              <div className="layout-holder">
                <div className="layout-action">
                  <div
                    onClick={() => setGrid(false)}
                    className={`link link-list${!grid ? ' active' : ''}`}
                  >
                    <span className="icon-list"></span>
                  </div>
                  <div
                    onClick={() => setGrid(true)}
                    className={`link link-grid${grid ? ' active' : ''}`}
                  >
                    <span className="icon-grid"></span>
                  </div>
                </div>
                <div className="select-holder">
                  <a
                    onClick={() => setOpenFilter((openFilter) => !openFilter)}
                    className="btn btn-primary btn-filter"
                  >
                    <i className="fa fa-sliders"></i> Filter
                  </a>
                  <div className="filter-slide destination">
                    <div className="select-col">
                      <select
                        className="btn btn-trip btn-trip-v2 filter-select"
                        value={holidayType}
                        onChange={(e) =>
                          setFilter({ holidayType: e.target.value, difficulty })
                        }
                      >
                        <option value="">Holiday Type</option>
                        {Object.keys(holidayTypes).map((ht) => (
                          <option
                            key={ht}
                            value={ht}
                          >{`${holidayTypes[ht].name}`}</option>
                        ))}
                      </select>
                    </div>
                    <div className="select-col">
                      <select
                        className="btn btn-trip btn-trip-v2 filter-select"
                        value={difficulty}
                        onChange={(e) =>
                          setFilter({ holidayType, difficulty: e.target.value })
                        }
                      >
                        <option value="">Difficulty</option>
                        {Object.keys(difficultyLevels).map((dfLevel) => (
                          <option
                            key={dfLevel}
                            value={dfLevel}
                          >{`${difficultyLevels[dfLevel].name}`}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {filteredTours ? (
              <Flipper
                flipKey={filteredTours.map(({ node }) => node.id).join('')}
              >
                <div
                  className={`content-holder list-view${
                    grid ? ' row db-3-col' : ''
                  }`}
                >
                  {filteredTours.map(({ node }) => {
                    const {
                      id,
                      frontmatter: {
                        tourName,
                        slug,
                        duration,
                        fromPricing,
                        difficultyLevel,
                        shortDescription,
                        destinationTour,
                        destination,
                        activity,
                        subActivity,
                      },
                    } = node
                    return (
                      <Flipped key={id} flipId={id}>
                        <DestinationTour
                          siteUrl={siteUrl}
                          data={{
                            tourName,
                            duration,
                            slug,
                            fromPricing,
                            difficultyLevel,
                            shortDescription,
                            destinationTour,
                            destination,
                            activity,
                            subActivity,
                          }}
                          grid={grid}
                        />
                      </Flipped>
                    )
                  })}
                </div>
              </Flipper>
            ) : null}
          </div>
        </div>
      )}
      <RecentlyViews />
    </Layout>
  )
}

export default DestinationPage

interface PageQueryData {
  site: {
    siteMetadata: {
      siteUrl: string
    }
  }
  markdownRemark: {
    frontmatter: {
      meta: {
        title: string
        description: string
      }
      destinationName: string
      code: string
      banner: {
        heading: string
        subHeading: string
        image: ImageSharp
      }
      intro: ActivityIntroData
      customListings: {
        title: string
        image: ImageSharp
        description?: string
        link?: string
        emailLink: string
      }[]
    }
  }
  allHolidayTypes: {
    edges: {
      node: {
        frontmatter: {
          activityName: string
          code: string
        }
      }
    }[]
  }
  allSubactivitiesTypes: {
    edges: {
      node: {
        frontmatter: {
          title: string
          code: string
        }
      }
    }[]
  }
  tours: {
    edges: TourEdges
  }
  allDifficultyLevels: {
    edges: {
      node: {
        frontmatter: {
          title: string
          code: string
        }
      }
    }[]
  }
}
export const query = graphql`
  query DestinationPage($id: String!, $destination: String!) {
    site {
      siteMetadata {
        siteUrl
      }
    }
    markdownRemark(id: { eq: $id }) {
      fields {
        slug
      }
      id
      frontmatter {
        meta {
          title
          description
        }
        destinationName
        code
        banner {
          heading
          subHeading
          image {
            childImageSharp {
              fluid(maxWidth: 1920) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
            publicURL
          }
        }
        intro {
          heading
          text
          inset {
            bestSeason
            locations
            image {
              publicURL
            }
            icon
          }
          link {
            href
            text
          }
        }
        customListings {
          order
          title
          image {
            childImageSharp {
              fluid(maxWidth: 550, maxHeight: 338, quality: 70) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
            publicURL
          }
          description
          link
          emailLink
        }
      }
    }
    allHolidayTypes: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "activity-page" } } }
      sort: { fields: [frontmatter___popularTour___featured], order: ASC }
    ) {
      edges {
        node {
          id
          frontmatter {
            activityName
            code
          }
        }
      }
    }
    allSubactivitiesTypes: allMarkdownRemark(
      filter: { frontmatter: { key: { eq: "sub-activity" } } }
      sort: { order: ASC, fields: frontmatter___code }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            code
          }
        }
      }
    }
    tours: allMarkdownRemark(
      filter: {
        frontmatter: {
          templateKey: { eq: "tour-page" }
          destination: { frontmatter: { code: { eq: $destination } } }
        }
      }
      sort: { fields: [frontmatter___destinationTour___order], order: ASC }
    ) {
      edges {
        node {
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
              }
            }
            activity {
              name {
                id
                frontmatter {
                  activityName
                  code
                  icon
                  iconFile
                }
              }
              featured
            }
            subActivity {
              id
              frontmatter {
                code
                icon
                title
              }
            }
            destinationTour {
              order
              title
              image {
                childImageSharp {
                  fluid(maxWidth: 550, maxHeight: 338, quality: 70) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
                publicURL
              }
              description
              descriptionInParagraphs
              emailLink
            }
          }
        }
      }
    }
    allDifficultyLevels: allMarkdownRemark(
      filter: { frontmatter: { key: { eq: "difficulty-level" } } }
      sort: { order: ASC, fields: [frontmatter___order] }
    ) {
      edges {
        node {
          frontmatter {
            title
            code
            icon
          }
        }
      }
    }
  }
`
