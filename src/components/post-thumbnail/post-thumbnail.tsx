import React from 'react'
import { Link } from 'gatsby'

import { ImageSharp } from '../../types'
import { processText } from '../../utils/helpers'
import SocialSharer from '../social-sharer'
import Image from '../image'

interface PostThumbnailData {
  siteUrl: string
  postTitle: string
  slug: string
  introduction: string
  date: string
  image: ImageSharp
  tags: string[]
  allTags: { [key: string]: { count: number; slug: string } }
}

interface PostThumbnailProps {
  data: PostThumbnailData
}

const PostThumbnail = ({
  data: { siteUrl, postTitle, slug, date, introduction, image, tags, allTags },
}: PostThumbnailProps) => {
  const postLink = `/blog/${slug}/`
  return (
    <article className="article blog-article">
      <div className="thumbnail">
        <div className="img-wrap">
          {image && image.childImageSharp ? (
            <Link to={postLink}>
              <Image image={image} alt={postTitle} />
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
          <p>{processText(introduction)}</p>
          <footer className="meta">
            <div className="link-view">
              <Link to={postLink}>VIEW POST</Link>
            </div>
            <SocialSharer
              data={{
                siteUrl,
                tourLink: postLink,
                tourName: postTitle,
                shortDescription: introduction,
              }}
            />
          </footer>
          <div className="thumbnail__tags">
            {tags.map((tag, index) => (
              <span key={index} className="thumbnail__tag">
                <Link to={allTags[tag].slug}>{tag}</Link>
                {tags.length > 1 && index < tags.length - 1 ? (
                  <span>&nbsp;&nbsp;&sdot;&nbsp;&nbsp;</span>
                ) : null}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  )
}
export default PostThumbnail
