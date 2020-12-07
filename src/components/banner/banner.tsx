import React, { useContext } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'
import Slide, { SlideProps } from './slide'
import FeatureBlock from './feature-block'
import WhiteLogo from '../../img/logos/logo-white.inline.svg'
import { ModalContext } from '../../context/modal-context'

interface Slide extends SlideProps {
  id: string
}

const Banner = () => {
  const { dispatch } = useContext(ModalContext)
  const { slide1, slide2, slide3, slide4 } = useStaticQuery(graphql`
    query {
      slide1: file(relativePath: { eq: "banner/img-01-kosi-1920x964.jpg" }) {
        id
        childImageSharp {
          fluid(maxWidth: 1920, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
        publicURL
      }
      slide2: file(relativePath: { eq: "banner/img-03-amphi1920x964.jpg" }) {
        id
        childImageSharp {
          fluid(maxWidth: 1920, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
        publicURL
      }
      slide3: file(relativePath: { eq: "banner/img-05-sentinel1920x964.jpg" }) {
        id
        childImageSharp {
          fluid(maxWidth: 1920, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
        publicURL
      }
      slide4: file(relativePath: { eq: "banner/img-06-sisal1920x964.jpg" }) {
        id
        childImageSharp {
          fluid(maxWidth: 1920, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
        publicURL
      }
    }
  `)

  const slides: Slide[] = [
    {
      id: slide1.id,
      fluid: slide1.childImageSharp.fluid,
      alt: 'Kosi Bay',
      heading1: 'ACTIVE HOLIDAYS',
      heading2: 'SOUTHERN AFRICA',
      animation: 'animation1',
      icon: (
        <WhiteLogo
          style={{ width: '60px', height: '60px' }}
          className="slide-icon rotate"
        />
      ),

      button: {
        text: 'activities',
        handler: () =>
          dispatch({ type: 'toggleModalActivities', payload: true }),
      },
    },
    {
      id: slide2.id,
      fluid: slide2.childImageSharp.fluid,
      alt: 'Amphitheatre',
      heading1: 'WILD DESTINATIONS',
      heading2: 'SOUTHERN AFRICA',
      animation: 'animation2',
      icon: <span className="icon-hiking-camping slide-icon" />,
      button: {
        text: 'destinations',
        handler: () =>
          dispatch({ type: 'toggleModalDestinations', payload: true }),
      },
    },
    {
      id: slide3.id,
      fluid: slide3.childImageSharp.fluid,
      alt: 'Sentinel',
      heading1: 'ACTIVE HOLIDAYS',
      heading2: 'SOUTHERN AFRICA',
      animation: 'animation1',
      icon: (
        <WhiteLogo
          style={{ width: '60px', height: '60px' }}
          className="slide-icon"
        />
      ),

      button: {
        text: 'activities',
        handler: () =>
          dispatch({ type: 'toggleModalActivities', payload: true }),
      },
    },
    {
      id: slide4.id,
      fluid: slide4.childImageSharp.fluid,
      alt: 'Sunset',
      heading1: 'WILD DESTINATIONS',
      heading2: 'SOUTHERN AFRICA',
      animation: 'animation2',
      icon: <span className="icon-hiking-camping slide-icon" />,
      button: {
        text: 'destinations',
        handler: () =>
          dispatch({ type: 'toggleModalDestinations', payload: true }),
      },
    },
  ]
  return (
    <>
      <div className="banner banner-home">
        <Carousel
          showStatus={false}
          autoPlay={true}
          infiniteLoop={true}
          interval={5000}
          showThumbs={false}
          showIndicators={false}
        >
          {slides.map(
            ({
              id,
              fluid,
              alt,
              heading1,
              heading2,
              animation,
              icon,
              button,
            }) => (
              <Slide
                key={id}
                fluid={fluid}
                alt={alt}
                heading1={heading1}
                heading2={heading2}
                animation={animation}
                icon={icon}
                button={button}
              />
            ),
          )}
        </Carousel>
        <FeatureBlock />
      </div>
    </>
  )
}

export default Banner
