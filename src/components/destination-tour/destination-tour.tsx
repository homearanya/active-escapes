import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import ActivitiesList from '../activities-list'
import { ImageSharp, Reference } from '../../types'
import { ProcessText, socialSharers } from '../../utils/helpers'

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
}: DestinationTourProps) => {
  const tourLink = `/${destination.frontmatter.code}/${activity[0].frontmatter.code}/${slug}`
  const fullUrl = `${siteUrl}${tourLink}`
  const { facebook, twitter, linkedin, pinterest } = socialSharers(
    fullUrl,
    tourName,
    shortDescription,
  )
  return (
    <article className="article has-hover-s1">
      <div className="thumbnail">
        <div className="img-wrap">
          {image && image.childImageSharp ? (
            <Img fluid={image.childImageSharp.fluid} alt={tourName} />
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
              <ul className="ico-action destination">
                <li>
                  <a href={twitter} target="_blank" rel="noreferrer">
                    <span className="icon-twitter"></span>
                  </a>
                  <br />
                </li>
                <li>
                  <a href={facebook} target="_blank" rel="noreferrer">
                    <span className="icon-facebook"></span>
                  </a>
                  <br />
                </li>
                <li>
                  <a href={linkedin} target="_blank" rel="noreferrer">
                    <span className="icon-linkedin"></span>
                  </a>
                  <br />
                </li>
                <li>
                  <a href={pinterest} target="_blank" rel="noreferrer">
                    <span className="icon-pin"></span>
                  </a>
                  <br />
                </li>
              </ul>
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
