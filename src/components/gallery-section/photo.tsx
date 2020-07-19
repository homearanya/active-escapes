import React from 'react'
import { Link } from 'gatsby'
import Img, { FluidObject } from 'gatsby-image'

interface PhotoProps {
  link: string
  fluid: FluidObject
  alt: string
  icon: React.ReactElement
  text: string
}

const Photo = ({ link, fluid, alt, icon, text }: PhotoProps) => (
  <li>
    <Link to={link} className="thumbnail">
      <Img fluid={fluid} alt={alt} />
      {icon}
      <span className="info">{text}</span>
    </Link>
  </li>
)
export default Photo
