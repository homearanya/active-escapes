import React, { useState } from 'react'

import { ImageSharp } from '../../types'
import Image from '../image'

export interface GalleryThumbnailData {
  src: ImageSharp
  caption: string
  title: string
  subTitle: string
}

interface GalleryThumbnailProps {
  data: GalleryThumbnailData
  openLightbox: (index: number) => void
  index: number
}

const GalleryThumbnail = ({
  data: { src, caption, title, subTitle },
  openLightbox,
  index,
}: GalleryThumbnailProps) => {
  const [numberOfSpans, setNumberOfSpans] = useState<number | null>(null)
  return (
    <li
      style={{
        gridRowEnd: numberOfSpans ? `span ${numberOfSpans}` : undefined,
      }}
    >
      <span
        ref={(liEl) => {
          if (liEl && liEl.clientHeight && !numberOfSpans) {
            setNumberOfSpans(Math.floor((liEl.clientHeight + 32) / (1 + 32)))
          }
        }}
        className="fancybox"
        data-fancybox-group="group"
        title="Caption Goes Here"
        onClick={() => openLightbox(index)}
        style={{ height: numberOfSpans ? '100%' : 'auto' }}
      >
        <span className="img-holder">
          <Image image={src} alt={caption} />
        </span>
        <span className="caption">
          <span className="centered">
            <strong className="title">{title}</strong>
            <span className="sub-text">{subTitle}</span>
          </span>
        </span>
      </span>
    </li>
  )
}
export default GalleryThumbnail
