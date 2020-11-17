import React from 'react'
import { graphql } from 'gatsby'
import { useInView } from 'react-intersection-observer'

import { ImageSharp } from '../types'
import Layout from '../components/layout'
import SEO from '../components/seo'
import BannerDestination, {
  BannerDestinationData,
} from '../components/banner-destination'
import ContactForm from '../components/contact-form'
import AnchorPlaceholder from '../components/anchor-placeholder'

interface ContactPageProps {
  readonly data: PageQueryData
}
const ContactPage = ({
  data: {
    markdownRemark: {
      frontmatter: {
        meta: { title, description },
        banner,
        intro,
        contacts,
        socials,
      },
    },
  },
}: ContactPageProps) => {
  const breadcrumbs: Breadcrumbs = [
    { id: '1', name: 'home', href: '/' },
    { id: '2', name: 'contact us', href: '' },
  ]
  const bannerData: BannerDestinationData = {
    heading: banner.heading,
    subHeading: banner.subHeading,
    heroImage: banner.image.childImageSharp.fluid,
    breadcrumbs,
  }
  const [ref, inView] = useInView({
    /* Optional options */
    threshold: 0.5,
    triggerOnce: true,
  })
  return (
    <Layout>
      <SEO title={title} description={description} />
      <BannerDestination data={bannerData} />
      <div className="content-block bg-white content-center contact-page">
        <div className="container">
          <header className="content-heading">
            <h2 className="main-heading">{intro.heading}</h2>
            <strong className="main-subtitle">{intro.subHeading}</strong>
            <div className="seperator"></div>
          </header>
          <div className="contact-info row">
            {contacts.map((contact, i) => (
              <div key={i} className="col-sm-3">
                <span className="ico">
                  <span className={contact.icon} />
                </span>
                <h3 dangerouslySetInnerHTML={{ __html: contact.text }} />
              </div>
            ))}
            <h3 className="text-center">Follow Us on</h3>
            <div className="social-wrapper">
              {socials.map((social, i) => (
                <a
                  key={i}
                  href={social.link}
                  target="_blank"
                  rel="noreferrer"
                  className={`social ${social.name}`}
                >
                  <span className="ico">
                    <span className={social.icon} />
                  </span>
                </a>
              ))}
            </div>
          </div>
          <AnchorPlaceholder anchorPlaceholderId="tour-enquiry" />
          <div ref={ref} className="row">
            <div
              className={`col-md-6 wow fadeInLeft${inView ? ' animated' : ''}`}
              style={
                inView
                  ? { visibility: 'visible', animationName: 'fadeInLeft' }
                  : { visibility: 'hidden', animationName: 'none' }
              }
            >
              <div className="contact-form">
                <div className="panel-heading">
                  <h4 className="panel-title">Tour Enquiry</h4>
                </div>
                <div
                  id="collapse5"
                  className="panel-collapse collapse in"
                  role="tabpanel"
                >
                  <div className="panel-body">
                    <ContactForm />
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`col-md-6 map-col-main wow fadeInRight${
                inView ? ' animated' : ''
              }`}
              style={
                inView
                  ? { visibility: 'visible', animationName: 'fadeInRight' }
                  : { visibility: 'hidden', animationName: 'none' }
              }
            >
              <div className="map-holder">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111060.11102652778!2d30.278920749627964!3d-29.556312228241712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ef6a5c1c140393d%3A0x58968436568fb100!2sHilton!5e0!3m2!1sen!2sza!4v1597362836234!5m2!1sen!2sza"
                  width="600"
                  height="770"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ContactPage

interface PageQueryData {
  markdownRemark: {
    html: string
    frontmatter: {
      meta: {
        title: string
        description: string
      }
      title: string
      banner: {
        heading: string
        subHeading: string
        image: ImageSharp
      }
      intro: {
        heading: string
        subHeading: string
      }
      contacts: {
        icon: string
        text: string
      }[]
      socials: {
        icon: string
        link: string
        name: string
      }[]
    }
  }
}
export const query = graphql`
  query ContactPageQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        meta {
          title
          description
        }
        banner {
          image {
            childImageSharp {
              fluid(maxWidth: 1920) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
            publicURL
          }
          heading
          subHeading
        }
        intro {
          heading
          subHeading
        }
        contacts {
          icon
          text
        }
        socials {
          icon
          link
          name
        }
      }
    }
  }
`
