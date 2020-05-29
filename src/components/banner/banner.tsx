import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'
import Slide from './slide'
import FeatureBlock from './feature-block'
import WhiteLogo from '../../img/logos/logo-white.inline.svg'

const Banner = () => {
  const { slide1, slide2, slide3 } = useStaticQuery(graphql`
    query {
      slide1: file(relativePath: { eq: "banner/img-01-kosi-1920x964.jpg" }) {
        childImageSharp {
          fluid(
            maxWidth: 1920
            sizes: "(max-width: 1600px) 1600px, (max-width: 1920px) , 1920px"
            srcSetBreakpoints: [1600, 1920]
          ) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      slide2: file(relativePath: { eq: "banner/img-03-amphi1920x964.jpg" }) {
        childImageSharp {
          fluid(
            maxWidth: 1920
            sizes: "(max-width: 1600px) 1600px, (max-width: 1920px) , 1920px"
            srcSetBreakpoints: [1600, 1920]
          ) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      slide3: file(relativePath: { eq: "banner/img-05-sentinel1920x964.jpg" }) {
        childImageSharp {
          fluid(
            maxWidth: 1920
            sizes: "(max-width: 1600px) 1600px, (max-width: 1920px) , 1920px"
            srcSetBreakpoints: [1600, 1920]
          ) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <div className="banner banner-home">
      <Carousel
        showStatus={false}
        autoPlay={true}
        infiniteLoop={true}
        interval={5000}
        showThumbs={false}
        showIndicators={false}
      >
        <Slide
          fluid={slide1.childImageSharp.fluid}
          alt="Kosi Bay"
          heading1="ACTIVE HOLIDAYS"
          heading2="SOUTHERN AFRICA"
          animation="animation1"
          icon={
            <WhiteLogo
              style={{ width: '60px', height: '60px' }}
              className="slide-icon rotate"
            />
          }
          button={{ text: 'activities', link: '/activities/' }}
        />
        <Slide
          fluid={slide2.childImageSharp.fluid}
          alt="Amphitheatre"
          heading1="WILD DESTINATIONS"
          heading2="SOUTHERN AFRICA"
          animation="animation2"
          icon={<span className="icon-hiking-camping slide-icon" />}
          button={{ text: 'destinations', link: '/destinations/' }}
        />
        <Slide
          fluid={slide3.childImageSharp.fluid}
          alt="Sentinel"
          heading1="ACTIVE HOLIDAYS"
          heading2="SOUTHERN AFRICA"
          animation="animation1"
          icon={
            <WhiteLogo
              style={{ width: '60px', height: '60px' }}
              className="slide-icon"
            />
          }
          button={{ text: 'activities', link: '/activities/' }}
        />
      </Carousel>
      <FeatureBlock />
    </div>
  )
}

export default Banner
