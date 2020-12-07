import React from 'react'

import { ImageSharp } from '../../types'
import { processText } from '../../utils/helpers'
import UniversalLink from '../universal-link'
import Image from '../image'

export interface TaylorMadeCardInterface {
  image: ImageSharp
  title: string
  subTitle?: string
  description?: string
  descriptionInParagraphs?: string[]
  link?: {
    href: string
    text: string
  }
  link2?: {
    href: string
    text: string
  }
}

interface TaylorMadeCardProps {
  data: TaylorMadeCardInterface
}

const TaylorMadeCard = ({
  data: {
    image,
    title,
    subTitle,
    description,
    descriptionInParagraphs,
    link,
    link2,
  },
}: TaylorMadeCardProps) => {
  return (
    <article className="taylor-made-card__wrapper">
      <div className="taylor-made-card__img-wrap">
        {image && image.childImageSharp ? (
          <Image image={image} alt={title} />
        ) : null}
      </div>
      <div className="taylor-made-card__textblock">
        {title && <h3 className="taylor-made-card__title">{title}</h3>}
        {subTitle && <p className="taylor-made-card__subTitle">{subTitle}</p>}

        {description && (
          <p className="taylor-made-card__description">
            {processText(description)}
          </p>
        )}
        {descriptionInParagraphs &&
          descriptionInParagraphs.map((paragraph) => (
            <p className="taylor-made-card__description">
              {processText(paragraph)}
            </p>
          ))}
        {link && (
          <UniversalLink
            href={link.href}
            className="btn btn-default featured-explore-button"
          >
            {link.text}
          </UniversalLink>
        )}
        {link2 && (
          <UniversalLink
            href={link2.href}
            className="btn btn-default featured-explore-button featured-explore-button--extra"
          >
            {link2.text}
          </UniversalLink>
        )}
      </div>
    </article>
  )
}
export default TaylorMadeCard
