import React, { useMemo } from 'react'
import { graphql } from 'gatsby'

import { ImageSharp } from '../types'
import Layout from '../components/layout'
import SEO from '../components/seo'
import BannerActivity, {
  BannerActivityData,
} from '../components/banner-activity'
import ActivityIntro, { ActivityIntroData } from '../components/activity-intro'
import FeaturedTours from '../components/featured-tours'
import { FeaturedTourInterface } from '../components/featured-tour'
import ByDestination from '../components/by-destination'
import { FeaturedDestinationData } from '../components/featured-destination'
import RecentlyViews from '../components/recently-views'
import TaylorMadeCard, {
  TaylorMadeCardInterface,
} from '../components/taylor-made-card'

interface ActivityPageProps {
  readonly data: PageQueryData
}

const ActivityPage = ({
  data: {
    markdownRemark: {
      frontmatter: {
        meta: { title, description },
        activityName,
        code,
        banner,
        intro,
        featuredToursSection,
        byDestinationSection,
        taylorMadeSection,
      },
    },
    tours,
  },
}: ActivityPageProps) => {
  const breadcrumbs: Breadcrumbs = [
    { id: '1', name: 'home', href: '/' },
    { id: '2', name: 'activity', href: '' },
    { id: '3', name: activityName, href: '' },
  ]
  const bannerData: BannerActivityData = {
    heading: banner.heading,
    subHeading: banner.subHeading,
    heroImage: banner.image.childImageSharp.fluid,
    breadcrumbs,
  }
  const featuredTours = useMemo(
    () =>
      tours.edges
        .filter(({ node }) => {
          const activity = node.frontmatter.activity.find(
            (e) => e.name.frontmatter.code === code,
          )
          return activity && activity.featured > 0
        })
        .map(({ node: { id, frontmatter } }) => ({ id, frontmatter })),
    [tours],
  )
  const numberOfToursByDestination = byDestinationSection
    ? useMemo(
        () =>
          tours.edges.reduce((acc, { node }) => {
            const destination = node.frontmatter.destination.frontmatter.code
            if (!acc[destination]) {
              acc[destination] = 1
            } else {
              acc[destination]++
            }
            return acc
          }, {}),
        [tours],
      )
    : undefined
  const destinations =
    byDestinationSection && numberOfToursByDestination
      ? useMemo(
          () =>
            byDestinationSection.destinations.map((destination) => ({
              featuredDestination: destination,
              activity: code,
              numberOfTours:
                numberOfToursByDestination[
                  destination.destination.frontmatter.code
                ],
            })),
          [numberOfToursByDestination, byDestinationSection, code],
        )
      : undefined

  let gridFeaturedTours = ''
  if (featuredTours.length !== 3 && featuredTours.length < 5) {
    gridFeaturedTours = 'grid-2'
  }
  let gridTaylorMadeSection = ''
  if (taylorMadeSection && taylorMadeSection.options.length > 2) {
    gridTaylorMadeSection = 'grid-2'
  }
  return (
    <Layout pageClassName="activity-page">
      <SEO title={title} description={description} />
      <BannerActivity data={bannerData} />
      <ActivityIntro data={intro} />
      <FeaturedTours
        data={{
          heading: featuredToursSection.heading,
          subHeading: featuredToursSection.subHeading,
          grid: gridFeaturedTours,
          activityFilter: code,
          featuredTours,
        }}
      />
      {byDestinationSection && (
        <ByDestination
          data={{
            heading: byDestinationSection.heading,
            subHeading: byDestinationSection.subHeading,
            featuredDestinations: destinations ? destinations : [],
          }}
        />
      )}
      {taylorMadeSection && taylorMadeSection.options.length > 0 && (
        <article
          className={`activity-page__taylor-made-section content-block article-boxed`}
        >
          <div className="container">
            <header className="content-heading">
              <h2 className="main-heading">{taylorMadeSection.heading}</h2>
              <span className="main-subtitle">
                {taylorMadeSection.subHeading}
              </span>
              {/* <div className="seperator" /> */}
            </header>
            <div
              className={`activity-page__taylor-made-wrapper${
                gridTaylorMadeSection ? ` ${gridTaylorMadeSection}` : ''
              }`}
            >
              {taylorMadeSection.options.map((data) => (
                <TaylorMadeCard data={data} />
              ))}
            </div>
          </div>
        </article>
      )}
      <RecentlyViews />
    </Layout>
  )
}

export default ActivityPage

interface PageQueryData {
  markdownRemark: {
    frontmatter: {
      meta: {
        title: string
        description: string
      }
      activityName: string
      code: string
      banner: {
        heading: string
        subHeading: string
        image: ImageSharp
      }
      intro: ActivityIntroData
      featuredToursSection: {
        heading: string
        subHeading: string
      }
      byDestinationSection: {
        heading: string
        subHeading: string
        destinations: FeaturedDestinationData[]
      }
      taylorMadeSection: {
        heading: string
        subHeading: string
        options: TaylorMadeCardInterface[]
      }
    }
  }
  tours: {
    edges: {
      node: {
        id: string
        frontmatter: FeaturedTourInterface
      }
    }[]
  }
}

export const query = graphql`
  query ActivityPage($id: String!, $activity: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        meta {
          title
          description
        }
        activityName
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
            icon {
              publicURL
            }
          }
          link {
            href
            text
          }
        }
        featuredToursSection {
          heading
          subHeading
        }
        byDestinationSection {
          heading
          subHeading
          destinations {
            destination {
              frontmatter {
                code
                destinationName
              }
            }
            image {
              childImageSharp {
                fluid(maxWidth: 500, maxHeight: 291, quality: 70) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
              publicURL
            }
            heading
            subHeading
            description
            link
          }
        }
        taylorMadeSection {
          heading
          subHeading
          options {
            image {
              childImageSharp {
                fluid(maxWidth: 500, maxHeight: 291, quality: 70) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
              publicURL
            }
            title
            subTitle
            description
            link {
              href
              text
            }
          }
        }
      }
    }
    tours: allMarkdownRemark(
      filter: {
        frontmatter: {
          templateKey: { eq: "tour-page" }
          activity: {
            elemMatch: { name: { frontmatter: { code: { eq: $activity } } } }
          }
        }
      }
      sort: { fields: [frontmatter___activity___featured], order: ASC }
    ) {
      edges {
        node {
          id
          frontmatter {
            meta {
              description
            }
            slug
            tourName
            duration
            destination {
              frontmatter {
                code
                destinationName
              }
            }
            activity {
              name {
                frontmatter {
                  code
                  activityName
                }
              }
              featured
              listing {
                title
                subtitle
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
            }
          }
        }
      }
    }
  }
`
