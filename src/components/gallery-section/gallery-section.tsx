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
      photo1: file(relativePath: { eq: "gallery/img-01-hiking.JPG" }) {
        childImageSharp {
          fixed(width: 170, height: 165) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      photo2: file(relativePath: { eq: "gallery/img-02-cycling.jpg" }) {
        childImageSharp {
          fixed(width: 170, height: 165) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      photo3: file(relativePath: { eq: "gallery/img-03-rafting.JPG" }) {
        childImageSharp {
          fixed(width: 170, height: 165) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      photo4: file(relativePath: { eq: "gallery/img-04-drakensberg.jpg" }) {
        childImageSharp {
          fixed(width: 170, height: 165) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      photo5: file(relativePath: { eq: "gallery/img-05-midlands.jpg" }) {
        childImageSharp {
          fixed(width: 170, height: 165) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      photo6: file(relativePath: { eq: "gallery/img-06-wildcoast.jpg" }) {
        childImageSharp {
          fixed(width: 170, height: 165) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      photo7: file(relativePath: { eq: "gallery/img-07-kosi.JPG" }) {
        childImageSharp {
          fixed(width: 170, height: 165) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      photo8: file(relativePath: { eq: "gallery/img-08-freestate.jpg" }) {
        childImageSharp {
          fixed(width: 170, height: 165) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      photo9: file(relativePath: { eq: "gallery/img-08-westerncape.JPG" }) {
        childImageSharp {
          fixed(width: 170, height: 165) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `)
  return (
    <section className="content-block bg-white">
      <div className="container">
        <div className="adventure-holder gallery-home-holder">
          <div className="row">
            <div className="col-md-6 img-block">
              <ul className="gallery-list gallery-with-icon">
                <Photo
                  link="/activity/hiking/"
                  fixed={photo1.childImageSharp.fixed}
                  alt="Hiking"
                  icon={<span className="hover icon-hiking"></span>}
                  text="Hiking"
                />
                <Photo
                  link="/activity/mountainbiking/"
                  fixed={photo2.childImageSharp.fixed}
                  alt="Cycling"
                  icon={<i className="ico-mountain-biking ux hover"></i>}
                  text="Cycling"
                />
                <Photo
                  link="/activity/rafting/"
                  fixed={photo3.childImageSharp.fixed}
                  alt="Rafting"
                  icon={<IconRafting className="hover" />}
                  text="Rafting"
                />
                <Photo
                  link="/destination/drakensberg/"
                  fixed={photo4.childImageSharp.fixed}
                  alt="Drakensberg"
                  icon={<i className="hover ico-mountain ux"></i>}
                  text="Drakensberg"
                />
                <Photo
                  link="/destination/midlands/"
                  fixed={photo5.childImageSharp.fixed}
                  alt="Midlands"
                  icon={<span className="hover icon-bird"></span>}
                  text="Midlands"
                />
                <Photo
                  link="/destination/wildcoast/"
                  fixed={photo6.childImageSharp.fixed}
                  alt="Wild Coast"
                  icon={<span className="hover icon-plant"></span>}
                  text="Wild Coast"
                />
                <Photo
                  link="/destination/kosibay/"
                  fixed={photo7.childImageSharp.fixed}
                  alt="Kosy Bay"
                  icon={<span className="hover icon-water-sea"></span>}
                  text="Kosy Bay"
                />
                <Photo
                  link="/destination/freestate/"
                  fixed={photo8.childImageSharp.fixed}
                  alt="Free State"
                  icon={<span className="hover icon-desert"></span>}
                  text="Free State"
                />
                <Photo
                  link="/destination/westercape/"
                  fixed={photo9.childImageSharp.fixed}
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
                  slackpacking, mountai n biking, trail running, river rafting,
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
