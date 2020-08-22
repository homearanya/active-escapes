import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import ImageBlock from './image-block'
import TextBlock from './text-block'

const BlogSection = () => {
  const { posts } = useStaticQuery(graphql`
    query BlogSectionQuery {
      posts: allMarkdownRemark(
        filter: {
          frontmatter: { templateKey: { eq: "post-page" }, featured: { gt: 0 } }
        }
        sort: { order: ASC, fields: [frontmatter___featured] }
      ) {
        edges {
          node {
            id
            frontmatter {
              title
              date
              featured
              introduction
              slug
              homePageListingImage {
                alt
                image {
                  childImageSharp {
                    fluid(maxWidth: 960) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `)
  return (
    <section className="blog-section featured-content adventure-holder content-block content-spacing">
      <div className="container">
        <header className="content-heading">
          <h2 className="main-heading">Recent Blog Posts</h2>
          <div className="seperator"></div>
        </header>
      </div>
      <div className="container-fluid">
        {posts.edges.map(({ node: { id, frontmatter } }, i) => {
          const reverse = i % 2 === 1 ? true : false
          const {
            title,
            slug,
            introduction,
            homePageListingImage,
          } = frontmatter
          return (
            <div
              key={id}
              className={`row same-height blog-section-row${
                reverse ? ' reverse' : ''
              }`}
            >
              <ImageBlock
                fluid={homePageListingImage.image.childImageSharp.fluid}
                alt={homePageListingImage.alt}
              />
              <TextBlock
                heading={title}
                text={introduction}
                link={`/blog/${slug}/`}
              />
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default BlogSection
