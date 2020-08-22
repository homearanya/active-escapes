import React from 'react'
import { graphql } from 'gatsby'

import { ImageSharp } from '../types'
import Layout from '../components/layout'
import SEO from '../components/seo'
import BannerDestination, {
  BannerDestinationData,
} from '../components/banner-destination'

interface SimplePageProps {
  readonly data: PageQueryData
}
const SimplePage = ({
  data: {
    markdownRemark: {
      html,
      frontmatter: {
        meta: { title, description },
        title: pageTitle,
        banner,
      },
    },
  },
}: SimplePageProps) => {
  const breadcrumbs: Breadcrumbs = [
    { id: '1', name: 'home', href: '/' },
    { id: '2', name: pageTitle, href: '' },
  ]
  const bannerData: BannerDestinationData = {
    heading: banner.heading,
    subHeading: banner.subHeading,
    heroImage: banner.image.childImageSharp.fluid,
    breadcrumbs,
  }

  return (
    <Layout>
      <SEO title={title} description={description} />
      <BannerDestination data={bannerData} />
      <div className="content-with-sidebar common-spacing content-left simple-page">
        <div className="container">
          <div className="row">
            <div id="content" className="col-md-offset-2 col-md-8">
              <div className="blog-holder no-pagination">
                <article className="blog-single">
                  <h1 className="content-main-heading">{pageTitle}</h1>
                  <div dangerouslySetInnerHTML={{ __html: html }} />
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default SimplePage

interface PageQueryData {
  markdownRemark: {
    html: string
    frontmatter: {
      meta: {
        title: string
        description: string
      }
      title: string
      banner: {
        heading: string
        subHeading: string
        image: ImageSharp
      }
    }
  }
}
export const query = graphql`
  query SimplePageQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        meta {
          title
          description
        }
        title
        banner {
          image {
            childImageSharp {
              fluid(maxWidth: 1920) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          heading
          subHeading
        }
      }
    }
  }
`
