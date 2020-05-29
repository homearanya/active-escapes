import React from 'react'
import { Link } from 'gatsby'

export interface UniversalLinkProps {
  children?: React.ReactNode
  href?: string
  newTab?: boolean
  name?: string
  activeClassName?: string
  className?: string
  props?: React.HTMLAttributes<HTMLAnchorElement | HTMLSpanElement>
}

const UniversalLink = ({
  children,
  href,
  newTab = true,
  activeClassName = '',
  className = '',
  name = '',
  ...props
}) => {
  const content = children ? children : name
  if (newTab === null) newTab = true
  return (
    <>
      {href ? (
        href.indexOf('http://') !== -1 ||
        href.indexOf('https://') !== -1 ||
        href.indexOf('tel:') !== -1 ||
        href.indexOf('mailto:') !== -1 ? (
          <a
            href={href}
            target={newTab ? '_blank' : '_self'}
            className={className}
            {...props}
          >
            {content}
          </a>
        ) : (
          <Link
            to={href}
            activeClassName={activeClassName}
            className={className}
            {...props}
          >
            {content}
          </Link>
        )
      ) : (
        <span className={className} {...props}>
          {content}
        </span>
      )}
    </>
  )
}

export default UniversalLink
