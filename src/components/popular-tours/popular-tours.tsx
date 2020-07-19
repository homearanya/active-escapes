import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import PopularTour from './popular-tour'

const PopularTours = () => {
  const {
    photo1,
    photo2,
    photo3,
    photo4,
    photo5,
    photo6,
  } = useStaticQuery(graphql`
    query {
      photo1: file(relativePath: { eq: "listing/img-01-pondoexplore.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500, maxHeight: 291, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      photo2: file(relativePath: { eq: "listing/img-02-kosi.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500, maxHeight: 291, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      photo3: file(relativePath: { eq: "listing/img-03-amphi.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500, maxHeight: 291, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      photo4: file(relativePath: { eq: "listing/img-04-clarens.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500, maxHeight: 291, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      photo5: file(relativePath: { eq: "listing/img-05-nberg.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500, maxHeight: 291, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      photo6: file(relativePath: { eq: "listing/img-06-vulturehike.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500, maxHeight: 291, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <section className="content-block content-spacing">
      <div className="container">
        <header className="content-heading">
          <h2 className="main-heading">POPULAR TOURS</h2>
          <span className="main-subtitle">
            Active Escapes has the trip to meet your adventurous expectations!
          </span>
          <div className="seperator"></div>
        </header>
        <div className="content-holder">
          <div className="row db-3-col">
            <PopularTour
              tourLink="/destination/wildcoast/hikes/pondo-explore/"
              fluid={photo1.childImageSharp.fluid}
              alt="Pondo Exploring"
              tag="Pondo Exploring"
              price="R6 400/pp"
              heartLink="#`"
              replyLink="#"
              heading="Back – slack - packing Pondoland"
              text={
                <p>
                  3 or 5 night Wild Coast Pondoland Trail Options: either
                  fully-supported & catered (the{' '}
                  <Link to="/destination/wildcoast/hikes/pondo-hopper/">
                    {' '}
                    Pondo-Hopper
                  </Link>
                  ) or a self-catered version (the{' '}
                  <Link to="/destination/wildcoast/hikes/pondo-explore/">
                    Pondo-Explorer
                  </Link>
                  ), sleeping in tented camps nestled up against a dune or along
                  a pristine estuary.
                </p>
              }
            />
            <PopularTour
              tourLink="/destination/kosibay/kosihike"
              fluid={photo2.childImageSharp.fluid}
              alt="Adventures in Kosi"
              tag="Adventures in Kosi"
              price="R6 500/pp"
              heartLink="#`"
              replyLink="#"
              heading="Walking & Snorkeling the Kosi Lakes"
              text={
                <p>
                  This walking trail is an escape into one of the most
                  ecologically diverse parts of South Africa. Fern and swamp
                  forests, savannah and secluded beaches. Overnighting in
                  comfortable bush and beach camps with catering, guiding,
                  snorkelling, and a 3 lakes boat-trip.
                </p>
              }
            />
            <PopularTour
              tourLink="/destination/drakensberg/hikes/amphitheatre/amphitheatre_hike"
              fluid={photo3.childImageSharp.fluid}
              alt="Aim for the summit"
              tag="Aim for the summit"
              price="R6 500/pp"
              heartLink="#`"
              replyLink="#"
              heading="Hike to the Roof of Africa"
              text={
                <p>
                  Reach the top of the escarpment and source of the Tugela
                  River, where you can stand atop the second highest waterfall
                  in the world. On our 3 day Amphitheatre hike you’ll overnight
                  in comfy mountain lodges, have your meals catered for, and
                  backpack portered.
                </p>
              }
            />
            <PopularTour
              tourLink="/destination/free_state/clarens_hike"
              fluid={photo4.childImageSharp.fluid}
              alt="San Traverse - Clarens"
              tag="San Traverse - Clarens"
              price="R6 500/pp"
              heartLink="#`"
              replyLink="#"
              heading="In the footprints of the San"
              text={
                <p>
                  Offering a unique combination of high berg wilderness and
                  cultural treasures, the 3 day San Traverse in and around
                  Clarens, Free State, will delight your finer senses.
                </p>
              }
            />
            <PopularTour
              tourLink="/destination/tugela/tugela_mtbtours"
              fluid={photo5.childImageSharp.fluid}
              alt="Northern Berg MTB"
              tag="Northern Berg MTB"
              price="R5 500/pp"
              heartLink="#`"
              replyLink="#"
              heading="High Berg vistas and sublime singletrack"
              text={
                <p>
                  One of the few self-guided MTB tours with bikes available for
                  hire. Expertly crafted single-track, majestic mountain views,
                  fully catered lodgings, and close enough away for a weekend
                  getaway? The Northern Berg offers the perfect playground for
                  all level s of rider.
                </p>
              }
            />
            <PopularTour
              tourLink="/destination/drakensberg/hikes/vulture/vulture_hike"
              fluid={photo6.childImageSharp.fluid}
              alt="Vulture Sightings"
              tag="Vulture Sightings"
              price="R4 300/pp"
              heartLink="#`"
              replyLink="#"
              heading="Soar with the Vultures"
              text={
                <p>
                  Overnighting in high mountain cabins, this newly launched
                  slackpacker, offers a birds-eye view of one of only two
                  vulture colonies in the Drakensberg. Just 3hrs drive from the
                  major airports, this trail offers the perfect long weekend
                  getaway from Joburg and Durbs.
                </p>
              }
            />
          </div>
        </div>
      </div>
    </section>
  )
}
export default PopularTours
