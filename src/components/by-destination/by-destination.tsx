import React from 'react'

import FeaturedDestination, {
  FeaturedDestinationData,
} from '../featured-destination'

interface ByDestinationData {
  heading: string
  subHeading: string
  featuredDestinations: {
    featuredDestination: FeaturedDestinationData
    activity: string
    numberOfTours: number
  }[]
}

interface ByDestinationProps {
  data: ByDestinationData
}

const ByDestination = ({
  data: { heading, subHeading, featuredDestinations },
}: ByDestinationProps) => {
  return (
    <article className="content-block article-boxed featured-destinations">
      <div className="container">
        <header className="content-heading">
          {heading && <h2 className="main-heading">{heading}</h2>}
          {subHeading && <span className="main-subtitle">{subHeading}</span>}
          {/* {(heading || subHeading) && <div className="seperator" />} */}
        </header>
        <div className="content-holder content-boxed">
          <div className="row db-3-col featured-destination-row">
            {featuredDestinations.map(
              ({ featuredDestination, activity, numberOfTours }) => {
                return (
                  <FeaturedDestination
                    key={featuredDestination.destination.frontmatter.code}
                    data={featuredDestination}
                    numberOfTours={numberOfTours}
                    destinationFilter={activity}
                  />
                )
              },
            )}
          </div>
        </div>
      </div>
    </article>
  )
}
export default ByDestination
