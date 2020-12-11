import React from 'react'
import { navigate } from 'gatsby'

import { ImageSharp, Reference } from '../../types'
import { processText } from '../../utils/helpers'
import Image from '../image'

export interface FeaturedDestinationData {
  destination: Reference
  image: ImageSharp
  heading: string
  subHeading: string
  description: string
  link: string
}

interface FeaturedDestinationProps {
  data: FeaturedDestinationData
  numberOfTours: number
  destinationFilter: string
}

const FeaturedDestination = ({
  data: { destination, image, heading, subHeading, description, link },
  numberOfTours,
  destinationFilter,
}: FeaturedDestinationProps) => {
  const handleClick = () => {
    navigate(`${link}`, { state: { activity: destinationFilter } })
  }
  return (
    <article className="col-xs-12 col-sm-6 col-md-4 article has-hover-s1">
      <div className="thumbnail">
        <div className="img-wrap">
          {image && image.childImageSharp ? (
            <Image image={image} alt={heading} />
          ) : null}
        </div>
        <h3 onClick={handleClick} className="small-space clickable">
          {heading}
        </h3>
        <span className="info">{subHeading}</span>
        <aside className="meta">
          <span className="country">
            <span className="icon-world"></span>
            {destination.frontmatter.destinationName}
          </span>
          <span className="activity">
            <span className="icon-acitivities"> </span>
            {`${numberOfTours} ${numberOfTours === 1 ? 'tour' : 'tours'}`}
          </span>
        </aside>
        <p>{processText(description)}</p>
        <span
          onClick={handleClick}
          className="btn btn-default featured-explore-button"
        >
          explore
        </span>
      </div>
    </article>
  )
}
export default FeaturedDestination
