import React from 'react'
import { Link } from 'gatsby'

import { ImageSharp, Reference } from '../../types'
import { processText } from '../../utils/helpers'
import Image from '../image'

interface PopularTourData {
  slug: string
  image: ImageSharp
  tagline: string
  title: string
  description: string
  activity: { name: Reference; featured: number }[]
  destination: Reference
}

interface PopularTourProps {
  data: PopularTourData
}

const PopularTour = ({
  data: { slug, image, tagline, title, description, destination, activity },
}: PopularTourProps) => {
  const tourLink = `/${destination.frontmatter.code}/${activity[0].name.frontmatter.code}/${slug}`

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
      <p>{processText(description)}</p>
    </article>
  )
}
export default PopularTour
