import React, { useState } from 'react'
import { graphql } from 'gatsby'

import { ImageSharp } from '../types'
import Layout from '../components/layout'
import SEO from '../components/seo'
import TourBanner, { TourBannerData } from '../components/banner-tour'
import TourOverview, { TourOverviewData } from '../components/tour-overview'
import TourItinerary, { TourItineraryData } from '../components/tour-itinerary'
import TourLodging, { TourLodgingData } from '../components/tour-lodging'
import TourFaq, { TourFaqData } from '../components/tour-faq'
import TourGallery, { TourGalleryData } from '../components/tour-gallery'
import TourPrice, { TourPriceData } from '../components/tour-price'
import RecentTours from '../components/recent-tours'

interface TourDetailPageProps {
  readonly data: PageQueryData
  readonly location: Location
}

const TourDetailPage = ({
  data: {
    site: {
      siteMetadata: { siteUrl, emailAddress },
    },
    markdownRemark: {
      frontmatter: {
        meta: { title, description },
        tourName,
        featuredImage,
        shortDescription,
        longDescription,
        details,
        emailSubject,
        overview,
        itinerary,
        lodging,
        faq,
        gallery,
        price,
      },
    },
  },
  location,
}: TourDetailPageProps) => {
  const [activeTab, setActiveTab] = useState(0)
  const tourBannerData: TourBannerData = {
    tourName,
    featuredImage,
    shortDescription,
    longDescription,
    details,
    emailSubject,
    location,
    siteUrl,
    emailAddress,
  }

  const tabHeadings = [
    'Overview',
    'Itinerary',
    'Lodging',
    'FAQ',
    'Gallery',
    'Price',
  ]

  return (
    <Layout tour>
      <SEO
        title={title}
        description={description}
        image={featuredImage.publicURL}
        path={location.pathname}
      />
      <TourBanner data={tourBannerData} />
      <div className="tab-container">
        <nav className="nav-wrap" id="sticky-tab">
          <div className="container">
            <ul className="tour-tabs text-center" role="tablist">
              {tabHeadings.map((tabHeading, i) => (
                <li
                  key={i}
                  role="presentation"
                  className={i === activeTab ? 'active' : ''}
                  onClick={() => setActiveTab(i)}
                >
                  {tabHeading}
                </li>
              ))}
            </ul>
          </div>
        </nav>
        <div className="container tab-content trip-detail">
          <div
            role="tabpanel"
            className={`tab-pane${activeTab === 0 ? ' active' : ''}`}
            id="tab01"
          >
            <TourOverview data={overview} />
          </div>
          <div
            role="tabpanel"
            className={`tab-pane${activeTab === 1 ? ' active' : ''}`}
            id="tab02"
          >
            <TourItinerary data={itinerary} />
          </div>

          <div
            role="tabpanel"
            className={`tab-pane${activeTab === 2 ? ' active' : ''}`}
            id="tab03"
          >
            <TourLodging data={lodging} />
          </div>
          <div
            role="tabpanel"
            className={`tab-pane${activeTab === 3 ? ' active' : ''}`}
            id="tab04"
          >
            <TourFaq data={faq} />
          </div>
          <div
            role="tabpanel"
            className={`tab-pane${activeTab === 4 ? ' active' : ''}`}
            id="tab05"
          >
            <TourGallery data={gallery} />
          </div>
          <div
            role="tabpanel"
            className={`tab-pane${activeTab === 5 ? ' active' : ''}`}
            id="tab06"
          >
            <TourPrice data={{ ...price, emailAddress, emailSubject }} />
          </div>
        </div>
      </div>
      <RecentTours />
    </Layout>
  )
}

export default TourDetailPage

interface PageQueryData {
  site: {
    siteMetadata: {
      siteUrl: string
      emailAddress: string
    }
  }
  markdownRemark: {
    frontmatter: {
      meta: {
        title: string
        description: string
      }
      tourName: string
      featuredImage: ImageSharp
      shortDescription: string
      longDescription: string[]
      details: {
        heading: string
        description: string[]
      }[]
      emailSubject: string
      overview: TourOverviewData
      itinerary: TourItineraryData
      lodging: TourLodgingData
      faq: TourFaqData
      gallery: TourGalleryData
      price: TourPriceData
    }
  }
}

export const query = graphql`
  query TourDetailPageQuery($id: String!) {
    site {
      siteMetadata {
        siteUrl
        emailAddress
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        meta {
          title
          description
        }
        tourName
        slug
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 966) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
          publicURL
        }
        shortDescription
        longDescription
        details {
          heading
          description
        }
        emailSubject
        overview {
          heading
          description
        }
        itinerary {
          itinerary {
            heading
            subHeading
            description
          }
          images {
            src {
              childImageSharp {
                fluid(maxWidth: 510) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
            heading
            subHeading
          }
        }
        lodging {
          heading
          description
          images {
            src {
              childImageSharp {
                fluid(maxWidth: 510) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
            heading
            subHeading
          }
        }
        faq {
          faq {
            question
            answer
          }
        }
        gallery {
          pictures {
            src {
              childImageSharp {
                fluid(maxWidth: 1400) {
                  ...GatsbyImageSharpFluid
                }
              }
              publicURL
            }
            caption
          }
        }

        price {
          heading
          overview
          table {
            pax
            price
          }
          includes
          notIncludes
        }
      }
    }
  }
`
