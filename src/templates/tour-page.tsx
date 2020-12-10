import React, { useState, useEffect } from 'react'
import { graphql } from 'gatsby'
import { useCookies } from 'react-cookie'

import { ImageSharp } from '../types'
import Layout from '../components/layout'
import SEO from '../components/seo'
import TourBanner, { TourBannerData } from '../components/banner-tour'
import TourOverview, { TourOverviewData } from '../components/tour-overview'
import TourItinerary, { TourItineraryData } from '../components/tour-itinerary'
import TourLodging, { TourLodgingData } from '../components/tour-lodging'
import TourFaq, { TourFaqData } from '../components/tour-faq'
import Gallery, { BigGalleryImage } from '../components/tour-gallery'
import { GalleryThumbnailData } from '../components/gallery-thumbnail'

import TourPrice, { TourPriceData } from '../components/tour-price'
import RecentlyViews from '../components/recently-views'

import { addDays } from '../utils/helpers'

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
        slug,
        featuredImage,
        longDescription,
        details,
        emailSubject,
        overview,
        itinerary,
        lodging,
        faq,
        gallery: { pictures: smallImages },
        price,
        destination,
      },
    },
    markdownRemarkCopy: {
      frontmatter: {
        gallery: { pictures: bigImages },
      },
    },
  },
  location,
}: TourDetailPageProps) => {
  const [activeTab, setActiveTab] = useState(0)
  const [cookies, setCookie] = useCookies(['recently-views'])

  const tourBannerData: TourBannerData = {
    tourName,
    featuredImage,
    shortDescription: description,
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

  useEffect(() => {
    let tours
    if (!cookies['recently-views']) {
      tours = []
    } else {
      tours = cookies['recently-views']
    }
    if (tours.find((tour) => tour === slug)) {
      return
    }
    if (tours.length === 4) {
      tours.splice(0, 1)
    }
    tours.push(slug)

    setCookie('recently-views', JSON.stringify(tours), {
      path: '/',
      expires: addDays(new Date(), 180),
    })
  }, [])

  const thumbnailImages: GalleryThumbnailData[] = smallImages.map(
    ({ src, caption }) => ({
      src,
      caption,
      title: destination.frontmatter.destinationName,
      subTitle: tourName,
    }),
  )
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
            <Gallery bigImages={bigImages} thumbnailImages={thumbnailImages} />
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
      <RecentlyViews />
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
      slug: string
      featuredImage: ImageSharp
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
      gallery: {
        pictures: BigGalleryImage[]
      }
      price: TourPriceData
      destination: {
        frontmatter: {
          destinationName: string
        }
      }
    }
  }
  markdownRemarkCopy: {
    frontmatter: {
      gallery: {
        pictures: BigGalleryImage[]
      }
    }
  }
}

export const query = graphql`
  query TourDetailPage($id: String!) {
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
            fluid(maxWidth: 966, quality: 80) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
          publicURL
        }
        longDescription
        details {
          heading
          description
        }
        emailSubject
        overview {
          heading
          description
          mapUrl
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
                fluid(maxWidth: 570) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
              publicURL
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
              publicURL
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
                fluid(maxWidth: 370, quality: 80) {
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
          heading2
          overview2
          table2 {
            pax
            price
          }
          includes
          notIncludes
        }
        destination {
          frontmatter {
            destinationName
          }
        }
      }
    }
    markdownRemarkCopy: markdownRemark(id: { eq: $id }) {
      frontmatter {
        gallery {
          pictures {
            src {
              childImageSharp {
                fluid(maxWidth: 1000, quality: 80) {
                  ...GatsbyImageSharpFluid
                }
              }
              publicURL
            }
            caption
          }
        }
      }
    }
  }
`
