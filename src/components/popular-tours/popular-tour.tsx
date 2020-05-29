import React from 'react'
import { Link } from 'gatsby'
import Img, { FixedObject } from 'gatsby-image'

import UniversalLink from '../universal-link'

interface PopularTourProps {
  tourLink: string
  fixed: FixedObject
  alt: string
  tag: string
  price: string
  heartLink: string
  replyLink: string
  heading: string
  text: React.ReactElement
}

const PopularTour = ({
  tourLink,
  heartLink,
  replyLink,
  fixed,
  alt,
  tag,
  price,
  heading,
  text,
}: PopularTourProps) => (
  <article className="col-sm-6 col-md-4 article has-hover-s3">
    <div className="img-wrap">
      <Link to={tourLink} className="img-link">
        <Img fixed={fixed} alt={alt} />
      </Link>
      <div className="img-caption text-uppercase">{tag}</div>
      <div className="hover-article">
        <div className="star-rating">
          <span>
            <span className="icon-star"></span>
          </span>
          <span>
            <span className="icon-star"></span>
          </span>
          <span>
            <span className="icon-star"></span>
          </span>
          <span>
            <span className="icon-star"></span>
          </span>
          <span className="disable">
            <span className="icon-star"></span>
          </span>
        </div>
        <div className="icons">
          <UniversalLink href={heartLink}>
            <span className="icon-heart"></span>
          </UniversalLink>
          <UniversalLink href={replyLink}>
            <span className="icon-reply"></span>
          </UniversalLink>
        </div>
        <div className="info-footer">
          <span className="price">
            from <span>{price}</span>
          </span>
          <Link to={tourLink} className="link-more">
            Explore
          </Link>
        </div>
      </div>
    </div>
    <h3>
      <Link to={tourLink}>{heading}</Link>
    </h3>
    {text}
  </article>
)
export default PopularTour
