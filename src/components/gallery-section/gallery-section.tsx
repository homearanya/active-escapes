import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Photo from './photo'
import IconRafting from '../../img/icons/icon-rafting.inline.svg'

const GallerySection = () => {
  const {
    photo1,
    photo2,
    photo3,
    photo4,
    photo5,
    photo6,
    photo7,
    photo8,
    photo9,
  } = useStaticQuery(graphql`
    query {
      photo1: file(relativePath: { eq: "gallery/img-01-hiking.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 170, maxHeight: 165, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
        publicURL
      }
      photo2: file(relativePath: { eq: "gallery/img-02-cycling.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 170, maxHeight: 165, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
        publicURL
      }
      photo3: file(relativePath: { eq: "gallery/img-03-rafting.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 170, maxHeight: 165, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
        publicURL
      }
      photo4: file(relativePath: { eq: "gallery/img-04-drakensberg.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 170, maxHeight: 165, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
        publicURL
      }
      photo5: file(relativePath: { eq: "gallery/img-05-midlands.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 170, maxHeight: 165, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
        publicURL
      }
      photo6: file(relativePath: { eq: "gallery/img-06-wildcoast.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 170, maxHeight: 165, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
        publicURL
      }
      photo7: file(relativePath: { eq: "gallery/img-07-kosi.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 170, maxHeight: 165, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
        publicURL
      }
      photo8: file(relativePath: { eq: "gallery/img-08-freestate.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 170, maxHeight: 165, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
        publicURL
      }
      photo9: file(relativePath: { eq: "gallery/img-08-westerncape.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 170, maxHeight: 165, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
        publicURL
      }
    }
  `)
  return (
    <section className="content-block bg-white gallery-section">
      <div className="container">
        <div className="adventure-holder gallery-home-holder">
          <div className="row gallery-section__row">
            <div className="col-md-6 img-block">
              <ul className="gallery-list gallery-with-icon">
                <Photo
                  link="/activity/hiking/"
                  fluid={photo1.childImageSharp.fluid}
                  alt="Hiking"
                  icon={<span className="hover icon-hiking"></span>}
                  text="Hiking"
                />
                <Photo
                  link="/activity/mountainbiking/"
                  fluid={photo2.childImageSharp.fluid}
                  alt="Cycling"
                  icon={<i className="ico-mountain-biking ux hover"></i>}
                  text="Cycling"
                />
                <Photo
                  link="/activity/rafting/"
                  fluid={photo3.childImageSharp.fluid}
                  alt="Rafting"
                  icon={<IconRafting className="hover" />}
                  text="Rafting"
                />
                <Photo
                  link="/destination/drakensberg/"
                  fluid={photo4.childImageSharp.fluid}
                  alt="Drakensberg"
                  icon={<i className="hover ico-mountain ux"></i>}
                  text="Drakensberg"
                />
                <Photo
                  link="/destination/kzn_midlands/"
                  fluid={photo5.childImageSharp.fluid}
                  alt="Midlands"
                  icon={<span className="hover icon-bird"></span>}
                  text="Midlands"
                />
                <Photo
                  link="/destination/wildcoast/"
                  fluid={photo6.childImageSharp.fluid}
                  alt="Wild Coast"
                  icon={<span className="hover icon-plant"></span>}
                  text="Wild Coast"
                />
                <Photo
                  link="/destination/kosibay/"
                  fluid={photo7.childImageSharp.fluid}
                  alt="kosi Bay"
                  icon={<span className="hover icon-water-sea"></span>}
                  text="kosi Bay"
                />
                <Photo
                  link="/destination/freestate/"
                  fluid={photo8.childImageSharp.fluid}
                  alt="Free State"
                  icon={<span className="hover icon-desert"></span>}
                  text="Free State"
                />
                <Photo
                  link="/destination/westerncape/"
                  fluid={photo9.childImageSharp.fluid}
                  alt="Western Cape"
                  icon={<span className="hover icon-beach"></span>}
                  text="Western Cape"
                />
              </ul>
            </div>
            <div className="col-md-6 text-block">
              <div className="centered">
                <h2 className="intro-heading">
                  Let your next holiday be an Active Escape
                </h2>
                <p className="intro">
                  Established in 2007, we specialise in holidays with an outdoor
                  edge. If you&apos;re the kind of person who needs a mountain
                  or two, ocean swims, and breath - taking scenery to really
                  enjoy your getaway, we are that specialist tour operator.{' '}
                </p>
                <p className="intro">
                  We understand that outdoor people range from those who thrive
                  on endorphins, to those who simply need to relax in the quiet
                  of nature; and as such Active Escapes offers all types of
                  active, outdoor and nature - focused holidays. Hiking,
                  slackpacking, mountain biking, trail running, river rafting,
                  horse riding or simply being in nature; we know how dynamic
                  people like to spend their time.{' '}
                </p>
                <Link
                  to="/contact/"
                  className="btn btn-info-sub btn-md btn-shadow radius"
                >
                  Contact us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default GallerySection
