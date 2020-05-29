import React from 'react'
import { Link } from 'gatsby'
import Img, { FixedObject } from 'gatsby-image'

interface PhotoProps {
  link: string
  fixed: FixedObject
  alt: string
  icon: React.ReactElement
  text: string
}

const Photo = ({ link, fixed, alt, icon, text }: PhotoProps) => (
  <li>
    <Link to={link} className="thumbnail">
      <Img fixed={fixed} alt={alt} />
      {icon}
      <span className="info">{text}</span>
    </Link>
  </li>
)
export default Photo
