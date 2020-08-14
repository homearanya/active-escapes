import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import { ImageSharp } from '../../types'
import { ProcessText } from '../../utils/helpers'
import SocialSharer from '../social-sharer'

interface PostThumbnailData {
  siteUrl: string
  postTitle: string
  slug: string
  introduction: string
  date: string
  image: ImageSharp
}

interface PostThumbnailProps {
  data: PostThumbnailData
}

const PostThumbnail = ({
  data: { siteUrl, postTitle, slug, date, introduction, image },
}: PostThumbnailProps) => {
  const postLink = `/blog/${slug}/`
  return (
    <article className="article blog-article">
      <div className="thumbnail">
        <div className="img-wrap">
          {image && image.childImageSharp ? (
            <Link to={postLink}>
              <Img fluid={image.childImageSharp.fluid} alt={postTitle} />
            </Link>
          ) : null}
        </div>
        <div className="description">
          <header className="heading">
            <h3>
              <Link to={postLink}>{postTitle}</Link>
            </h3>
            <time className="info-day">{date}</time>
          </header>
          <p>{ProcessText(introduction)}</p>
          <footer className="meta">
            <SocialSharer
              data={{
                siteUrl,
                tourLink: postLink,
                tourName: postTitle,
                shortDescription: introduction,
              }}
            />
          </footer>
          <div className="link-view">
            <Link to={postLink}>VIEW POST</Link>
          </div>
        </div>
      </div>
    </article>
  )
}
export default PostThumbnail
