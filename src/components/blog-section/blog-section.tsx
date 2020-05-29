import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import ImageBlock from './image-block'
import TextBlock from './text-block'

const BlogSection = () => {
  const { photo1, photo2 } = useStaticQuery(graphql`
    query {
      photo1: file(relativePath: { eq: "pondo-pedal.JPG" }) {
        childImageSharp {
          fluid(maxWidth: 960, maxHeight: 627) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      photo2: file(relativePath: { eq: "turtle-tracking.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 960, maxHeight: 627) {
            ...GatsbyImageSharpFluid_withWebp
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
        <div className="row same-height">
          <ImageBlock fluid={photo1.childImageSharp.fluid} alt="Pondo Pdedal" />
          <TextBlock
            heading="Pedal in to Paradise"
            text="This is Photoshop's version of Lorem Ipsum. Proin gravida nibh
                vel velit auctor aliquet. Aenean sollicitudin, lorem quis
                bibendum auctor, nisi elit consequat ipsum, Duis sed odio sit
                amet nibh vulputate cursus a it amet mauris."
            link="#"
          />
        </div>
        <div className="row same-height">
          <ImageBlock fluid={photo2.childImageSharp.fluid} alt="Pondo Pdedal" />
          <TextBlock
            heading="Tracking Turtles in Kosi"
            text="This is Photoshop's version of Lorem Ipsum. Proin gravida nibh
                vel velit auctor aliquet. Aenean sollicitudin, lorem quis
                bibendum auctor, nisi elit consequat ipsum, Duis sed odio sit
                amet nibh vulputate cursus a it amet mauris."
            link="#"
          />
        </div>
      </div>
    </section>
  )
}

export default BlogSection
