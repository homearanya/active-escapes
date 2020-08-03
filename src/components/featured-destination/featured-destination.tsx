import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import { ImageSharp } from '../../types'
import { ProcessText } from '../../utils/helpers'

interface FeaturedDestinationData {
  destinationName: string
  image: ImageSharp
  heading: string
  subHeading: string
  description: string
  link: string
  filter: string
}

interface FeaturedDestinationProps {
  data: FeaturedDestinationData
  numberOfTours: number
}

const FeaturedDestination = ({
  data: {
    destinationName,
    image,
    heading,
    subHeading,
    description,
    link,
    filter,
  },
  numberOfTours,
}: FeaturedDestinationProps) => {
  console.log('filter: ', filter)
  return (
    <article className="col-sm-6 col-md-4 article has-hover-s1">
      <div className="thumbnail">
        <div className="img-wrap">
          {image && image.childImageSharp ? (
            <Img fluid={image.childImageSharp.fluid} alt={heading} />
          ) : null}
        </div>
        <h3 className="small-space">
          <Link to={link}>{heading}</Link>
        </h3>
        <span className="info">{subHeading}</span>
        <aside className="meta">
          <span className="country">
            <span className="icon-world"></span>
            {destinationName}
          </span>
          <span className="activity">
            <span className="icon-acitivities"> </span>
            {`${numberOfTours} tours`}
          </span>
        </aside>
        <p>{ProcessText(description)}</p>
        <Link to={link} className="btn btn-default featured-explore-button">
          explore
        </Link>
      </div>
    </article>
  )
}
export default FeaturedDestination
