/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
// import { useStaticQuery, graphql } from 'gatsby'

import Header from './header'
import Footer from './footer'
import '../vendors/font-awesome/css/font-awesome.css'
import '../vendors/material-design-icons/material-icons.css'
import '../vendors/animate/animate.css'
import '../styles/scss/bootstrap.scss'
import '../styles/scss/main.scss'

const Layout = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
