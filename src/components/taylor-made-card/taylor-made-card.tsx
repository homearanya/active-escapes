import React from 'react'

import { ImageSharp } from '../../types'
import { ProcessText } from '../../utils/helpers'
import UniversalLink from '../universal-link'
import Image from '../image'

export interface TaylorMadeCardInterface {
  image: ImageSharp
  title: string
  subTitle: string
  description: string
  link: {
    href: string
    text: string
  }
}

interface TaylorMadeCardProps {
  data: TaylorMadeCardInterface
}

const TaylorMadeCard = ({
  data: { image, title, subTitle, description, link },
}: TaylorMadeCardProps) => {
  return (
    <article className="taylor-made-card__wrapper">
      <div className="taylor-made-card__img-wrap">
        {image && image.childImageSharp ? (
          <Image image={image} alt={title} />
        ) : null}
      </div>
      <div className="taylor-made-card__textblock">
        <h3 className="taylor-made-card__title">{title}</h3>
        {subTitle && <p className="taylor-made-card__subTitle">{subTitle}</p>}

        <p className="taylor-made-card__description">
          {ProcessText(description)}
        </p>
        <UniversalLink
          href={link.href}
          className="btn btn-default featured-explore-button"
        >
          {link.text}
        </UniversalLink>
      </div>
    </article>
  )
}
export default TaylorMadeCard
