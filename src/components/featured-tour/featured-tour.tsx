import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import { ImageSharp, Reference } from '../../types'
import { ProcessText, socialSharers } from '../../utils/helpers'

interface FeaturedTourData {
  siteUrl: string
  tourName: string
  slug: string
  shortDescription: string
  image: ImageSharp
  tagline: string
  title: string
  description: string
  activity: [Reference]
  destination: Reference
}

interface FeaturedTourProps {
  data: FeaturedTourData
}

const FeaturedTour = ({
  data: {
    siteUrl,
    tourName,
    slug,
    shortDescription,
    image,
    description,
    destination,
    activity,
  },
}: FeaturedTourProps) => {
  const tourLink = `/${destination.frontmatter.code}/${activity[0].frontmatter.code}/${slug}`
  const activities = activity.reduce((acc, cur, i) => {
    if (i === 0) {
      return cur.frontmatter.activityName
    } else {
      return acc + ', ' + cur.frontmatter.activityName
    }
  }, '')
  const fullUrl = `${siteUrl}${tourLink}`
  const { facebook, twitter, linkedin, pinterest } = socialSharers(
    fullUrl,
    tourName,
    shortDescription,
  )

  return (
    <article className="col-sm-6 col-md-4 article has-hover-s1">
      <div className="thumbnail">
        <div className="img-wrap">
          {image && image.childImageSharp ? (
            <Img fluid={image.childImageSharp.fluid} alt={tourName} />
          ) : null}
        </div>
        <h3 className="small-space">
          <Link to={tourLink}>{tourName}</Link>
        </h3>
        <aside className="meta">
          <span className="country">
            <span className="icon-world"></span>
            {destination.frontmatter.destinationName}
          </span>
          <span className="activity">
            <span className="icon-acitivities"> </span>
            {activities}
          </span>
        </aside>
        <p>{ProcessText(description)}</p>
        <Link to={tourLink} className="btn btn-default featured-explore-button">
          explore
        </Link>
        <footer>
          <ul className="social-networks">
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
    </article>
  )
}
export default FeaturedTour
