import React from 'react'
import { graphql } from 'gatsby'
import { ImageSharp } from '../types'

import Layout from '../components/layout'
import SEO from '../components/seo'
import BannerActivity, {
  BannerActivityData,
} from '../components/banner-activity'
import ActivityIntro, { ActivityIntroData } from '../components/activity-intro'
import FeaturedTours, { FeaturedToursData } from '../components/featured-tours'
import ByDestination from '../components/by-destination'
interface ActivityPageProps {
  readonly data: PageQueryData
}

const ActivityPage = ({
  data: {
    markdownRemark: {
      frontmatter: {
        meta: { title, description },
        activityName,
        code,
        banner,
        intro,
        toursSection,
      },
    },
  },
}: ActivityPageProps) => {
  const breadcrumbs: Breadcrumbs = [
    { name: 'home', href: '/' },
    { name: 'activity', href: '' },
    { name: activityName, href: '' },
  ]
  const bannerData: BannerActivityData = {
    heading: banner.heading,
    subHeading: banner.subHeading,
    heroImage: banner.image.childImageSharp.fluid,
    breadcrumbs,
  }
  return (
    <Layout>
      <SEO title={title} description={description} />
      <BannerActivity data={bannerData} />
      <ActivityIntro data={intro} />
      <FeaturedTours data={toursSection} />
      <ByDestination data={{ activity: code }} />
      <aside className="recent-block recent-list recent-wide-thumbnail">
        <div className="container">
          <h2 className="text-center text-uppercase">RECENTLY VIEWED</h2>
          <div className="row">
            <article className="col-sm-6 col-md-3 article">
              <div className="thumbnail">
                <h3 className="no-space">
                  <a href="#">Everest Basecamp Trek</a>
                </h3>
                <strong className="info-title">Everest Region, Nepal</strong>
                <div className="img-wrap">
                  {' '}
                  <img
                    src="img/listing/img-31.jpg"
                    alt="image description"
                    height="210"
                    width="250"
                  />
                </div>
                <footer>
                  <div className="sub-info">
                    {' '}
                    <span>5 Days</span> <span>$299</span>
                  </div>
                  <ul className="ico-list">
                    <li className="pop-opener">
                      {' '}
                      <a href="#">
                        {' '}
                        <span className="icon-hiking"></span>
                        <span className="popup"> Hiking </span>{' '}
                      </a>{' '}
                    </li>
                    <li className="pop-opener">
                      {' '}
                      <a href="#">
                        {' '}
                        <span className="icon-mountain"></span>
                        <span className="popup"> Mountain </span>{' '}
                      </a>{' '}
                    </li>
                    <li className="pop-opener">
                      {' '}
                      <a href="#">
                        {' '}
                        <span className="icon-level5"></span>
                        <span className="popup"> Level 5 </span>{' '}
                      </a>{' '}
                    </li>
                  </ul>
                </footer>
              </div>
            </article>
            <article className="col-sm-6 col-md-3 article">
              <div className="thumbnail">
                <h3 className="no-space">
                  <a href="#">Everest Basecamp Trek</a>
                </h3>
                <strong className="info-title">Everest Region, Nepal</strong>
                <div className="img-wrap">
                  {' '}
                  <img
                    src="img/listing/img-32.jpg"
                    alt="image description"
                    height="210"
                    width="250"
                  />
                </div>
                <footer>
                  <div className="sub-info">
                    {' '}
                    <span>5 Days</span> <span>$299</span>
                  </div>
                  <ul className="ico-list">
                    <li className="pop-opener">
                      {' '}
                      <a href="#">
                        {' '}
                        <span className="icon-hiking"></span>
                        <span className="popup"> Hiking </span>{' '}
                      </a>{' '}
                    </li>
                    <li className="pop-opener">
                      {' '}
                      <a href="#">
                        {' '}
                        <span className="icon-mountain"></span>
                        <span className="popup"> Mountain </span>{' '}
                      </a>{' '}
                    </li>
                    <li className="pop-opener">
                      {' '}
                      <a href="#">
                        {' '}
                        <span className="icon-level5"></span>
                        <span className="popup"> Level 5 </span>{' '}
                      </a>{' '}
                    </li>
                  </ul>
                </footer>
              </div>
            </article>
            <article className="col-sm-6 col-md-3 article">
              <div className="thumbnail">
                <h3 className="no-space">
                  <a href="#">Everest Basecamp Trek</a>
                </h3>
                <strong className="info-title">Everest Region, Nepal</strong>
                <div className="img-wrap">
                  {' '}
                  <img
                    src="img/listing/img-33.jpg"
                    alt="image description"
                    height="210"
                    width="250"
                  />
                </div>
                <footer>
                  <div className="sub-info">
                    {' '}
                    <span>5 Days</span> <span>$299</span>
                  </div>
                  <ul className="ico-list">
                    <li className="pop-opener">
                      {' '}
                      <a href="#">
                        {' '}
                        <span className="icon-hiking"></span>
                        <span className="popup"> Hiking </span>{' '}
                      </a>{' '}
                    </li>
                    <li className="pop-opener">
                      {' '}
                      <a href="#">
                        {' '}
                        <span className="icon-mountain"></span>
                        <span className="popup"> Mountain </span>{' '}
                      </a>{' '}
                    </li>
                    <li className="pop-opener">
                      {' '}
                      <a href="#">
                        {' '}
                        <span className="icon-level5"></span>
                        <span className="popup"> Level 5 </span>{' '}
                      </a>{' '}
                    </li>
                  </ul>
                </footer>
              </div>
            </article>
            <article className="col-sm-6 col-md-3 article">
              <div className="thumbnail">
                <h3 className="no-space">
                  <a href="#">Everest Basecamp Trek</a>
                </h3>
                <strong className="info-title">Everest Region, Nepal</strong>
                <div className="img-wrap">
                  {' '}
                  <img
                    src="img/listing/img-34.jpg"
                    alt="image description"
                    height="210"
                    width="250"
                  />
                </div>
                <footer>
                  <div className="sub-info">
                    {' '}
                    <span>5 Days</span> <span>$299</span>
                  </div>
                  <ul className="ico-list">
                    <li className="pop-opener">
                      {' '}
                      <a href="#">
                        {' '}
                        <span className="icon-hiking"></span>
                        <span className="popup"> Hiking </span>{' '}
                      </a>{' '}
                    </li>
                    <li className="pop-opener">
                      {' '}
                      <a href="#">
                        {' '}
                        <span className="icon-mountain"></span>
                        <span className="popup"> Mountain </span>{' '}
                      </a>{' '}
                    </li>
                    <li className="pop-opener">
                      {' '}
                      <a href="#">
                        {' '}
                        <span className="icon-level5"></span>
                        <span className="popup"> Level 5 </span>{' '}
                      </a>{' '}
                    </li>
                  </ul>
                </footer>
              </div>
            </article>
          </div>
        </div>
      </aside>
    </Layout>
  )
}

export default ActivityPage

interface PageQueryData {
  markdownRemark: {
    frontmatter: {
      meta: {
        title: string
        description: string
      }
      activityName: string
      code: string
      banner: {
        heading: string
        subHeading: string
        image: ImageSharp
      }
      intro: ActivityIntroData
      toursSection: FeaturedToursData
    }
  }
}

export const query = graphql`
  query ActivityPageQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        meta {
          title
          description
        }
        activityName
        code
        banner {
          heading
          subHeading
          image {
            childImageSharp {
              fluid(maxWidth: 1920) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        intro {
          heading
          text
          bestSeason
          locations
          icon {
            publicURL
          }
        }
        toursSection {
          heading
          subHeading
        }
      }
    }
  }
`
