import React from 'react'
import { graphql } from 'gatsby'

import { ImageSharp } from '../types'
import Layout from '../components/layout'
import SEO from '../components/seo'
import BannerActivity, {
  BannerActivityData,
} from '../components/banner-activity'
import ActivityIntro, { ActivityIntroData } from '../components/activity-intro'
import FeaturedTours, { FeaturedToursData } from '../components/featured-tours'
import ByDestination from '../components/by-destination'
import RecentlyViews from '../components/recently-views'

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
        toursSection,
      },
    },
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
  return (
    <Layout>
      <SEO title={title} description={description} />
      <BannerActivity data={bannerData} />
      <ActivityIntro data={intro} />
      <FeaturedTours data={toursSection} />
      <ByDestination data={{ activity: code }} />
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
      toursSection: FeaturedToursData
    }
  }
}

export const query = graphql`
  query ActivityPageQuery($id: String!) {
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
          }
        }
        intro {
          heading
          text
          bestSeason
          locations
          icon {
            publicURL
          }
        }
        toursSection {
          heading
          subHeading
        }
      }
    }
  }
`
