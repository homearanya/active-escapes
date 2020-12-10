import React from 'react'

import FeaturedTour, { FeaturedTourInterface } from '../featured-tour'

interface FeaturedToursData {
  heading: string
  subHeading: string
  grid?: string
  activityFilter: string
  featuredTours: {
    id: string
    frontmatter: FeaturedTourInterface
  }[]
}

interface FeaturedToursProps {
  data: FeaturedToursData
}

const FeaturedTours = ({
  data: { heading, subHeading, grid = '', activityFilter, featuredTours },
}: FeaturedToursProps) => {
  return (
    <article
      className={`content-block article-boxed featured-tours`}
      style={{ paddingBottom: 0 }}
    >
      <div className="container">
        <header className="content-heading">
          <h2 className="main-heading">{heading}</h2>
          <span className="main-subtitle">{subHeading}</span>
          {/* <div className="seperator" /> */}
        </header>
        <div className="content-holder content-boxed">
          <div
            className={`row db-3-col featured-tour-row${
              grid ? ` ${grid}` : ''
            }`}
          >
            {featuredTours.map(({ id, frontmatter }) => {
              return (
                <FeaturedTour
                  key={id}
                  data={frontmatter}
                  activityFilter={activityFilter}
                />
              )
            })}
          </div>
        </div>
      </div>
    </article>
  )
}
export default FeaturedTours
