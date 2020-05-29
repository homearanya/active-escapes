import React from 'react'
import Img, { FluidObject } from 'gatsby-image'

interface ImageBlockProps {
  fluid: FluidObject
  alt: string
}

const ImageBlog = ({ fluid, alt }: ImageBlockProps) => {
  return (
    <div className="col-md-6 image height">
      <div className="bg-stretch">
        <Img fluid={fluid} alt={alt} />
      </div>
    </div>
  )
}

export default ImageBlog
