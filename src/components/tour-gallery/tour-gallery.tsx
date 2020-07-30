import React from 'react'
import { ImageSharp } from '../../types'
import ImageGallery from 'react-image-gallery'

export interface TourGalleryData {
  pictures: {
    src: ImageSharp
    caption: string
  }[]
}

interface TourGalleryProps {
  data: TourGalleryData
}

const TourGallery = ({ data: { pictures } }: TourGalleryProps) => {
  const items = pictures.map(({ src, caption }) => {
    return {
      original: src.publicURL,
      thumbnail: src.publicURL,
      originalAlt: caption,
      thumbnailAlt: caption,
      originalTitle: caption,
      thumbnailTitle: caption,
      description: caption,
      srcSet: src.childImageSharp.fluid?.srcSet,
      sizes: src.childImageSharp.fluid?.sizes,
    }
  })

  return <ImageGallery items={items} lazyLoad={true} />
}

export default TourGallery
