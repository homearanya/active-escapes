import React from 'react'
import { graphql } from 'gatsby'

import { ImageSharp } from '../types'
import Layout from '../components/layout'
import SEO from '../components/seo'
import BannerDestination, {
  BannerDestinationData,
} from '../components/banner-destination'
import BlogSidebar from '../components/blog-sidebar'
import Image from '../components/image'

interface PostPageProps {
  readonly data: PageQueryData
}

const PostPage = ({
  data: {
    markdownRemark: {
      fields: { slug },
      html,
      frontmatter: {
        meta: { title, description },
        banner,
        title: postTitle,
        homePageListingImage,
      },
    },
  },
}: PostPageProps) => {
  const breadcrumbs: Breadcrumbs = [
    { id: '1', name: 'home', href: '/' },
    { id: '2', name: 'Blog', href: '/blog/' },
    { id: '3', name: postTitle, href: '' },
  ]
  const bannerData: BannerDestinationData = {
    heading: banner.heading,
    subHeading: banner.subHeading,
    heroImage: banner.image.childImageSharp.fluid,
    breadcrumbs,
  }

  return (
    <Layout>
      <SEO
        title={title}
        description={description}
        path={`/blog/${slug}`}
        image={banner.image.publicURL}
      />
      <BannerDestination data={bannerData} />
      <div className="content-with-sidebar common-spacing content-left">
        <div className="container">
          <div id="two-columns" className="row">
            <div id="content" className="col-sm-8 col-md-9">
              <div className="blog-holder no-pagination">
                <article className="blog-single">
                  <div className="img-wrap">
                    {homePageListingImage.image &&
                    homePageListingImage.image.childImageSharp ? (
                      <Image
                        image={homePageListingImage.image}
                        alt={homePageListingImage.alt}
                      />
                    ) : null}
                  </div>
                  <div className="description">
                    <h1 className="content-main-heading">{postTitle}</h1>
                    <div dangerouslySetInnerHTML={{ __html: html }} />
                  </div>
                </article>
              </div>
            </div>
            <BlogSidebar />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default PostPage

interface PageQueryData {
  site: {
    siteMetadata: {
      siteUrl: string
    }
  }
  markdownRemark: {
    fields: {
      slug: string
    }
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
      homePageListingImage: {
        alt: string
        image: ImageSharp
      }
    }
  }
}
export const query = graphql`
  query PostPage($id: String!) {
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
      html
      frontmatter {
        meta {
          title
          description
        }
        title
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
        homePageListingImage {
          alt
          image {
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
            publicURL
          }
        }
      }
    }
  }
`
