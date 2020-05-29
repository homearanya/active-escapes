import React from 'react'
import { Link } from 'gatsby'

interface FeatureProps {
  link: string
  icon: React.ReactElement
  text: string
}

const Feature = ({ link, icon, text }: FeatureProps) => (
  <li>
    <Link to={link}>
      <span className="ico">{icon}</span>
      <span className="info">{text}</span>
    </Link>
  </li>
)

export default Feature
