import React from 'react'
import { Link } from 'gatsby'

interface TextBlockProps {
  heading: string
  text: string
  link: string
}
const TextBlock = ({ heading, text, link }: TextBlockProps) => {
  return (
    <div className="col-md-6 text-block height">
      <div className="centered">
        <h2 className="intro-heading">{heading}</h2>
        <p className="intro">{text}</p>
        <Link to={link} className="btn btn-primary btn-lg">
          Read more
        </Link>
      </div>
    </div>
  )
}

export default TextBlock
