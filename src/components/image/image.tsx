import React, { CSSProperties } from 'react'
import Img, { GatsbyImageProps } from 'gatsby-image'

import { ImageSharp } from '../..//types'
import { getPresentationWidthFromSizes } from '../../utils/helpers'

const NonStretchedImage = ({ ...props }) => {
  let normalizedProps = props

  if (props.fluid && props.fluid.sizes) {
    normalizedProps = {
      ...props,
      style: {
        ...(props.style || {}),
        maxWidth: getPresentationWidthFromSizes(props.fluid.sizes),
        marginLeft: 'auto', // Used to center the image
        marginRight: 'auto', // Used to center the image
      },
    }
  }
  return <Img {...normalizedProps} />
}

interface ImageProps extends GatsbyImageProps {
  readonly image: ImageSharp
  readonly className?: string
  readonly style?: CSSProperties
  props?: React.HTMLAttributes<HTMLDivElement>
}

const Image = ({ image, className, style, ...props }: ImageProps) => {
  return !!image &&
    !!image.childImageSharp &&
    (!!image.childImageSharp.fluid || !!image.childImageSharp.fixed) ? (
    <NonStretchedImage
      className={className}
      style={style}
      {...props}
      fixed={image.childImageSharp.fixed}
      fluid={image.childImageSharp.fluid}
    />
  ) : !!image && !!image.publicURL ? (
    <img
      src={image.publicURL}
      alt={props.alt}
      className={className}
      style={{ ...style, display: 'inline-block' }}
    />
  ) : null
}

export default Image
