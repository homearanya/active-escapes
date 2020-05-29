import React from 'react'
import UniversalLink from '../universal-link'

interface ReviewProps {
  googlePlaceId: String
  author: string
  authorURL: string
  text: string
  profilePicture?: string
}

const Review = ({
  googlePlaceId,
  author,
  authorURL,
  text,
  profilePicture,
}: ReviewProps) => {
  const reviewBaseURL = authorURL.replace('/reviews', '')
  return (
    <div className="slide">
      <UniversalLink href={`${reviewBaseURL}/place/${googlePlaceId}`}>
        <blockquote className="testimonial-quote">
          {profilePicture ? (
            <div className="img">
              <img src={profilePicture} height="112" width="112" alt={author} />
            </div>
          ) : null}
          <div className="text">
            <cite>{author}</cite>
            <q>{text}</q>
          </div>
        </blockquote>
      </UniversalLink>
    </div>
  )
}

export default Review
