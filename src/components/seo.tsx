/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

interface SEOProps {
  title?: string
  description?: string
  lang?: string
  meta?:
    | { property: string; content: string }[]
    | { name: string; content: string }[]
  path?: string
  image?: string
}
const SEO = ({
  description,
  lang,
  meta = [],
  title,
  path = '',
  image = '',
}: SEOProps) => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            siteUrl
            author
          }
        }
      }
    `,
  )

  const metaTitle = title || siteMetadata.title
  const metaDescription = description || siteMetadata.description
  const fullUrl = `${siteMetadata.siteUrl}${path}`
  const imageUrl = image ? `${siteMetadata.siteUrl}${image}` : ''

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: metaTitle,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:url`,
          content: `${fullUrl}`,
        },
        imageUrl
          ? {
              property: `og:image`,
              content: `${imageUrl}`,
            }
          : {},
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:title`,
          content: metaTitle,
        },
        imageUrl
          ? {
              property: `twitter:image`,
              content: `${imageUrl}`,
            }
          : {},
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
