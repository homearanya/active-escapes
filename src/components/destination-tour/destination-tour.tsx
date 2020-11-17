import React from 'react'
import { Link } from 'gatsby'

import ActivitiesList from '../activities-list'
import SocialSharer from '../social-sharer'
import Image from '../image'
import { ImageSharp, Reference } from '../../types'
import { ProcessText } from '../../utils/helpers'

interface DestinationTourData {
  slug: string
  tourName: string
  duration: string
  shortDescription: string
  fromPricing: string
  difficultyLevel: Reference
  destinationTour: {
    image: ImageSharp
    title: string
    description: string
  }
  destination: Reference
  activity: Reference[]
  subActivity: Reference[] | null
}

interface DestinationTourProps {
  siteUrl: string
  data: DestinationTourData
  grid: boolean
}

const DestinationTour = ({
  data: {
    tourName,
    slug,
    duration,
    fromPricing,
    difficultyLevel,
    shortDescription,
    destinationTour: { image, title, description },
    destination,
    activity,
    subActivity,
  },
  siteUrl,
  grid,
}: DestinationTourProps) => {
  const tourLink = `/${destination.frontmatter.code}/${activity[0].frontmatter.code}/${slug}`

  return (
    <article
      className={`article has-hover-s1${grid ? ' col-sm-6 col-md-4' : ''}`}
    >
      <div className={`thumbnail${grid ? ' grid' : ''}`}>
        <div className="img-wrap">
          {image && image.childImageSharp ? (
            <Image image={image} alt={tourName} />
          ) : null}
        </div>
        <div className="description">
          <div className="col-left">
            <header className="heading">
              <h3>
                <Link to={tourLink}>{title}</Link>
              </h3>
              <div className="info-day">{duration}</div>
            </header>
            <p className="text">{ProcessText(description)}</p>
            <footer className="info-footer destination">
              <ActivitiesList data={{ activity, subActivity }} />
              <SocialSharer
                data={{ siteUrl, tourLink, tourName, shortDescription }}
              />
            </footer>
          </div>
          <aside className="info-aside">
            <span className="price">
              from <span>{fromPricing}</span>
            </span>
            <div className="activity-level">
              <div className="ico">
                <span className={difficultyLevel.frontmatter.icon}></span>
              </div>
              <span className="text">{difficultyLevel.frontmatter.title}</span>
            </div>
            <Link to={tourLink} className="btn btn-default">
              explore
            </Link>
          </aside>
        </div>
      </div>
    </article>
  )
}
export default DestinationTour
