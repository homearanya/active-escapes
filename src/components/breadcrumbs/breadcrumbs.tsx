import React from 'react'
import { Link } from 'gatsby'

interface BreadcrumbsProps {
  breadcrumbs: Breadcrumbs
}

const Breadcrumbs = ({ breadcrumbs }: BreadcrumbsProps) => (
  <nav className="breadcrumbs">
    <ul>
      {breadcrumbs.map(({ name, href }) => (
        <li>{href ? <Link to={href}>{name}</Link> : <span>{name}</span>}</li>
      ))}
    </ul>
  </nav>
)
export default Breadcrumbs
