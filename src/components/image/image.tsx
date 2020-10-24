import React, { CSSProperties } from 'react'
import Img, { FixedObject, FluidObject } from 'gatsby-image'

import { ImageSharp } from '../../types'
import { getPresentationWidthFromSizes } from '../../utils/helpers'

interface ImageProps {
  readonly image: ImageSharp
  readonly className?: string
  readonly style?: CSSProperties
  readonly alt?: string
  readonly title?: string
}

const Image = ({
  image,
  className,
  style,
  alt,
  title,
  ...props
}: ImageProps) => {
  const fluid =
    image && image.childImageSharp && image.childImageSharp.fluid
      ? image.childImageSharp.fluid
      : undefined
  const fixed =
    !fluid && image && image.childImageSharp && image.childImageSharp.fixed
      ? image.childImageSharp.fixed
      : undefined
  const publicURL = image && image.publicURL ? image.publicURL : undefined

  if (fluid || fixed) {
    let processedStyle = style
    if (fluid && fluid.sizes) {
      processedStyle = style
        ? {
            ...style,
            maxWidth: getPresentationWidthFromSizes(fluid.sizes),
            marginLeft: 'auto', // Used to center the image
            marginRight: 'auto', // Used to center the image
          }
        : {
            maxWidth: getPresentationWidthFromSizes(fluid.sizes),
            marginLeft: 'auto', // Used to center the image
            marginRight: 'auto', // Used to center the image
          }
    }

    return (
      <Img
        className={className}
        style={processedStyle}
        fixed={fixed as FixedObject}
        fluid={fluid as FluidObject}
        alt={alt}
        title={title}
        {...props}
      />
    )
  } else if (publicURL) {
    return (
      <img
        src={publicURL}
        alt={alt}
        title={title}
        className={className}
        style={{ ...style, display: 'inline-block' }}
      />
    )
  } else {
    return null
  }
}

export default Image
