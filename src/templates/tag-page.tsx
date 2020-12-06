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

interface TagPageProps {
  readonly data: PageQueryData
  readonly pageContext: {
    id: string
    tag: string
    tags: {
      [key: string]: {
        count: number
        slug: string
      }
    }
  }
}
const TagPage = ({
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
  pageContext,
}: TagPageProps) => {
  const breadcrumbs: Breadcrumbs = [
    { id: '1', name: 'home', href: '/' },
    { id: '2', name: 'Blog', href: '/blog/' },
    { id: '3', name: 'Tags', href: '' },
    { id: '4', name: pageContext.tag, href: '' },
  ]
  const bannerData: BannerDestinationData = {
    heading: banner.heading,
    subHeading: `${pageContext.tag} (${
      pageContext.tags[pageContext.tag].count
    })`,
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
                        tags: frontmatter.tags,
                        allTags: pageContext.tags,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
            <BlogSidebar tags={pageContext.tags} />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default TagPage

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
          tags: string[]
        }
      }
    }[]
  }
}
export const query = graphql`
  query TagPage($tag: String!) {
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
      filter: { frontmatter: { tags: { eq: $tag } } }
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
            tags
          }
        }
      }
    }
  }
`
