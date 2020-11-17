import React from 'react'
import { graphql } from 'gatsby'

import { ImageSharp } from '../types'

import Layout from '../components/layout'
import SEO from '../components/seo'
import BannerActivity, {
  BannerActivityData,
} from '../components/banner-activity'
import TextBlock, { TextBlockData } from '../components/text-block'

interface AboutPageProps {
  readonly data: PageQueryData
}

const AboutPage = ({
  data: {
    markdownRemark: {
      frontmatter: {
        meta: { title, description },
        banner,
        intro,
      },
    },
  },
}: AboutPageProps) => {
  const breadcrumbs: Breadcrumbs = [
    { id: '1', name: 'home', href: '/' },
    { id: '2', name: 'about', href: '' },
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
      <div className="content-block bg-white content-center about-us">
        <div className="container">
          <header className="content-heading">
            <h2 className="main-heading">{intro.heading}</h2>
            {intro.description.map((paragraph, i) => (
              <p key={i} dangerouslySetInnerHTML={{ __html: paragraph }} />
            ))}
            <div className="seperator"></div>
          </header>
          <div className="row text-center row-about-us">
            {intro.iconsSection.map((textBlock, i) => (
              <TextBlock key={i} data={textBlock} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default AboutPage

interface PageQueryData {
  markdownRemark: {
    frontmatter: {
      meta: {
        title: string
        description: string
      }
      banner: {
        heading: string
        subHeading: string
        image: ImageSharp
      }
      intro: {
        heading: string
        description: string[]
        iconsSection: TextBlockData[]
      }
    }
  }
}

export const query = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        meta {
          title
          description
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
          description
          iconsSection {
            iconClass
            heading
            text
            extraText
          }
        }
      }
    }
  }
`
