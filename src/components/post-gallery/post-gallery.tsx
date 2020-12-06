import React from 'react'
import { ImageSharp } from '../../types'
import ImageGallery from 'react-image-gallery'

export interface PostGalleryData {
  pictures: {
    src: ImageSharp
    caption: string
  }[]
}

interface PostGalleryProps {
  data: PostGalleryData
}

const PostGallery = ({ data: { pictures } }: PostGalleryProps) => {
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

  return <ImageGallery items={items} lazyLoad={true} showPlayButton={false} />
}

export default PostGallery
