import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

import { ImageSharp, Reference } from '../../types'
import { processText } from '../../utils/helpers'
import SocialSharer from '../social-sharer'
import Image from '../image'

export interface FeaturedTourInterface {
  meta: {
    description: string
  }
  slug: string
  tourName: string
  duration?: string
  destination: Reference
  activity: {
    name: Reference
    featured: number
    listing: {
      title?: string
      subtitle?: string
      image: ImageSharp
      description: string
    }
  }[]
}

interface FeaturedTourProps {
  data: FeaturedTourInterface
  activityFilter: string
}

const FeaturedTour = ({
  data: { tourName, duration = '', slug, meta, destination, activity },
  activityFilter,
}: FeaturedTourProps) => {
  const {
    site: {
      siteMetadata: { siteUrl },
    },
  } = useStaticQuery(graphql`
    query FeaturedTours {
      site {
        siteMetadata {
          siteUrl
        }
      }
    }
  `)
  const tourLink = `/${destination.frontmatter.code}/${activity[0].name.frontmatter.code}/${slug}`
  const activityListing = activity.find(
    ({ name }) => name.frontmatter.code === activityFilter,
  )
  const activities = activity.reduce((acc, cur, i) => {
    if (i === 0) {
      return cur.name.frontmatter.activityName
    } else {
      return acc + ', ' + cur.name.frontmatter.activityName
    }
  }, '')
  let image, title, subtitle, description
  if (activityListing && activityListing.listing) {
    image = activityListing.listing.image
    title = activityListing.listing.title
    subtitle = activityListing.listing.subtitle
    description = activityListing.listing.description
  }
  return (
    <article className="col-sm-6 col-md-4 article has-hover-s1">
      <div className="thumbnail">
        <div className="img-wrap">
          {image && image.childImageSharp ? (
            <Image image={image} alt={tourName} />
          ) : null}
        </div>
        <h3 className="small-space">
          <Link to={tourLink}>{title || tourName}</Link>
        </h3>
        {subtitle && <span className="info">{subtitle}</span>}
        <aside className="meta">
          {duration && (
            <span className="duration">
              <span className="ico-clock ux"></span>
              {duration}
            </span>
          )}
          <span className="country">
            <span className="icon-world"></span>
            {destination.frontmatter.destinationName}
          </span>
          <span className="activity">
            <span className="icon-acitivities"> </span>
            {activities}
          </span>
        </aside>
        <p>{processText(description)}</p>
        <Link to={tourLink} className="btn btn-default featured-explore-button">
          explore
        </Link>
        <footer>
          <SocialSharer
            data={{
              siteUrl,
              tourLink,
              tourName,
              shortDescription: meta.description,
            }}
          />
        </footer>
      </div>
    </article>
  )
}
export default FeaturedTour
