import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import Review from './review'
import { textTruncate } from '../../utils/helpers'

const ReviewsSection = () => {
  const {
    backgroundImage,
    googlePlaceId,
    googleReviews,
  } = useStaticQuery(graphql`
    query {
      backgroundImage: file(
        relativePath: { eq: "generic/PP-Malutitrail1920x1736.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      googlePlaceId: site {
        siteMetadata {
          googlePlaceId
        }
      }
      googleReviews: allGooglePlacesReview(
        sort: { order: DESC, fields: [time] }
        filter: { rating: { eq: 5 } }
        limit: 5
      ) {
        edges {
          node {
            author_name
            author_url
            profile_photo_url
            rating
            text
            time
            id
          }
        }
      }
    }
  `)
  return (
    <div
      className="testimonial-holder parallax"
      data-stellar-background-ratio="0.25"
      id="testimonial-home-page"
      style={{
        backgroundImage: `url(${backgroundImage.childImageSharp.fluid.src})`,
      }}
    >
      <div className="container">
        <div id="testimonial-home-slide">
          <Carousel
            showStatus={false}
            autoPlay={true}
            infiniteLoop={true}
            interval={5000}
            showThumbs={false}
          >
            {googleReviews.edges.map(({ node }) => (
              <Review
                googlePlaceId={googlePlaceId.siteMetadata.googlePlaceId}
                key={node.id}
                author={node.author_name}
                authorURL={node.author_url}
                text={textTruncate(node.text, 400)}
                // profilePicture={node.profile_photo_url}
              />
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  )
}

export default ReviewsSection
