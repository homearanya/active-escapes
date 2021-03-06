import React from 'react'
import { Link } from 'gatsby'
import Image from '../image'
import { ImageSharp } from '../../types'

export interface CardProps {
  image: ImageSharp
  name: string
  blurb?: string
  link: string
}

const Card = ({ image, name, blurb = '', link }: CardProps) => {
  return (
    <div key={link} className="col-sm-6 col-md-3 menu-mega-col">
      <div className="col">
        <Link to={link}>
          <div className="img-wrap">
            <Image image={image} alt={name} />
          </div>
          <div className="des">
            <strong className="title">{name}</strong>
            <p>{blurb}</p>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Card
