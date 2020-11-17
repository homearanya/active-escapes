import React from 'react'
import { graphql } from 'gatsby'

import { ImageSharp } from '../types'
import Layout from '../components/layout'
import SEO from '../components/seo'
import BannerDestination, {
  BannerDestinationData,
} from '../components/banner-destination'

import PostThumbnail from '../components/post-thumbnail'
import BlogSidebar from '../components/blog-sidebar'

interface DestinationPageProps {
  readonly data: PageQueryData
}
const DestinationPage = ({
  data: {
    site: {
      siteMetadata: { siteUrl },
    },
    markdownRemark: {
      frontmatter: {
        meta: { title, description },
        banner,
      },
    },
    posts: { edges: postEdges },
  },
}: DestinationPageProps) => {
  const breadcrumbs: Breadcrumbs = [
    { id: '1', name: 'home', href: '/' },
    { id: '2', name: 'Blog', href: '' },
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
      <div className="content-with-sidebar common-spacing content-left">
        <div className="container">
          <div id="two-columns" className="row">
            <div id="content" className="col-sm-8 col-md-9">
              <div className="blog-holder">
                <div className="blog-list list-view">
                  {postEdges.map(({ node: { id, frontmatter } }) => (
                    <PostThumbnail
                      key={id}
                      data={{
                        siteUrl,
                        postTitle: frontmatter.title,
                        slug: frontmatter.slug,
                        introduction: frontmatter.introduction,
                        date: frontmatter.date,
                        image: frontmatter.blogListingImage.image,
                      }}
                    />
                  ))}
                </div>
              </div>
              <nav className="pagination-wrap bg-gray">
                <div className="btn-prev">
                  <a href="#" aria-label="Previous">
                    <span className="icon-angle-right"></span>
                  </a>
                </div>
                <ul className="pagination">
                  <li>
                    <a href="#">1</a>
                  </li>
                  <li>
                    <a href="#">2</a>
                  </li>
                  <li>
                    <a href="#">3</a>
                  </li>
                  <li className="active">
                    <a href="#">4</a>
                  </li>
                  <li>
                    <a href="#">5</a>
                  </li>
                  <li>...</li>
                  <li>
                    <a href="#">7</a>
                  </li>
                </ul>
                <div className="btn-next">
                  <a href="#" aria-label="Previous">
                    <span className="icon-angle-right"></span>
                  </a>
                </div>
              </nav>
            </div>
            <BlogSidebar />
          </div>
        </div>
      </div>
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
      banner: {
        heading: string
        subHeading: string
        image: ImageSharp
      }
    }
  }
  posts: {
    edges: {
      node: {
        id: string
        frontmatter: {
          title: string
          date: string
          slug: string
          introduction: string
          blogListingImage: {
            alt: string
            image: ImageSharp
          }
        }
      }
    }[]
  }
}
export const query = graphql`
  query BlogPageQuery {
    site {
      siteMetadata {
        siteUrl
      }
    }
    markdownRemark(frontmatter: { templateKey: { eq: "blog-page" } }) {
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
      }
    }
    posts: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "post-page" } } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            slug
            date(formatString: "MMM DD, YYYY")
            introduction
            blogListingImage {
              alt
              image {
                childImageSharp {
                  fluid(maxWidth: 400) {
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
`
