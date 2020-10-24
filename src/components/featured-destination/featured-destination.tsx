import React from 'react'
import { navigate } from 'gatsby'

import { ImageSharp } from '../../types'
import { ProcessText } from '../../utils/helpers'
import Image from '../image'

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
  const handleClick = () => {
    navigate(`${link}`, { state: { activity: filter } })
  }
  return (
    <article className="col-sm-6 col-md-4 article has-hover-s1">
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
            {destinationName}
          </span>
          <span className="activity">
            <span className="icon-acitivities"> </span>
            {`${numberOfTours} tours`}
          </span>
        </aside>
        <p>{ProcessText(description)}</p>
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
