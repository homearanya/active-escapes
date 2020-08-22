import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Breadcrumbs from '../components/breadcrumbs'
import Gallery, { BigGalleryImage } from '../components/gallery'
import { GalleryThumbnailData } from '../components/gallery-thumbnail'

import { ImageSharp } from '../types'

interface GalleryPageProps {
  readonly data: PageQueryData
}

const GalleryPage = ({
  data: {
    markdownRemark: {
      frontmatter: {
        meta: { title, description },
        title: galleryTitle,
        images: smallImages,
      },
    },
    markdownRemarkCopy: {
      frontmatter: { images: bigImages },
    },
  },
}: GalleryPageProps) => {
  const breadcrumbs: Breadcrumbs = [
    { id: '1', name: 'home', href: '/' },
    { id: '2', name: 'gallery', href: '' },
    { id: '3', name: galleryTitle, href: '' },
  ]

  const thumbnailImages: GalleryThumbnailData[] = smallImages.map(
    ({ src, caption, tour }) => ({
      src,
      caption,
      title: tour.frontmatter.destination.frontmatter.destinationName,
      subTitle: tour.frontmatter.tourName,
    }),
  )
  return (
    <Layout tour>
      <SEO title={title} description={description} />
      <div className="gallery-page">
        <div className="inner-top">
          <div className="container">
            <h1 className="inner-main-heading">{`${galleryTitle} Gallery`}</h1>
            <Breadcrumbs breadcrumbs={breadcrumbs} />
          </div>
        </div>
        <Gallery bigImages={bigImages} thumbnailImages={thumbnailImages} />
      </div>
    </Layout>
  )
}

export default GalleryPage

interface PageQueryData {
  markdownRemark: {
    frontmatter: {
      meta: {
        title: string
        description: string
      }
      title: string
      images: {
        src: ImageSharp
        caption: string
        tour: {
          frontmatter: {
            tourName
            destination: {
              frontmatter: {
                destinationName: string
              }
            }
          }
        }
      }[]
    }
  }
  markdownRemarkCopy: {
    frontmatter: {
      images: BigGalleryImage[]
    }
  }
}

export const query = graphql`
  query GalleryPageQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        meta {
          title
          description
        }
        title
        images {
          src {
            childImageSharp {
              fluid(maxWidth: 370) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
            publicURL
          }
          tour {
            frontmatter {
              tourName
              destination {
                frontmatter {
                  destinationName
                }
              }
            }
          }
        }
      }
    }
    markdownRemarkCopy: markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        images {
          src {
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
            publicURL
          }
          caption
        }
      }
    }
  }
`
