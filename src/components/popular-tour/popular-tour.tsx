import React from 'react'
import { Link } from 'gatsby'

import UniversalLink from '../universal-link'
import { ImageSharp, Reference } from '../../types'
import { ProcessText } from '../../utils/helpers'
import Image from '../image'

interface PopularTourData {
  slug: string
  image: ImageSharp
  tagline: string
  title: string
  description: string
  activity: [Reference]
  destination: Reference
}

interface PopularTourProps {
  data: PopularTourData
}

const PopularTour = ({
  data: { slug, image, tagline, title, description, destination, activity },
}: PopularTourProps) => {
  const tourLink = `/${destination.frontmatter.code}/${activity[0].frontmatter.code}/${slug}`

  return (
    <article className="col-sm-6 col-md-4 article has-hover-s3">
      <div className="img-wrap">
        <Link to={tourLink} className="img-link">
          {image && image.childImageSharp ? (
            <Image image={image} alt={title} />
          ) : null}
        </Link>
        <div className="img-caption text-uppercase">{tagline}</div>
        <div className="hover-article">
          <div className="icons">
            <UniversalLink href={''}>
              <span className="icon-heart"></span>
            </UniversalLink>
            <UniversalLink href={''}>
              <span className="icon-reply"></span>
            </UniversalLink>
          </div>
          <div className="info-footer">
            <Link to={tourLink} className="link-more">
              Explore
            </Link>
          </div>
        </div>
      </div>
      <h3>
        <Link to={tourLink}>{title}</Link>
      </h3>
      <p>{ProcessText(description)}</p>
    </article>
  )
}
export default PopularTour
