import React, { useState, useCallback } from 'react'
import useMedia from 'use-media'
import Carousel, { Modal, ModalGateway } from 'react-images'

import { ImageSharp } from '../../types'

import Image from '../image'
import GalleryThumbnail, { GalleryThumbnailData } from '../gallery-thumbnail'

const View = (props) => {
  const isMobile = useMedia({ maxWidth: 768 - 1 })
  const {
    caption,
    aspectRatio,
    base64,
    sizes,
    src,
    srcSet,
    srcSetWebp,
    srcWebp,
    source,
  } = props.data

  const image: ImageSharp = {
    childImageSharp: {
      fluid: {
        aspectRatio,
        base64,
        sizes,
        src,
        srcSet,
        srcSetWebp,
        srcWebp,
      },
    },
    publicURL: source,
  }
  return (
    <Image
      image={image}
      alt={caption}
      style={{
        maxHeight: isMobile
          ? `100vw / ${aspectRatio})`
          : `calc(1000px / ${aspectRatio})`,
        width: isMobile ? `100vw` : `calc(100vh * ${aspectRatio})`,
      }}
    />
  )
}

const FooterCount = () => null

export interface BigGalleryImage {
  src: ImageSharp
  caption: string
}
interface GalleryProps {
  readonly thumbnailImages: GalleryThumbnailData[]
  readonly bigImages: BigGalleryImage[]
}

const Gallery = ({ thumbnailImages, bigImages }: GalleryProps) => {
  const [currentImage, setCurrentImage] = useState(0)
  const [viewerIsOpen, setViewerIsOpen] = useState(false)

  const openLightbox = useCallback((index) => {
    setCurrentImage(index)
    setViewerIsOpen(true)
  }, [])

  const closeLightbox = () => {
    setCurrentImage(0)
    setViewerIsOpen(false)
  }

  return (
    <>
      <div className="inner-main common-spacing container gallery-container">
        <ul className="gallery-list has-center gallery-main">
          {thumbnailImages.map((image, i) => {
            return (
              <GalleryThumbnail
                key={i}
                data={image}
                openLightbox={openLightbox}
                index={i}
              />
            )
          })}
        </ul>
      </div>
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox} closeOnBackdropClick={false}>
            <Carousel
              components={{ View: View, FooterCount: FooterCount }}
              currentIndex={currentImage}
              views={bigImages.map((image) => {
                return {
                  ...image.src.childImageSharp.fluid,
                  srcset:
                    image.src.childImageSharp && image.src.childImageSharp.fluid
                      ? image.src.childImageSharp.fluid.srcSet
                      : '',
                  caption: image.caption,
                  source: image.src.publicURL ? image.src.publicURL : '',
                }
              })}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </>
  )
}

export default Gallery
