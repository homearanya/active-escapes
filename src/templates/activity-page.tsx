import React from 'react'
import { graphql } from 'gatsby'
import { ImageSharp } from '../types'

import Layout from '../components/layout'
import SEO from '../components/seo'
import BannerActivity, {
  BannerActivityData,
} from '../components/banner-activity'
import ActivityIntro, { ActivityIntroData } from '../components/activity-intro'

interface ActivityPageProps {
  readonly data: PageQueryData
}

const ActivityPage = ({
  data: {
    markdownRemark: {
      frontmatter: {
        meta: { title, description },
        activityName,
        banner,
        intro,
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
      <article className="content-block article-boxed">
        <div className="container">
          <header className="content-heading">
            <h2 className="main-heading">TREKKING THEMES</h2>
            <span className="main-subtitle">
              Chose from various walking and trekking adventures in 2016.
            </span>
            <div className="seperator" />
          </header>
          <div className="content-holder content-boxed">
            <div className="row db-3-col">
              <article className="col-sm-6 col-md-4 article has-hover-s1">
                <div className="thumbnail">
                  <div className="img-wrap">
                    {' '}
                    <img
                      src="img/listing/img-07.jpg"
                      alt="image description"
                      height="228"
                      width="350"
                    />
                  </div>
                  <h3 className="small-space">
                    <a href="tour-detail.html">Evening with Panda in China</a>
                  </h3>
                  <span className="info">
                    Nordic Walk, Swiss Alps or French Hiking?
                  </span>
                  <aside className="meta">
                    {' '}
                    <span className="country">
                      {' '}
                      <span className="icon-world"></span>12 Countries{' '}
                    </span>{' '}
                    <span className="activity">
                      <span className="icon-acitivities"> </span>79 Activities
                    </span>{' '}
                  </aside>
                  <p>
                    This is Photoshop's version of Lorem Ipsum. Proin gravida
                    nibh vel velit auctor aliquet. Aenean sollicitudin, lorem
                    quis bibendum auctor, nisi elit consequat ipsum,
                  </p>
                  <a href="tour-detail.html" className="btn btn-default">
                    explore
                  </a>
                  <footer>
                    <ul className="social-networks">
                      <li>
                        <a href="#">
                          <span className="icon-twitter"></span>
                        </a>
                        <br />
                      </li>
                      <li>
                        <a href="#">
                          <span className="icon-google-plus"></span>
                        </a>
                        <br />
                      </li>
                      <li>
                        <a href="#">
                          <span className="icon-facebook"></span>
                        </a>
                        <br />
                      </li>
                      <li>
                        <a href="#">
                          <span className="icon-linkedin"></span>
                        </a>
                        <br />
                      </li>
                    </ul>
                    <span className="price">
                      from <span>$2749</span>
                    </span>{' '}
                  </footer>
                </div>
              </article>
              <article className="col-sm-6 col-md-4 article has-hover-s1">
                <div className="thumbnail">
                  <div className="img-wrap">
                    {' '}
                    <img
                      src="img/listing/img-08.jpg"
                      alt="image description"
                      height="228"
                      width="350"
                    />
                  </div>
                  <h3 className="small-space">
                    <a href="tour-detail.html">
                      Sleeping with Sea Lion in Arctic
                    </a>
                  </h3>
                  <span className="info">
                    Nordic Walk, Swiss Alps or French Hiking?
                  </span>
                  <aside className="meta">
                    {' '}
                    <span className="country">
                      {' '}
                      <span className="icon-world"></span>12 Countries{' '}
                    </span>{' '}
                    <span className="activity">
                      <span className="icon-acitivities"> </span>79 Activities
                    </span>{' '}
                  </aside>
                  <p>
                    This is Photoshop's version of Lorem Ipsum. Proin gravida
                    nibh vel velit auctor aliquet. Aenean sollicitudin, lorem
                    quis bibendum auctor, nisi elit consequat ipsum,
                  </p>
                  <a href="tour-detail.html" className="btn btn-default">
                    explore
                  </a>
                  <footer>
                    <ul className="social-networks">
                      <li>
                        <a href="#">
                          <span className="icon-twitter"></span>
                        </a>
                        <br />
                      </li>
                      <li>
                        <a href="#">
                          <span className="icon-google-plus"></span>
                        </a>
                        <br />
                      </li>
                      <li>
                        <a href="#">
                          <span className="icon-facebook"></span>
                        </a>
                        <br />
                      </li>
                      <li>
                        <a href="#">
                          <span className="icon-linkedin"></span>
                        </a>
                        <br />
                      </li>
                    </ul>
                    <span className="price">
                      from <span>$2749</span>
                    </span>{' '}
                  </footer>
                </div>
              </article>
              <article className="col-sm-6 col-md-4 article has-hover-s1">
                <div className="thumbnail">
                  <div className="img-wrap">
                    {' '}
                    <img
                      src="img/listing/img-09.jpg"
                      alt="image description"
                      height="228"
                      width="350"
                    />
                  </div>
                  <h3 className="small-space">
                    <a href="tour-detail.html">
                      Following Zebras to Water hole
                    </a>
                  </h3>
                  <span className="info">
                    Nordic Walk, Swiss Alps or French Hiking?
                  </span>
                  <aside className="meta">
                    {' '}
                    <span className="country">
                      {' '}
                      <span className="icon-world"></span>12 Countries{' '}
                    </span>{' '}
                    <span className="activity">
                      <span className="icon-acitivities"> </span>79 Activities
                    </span>{' '}
                  </aside>
                  <p>
                    This is Photoshop's version of Lorem Ipsum. Proin gravida
                    nibh vel velit auctor aliquet. Aenean sollicitudin, lorem
                    quis bibendum auctor, nisi elit consequat ipsum,
                  </p>
                  <a href="tour-detail.html" className="btn btn-default">
                    explore
                  </a>
                  <footer>
                    <ul className="social-networks">
                      <li>
                        <a href="#">
                          <span className="icon-twitter"></span>
                        </a>
                        <br />
                      </li>
                      <li>
                        <a href="#">
                          <span className="icon-google-plus"></span>
                        </a>
                        <br />
                      </li>
                      <li>
                        <a href="#">
                          <span className="icon-facebook"></span>
                        </a>
                        <br />
                      </li>
                      <li>
                        <a href="#">
                          <span className="icon-linkedin"></span>
                        </a>
                        <br />
                      </li>
                    </ul>
                    <span className="price">
                      from <span>$2749</span>
                    </span>{' '}
                  </footer>
                </div>
              </article>
              <article className="col-sm-6 col-md-4 article has-hover-s1">
                <div className="thumbnail">
                  <div className="img-wrap">
                    {' '}
                    <img
                      src="img/listing/img-10.jpg"
                      alt="image description"
                      height="228"
                      width="350"
                    />
                  </div>
                  <h3 className="small-space">
                    <a href="tour-detail.html">
                      Discovering Wild Trails in Africa
                    </a>
                  </h3>
                  <span className="info">
                    Nordic Walk, Swiss Alps or French Hiking?
                  </span>
                  <aside className="meta">
                    {' '}
                    <span className="country">
                      {' '}
                      <span className="icon-world"></span>12 Countries{' '}
                    </span>{' '}
                    <span className="activity">
                      <span className="icon-acitivities"> </span>79 Activities
                    </span>{' '}
                  </aside>
                  <p>
                    This is Photoshop's version of Lorem Ipsum. Proin gravida
                    nibh vel velit auctor aliquet. Aenean sollicitudin, lorem
                    quis bibendum auctor, nisi elit consequat ipsum,
                  </p>
                  <a href="tour-detail.html" className="btn btn-default">
                    explore
                  </a>
                  <footer>
                    <ul className="social-networks">
                      <li>
                        <a href="#">
                          <span className="icon-twitter"></span>
                        </a>
                        <br />
                      </li>
                      <li>
                        <a href="#">
                          <span className="icon-google-plus"></span>
                        </a>
                        <br />
                      </li>
                      <li>
                        <a href="#">
                          <span className="icon-facebook"></span>
                        </a>
                        <br />
                      </li>
                      <li>
                        <a href="#">
                          <span className="icon-linkedin"></span>
                        </a>
                        <br />
                      </li>
                    </ul>
                    <span className="price">
                      from <span>$2749</span>
                    </span>{' '}
                  </footer>
                </div>
              </article>
              <article className="col-sm-6 col-md-4 article has-hover-s1">
                <div className="thumbnail">
                  <div className="img-wrap">
                    {' '}
                    <img
                      src="img/listing/img-11.jpg"
                      alt="image description"
                      height="228"
                      width="350"
                    />
                  </div>
                  <h3 className="small-space">
                    <a href="tour-detail.html">
                      Angola Safari for Family &amp; Children
                    </a>
                  </h3>
                  <span className="info">
                    Nordic Walk, Swiss Alps or French Hiking?
                  </span>
                  <aside className="meta">
                    {' '}
                    <span className="country">
                      {' '}
                      <span className="icon-world"></span>12 Countries{' '}
                    </span>{' '}
                    <span className="activity">
                      <span className="icon-acitivities"> </span>79 Activities
                    </span>{' '}
                  </aside>
                  <p>
                    This is Photoshop's version of Lorem Ipsum. Proin gravida
                    nibh vel velit auctor aliquet. Aenean sollicitudin, lorem
                    quis bibendum auctor, nisi elit consequat ipsum,
                  </p>
                  <a href="tour-detail.html" className="btn btn-default">
                    explore
                  </a>
                  <footer>
                    <ul className="social-networks">
                      <li>
                        <a href="#">
                          <span className="icon-twitter"></span>
                        </a>
                        <br />
                      </li>
                      <li>
                        <a href="#">
                          <span className="icon-google-plus"></span>
                        </a>
                        <br />
                      </li>
                      <li>
                        <a href="#">
                          <span className="icon-facebook"></span>
                        </a>
                        <br />
                      </li>
                      <li>
                        <a href="#">
                          <span className="icon-linkedin"></span>
                        </a>
                        <br />
                      </li>
                    </ul>
                    <span className="price">
                      from <span>$2749</span>
                    </span>{' '}
                  </footer>
                </div>
              </article>
              <article className="col-sm-6 col-md-4 article has-hover-s1">
                <div className="thumbnail">
                  <div className="img-wrap">
                    {' '}
                    <img
                      src="img/listing/img-12.jpg"
                      alt="image description"
                      height="228"
                      width="350"
                    />
                  </div>
                  <h3 className="small-space">
                    <a href="tour-detail.html">Royal Safari in Bangaladesh</a>
                  </h3>
                  <span className="info">
                    Nordic Walk, Swiss Alps or French Hiking?
                  </span>
                  <aside className="meta">
                    {' '}
                    <span className="country">
                      {' '}
                      <span className="icon-world"></span>12 Countries{' '}
                    </span>{' '}
                    <span className="activity">
                      <span className="icon-acitivities"> </span>79 Activities
                    </span>{' '}
                  </aside>
                  <p>
                    This is Photoshop's version of Lorem Ipsum. Proin gravida
                    nibh vel velit auctor aliquet. Aenean sollicitudin, lorem
                    quis bibendum auctor, nisi elit consequat ipsum,
                  </p>
                  <a href="tour-detail.html" className="btn btn-default">
                    explore
                  </a>
                  <footer>
                    <ul className="social-networks">
                      <li>
                        <a href="#">
                          <span className="icon-twitter"></span>
                        </a>
                        <br />
                      </li>
                      <li>
                        <a href="#">
                          <span className="icon-google-plus"></span>
                        </a>
                        <br />
                      </li>
                      <li>
                        <a href="#">
                          <span className="icon-facebook"></span>
                        </a>
                        <br />
                      </li>
                      <li>
                        <a href="#">
                          <span className="icon-linkedin"></span>
                        </a>
                        <br />
                      </li>
                    </ul>
                    <span className="price">
                      from <span>$2749</span>
                    </span>{' '}
                  </footer>
                </div>
              </article>
            </div>
          </div>
        </div>
      </article>
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
      banner: {
        heading: string
        subHeading: string
        image: ImageSharp
      }
      intro: ActivityIntroData
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
      }
    }
  }
`
