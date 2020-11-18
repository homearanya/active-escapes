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
import RecentlyViews from '../components/recently-views'
import TaylorMadeCard, {
  TaylorMadeCardInterface,
} from '../components/taylor-made-card'

interface DestinationActivityPageProps {
  readonly data: PageQueryData
}

const DestinationActivityPage = ({
  data: {
    markdownRemark: {
      frontmatter: {
        meta,
        title,
        filter: { activity },
        banner,
        intro,
        featuredToursSection,
        taylorMadeSection,
      },
    },
    tours,
  },
}: DestinationActivityPageProps) => {
  const breadcrumbs: Breadcrumbs = [
    { id: '1', name: 'home', href: '/' },
    { id: '2', name: 'destination-activity', href: '' },
    { id: '3', name: title, href: '' },
  ]
  const bannerData: BannerActivityData = {
    heading: banner.heading,
    subHeading: banner.subHeading,
    heroImage: banner.image.childImageSharp.fluid,
    breadcrumbs,
  }
  const featuredTours = useMemo(
    () =>
      tours.edges.map(({ node: { id, frontmatter } }) => ({ id, frontmatter })),
    [tours],
  )
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
      <SEO title={meta.title} description={meta.description} />
      <BannerActivity data={bannerData} />
      <ActivityIntro data={intro} />
      <FeaturedTours
        data={{
          heading: featuredToursSection.heading,
          subHeading: featuredToursSection.subHeading,
          grid: gridFeaturedTours,
          activityFilter: activity,
          featuredTours,
        }}
      />
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

export default DestinationActivityPage

interface PageQueryData {
  markdownRemark: {
    frontmatter: {
      meta: {
        title: string
        description: string
      }
      title: string
      filter: {
        destination: string
        activity: string
      }
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
  query DestinationActivityPage(
    $id: String!
    $activity: String!
    $destination: String!
  ) {
    markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        meta {
          title
          description
        }
        title
        filter {
          destination
          activity
        }
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
          destination: { frontmatter: { code: { eq: $destination } } }
        }
      }
      sort: { fields: [frontmatter___destinationTour___order], order: ASC }
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
