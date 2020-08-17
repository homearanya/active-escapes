/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState, useEffect } from 'react'
// import { useStaticQuery, graphql } from 'gatsby'

import Header from './header'
import Footer from './footer'
import '../vendors/font-awesome/css/font-awesome.css'
import '../vendors/material-design-icons/material-icons.css'
import '../vendors/animate/animate.css'
import '../styles/scss/bootstrap.scss'
import '../styles/scss/main.scss'
import './scroll-to-top'
import ScrollToTop from './scroll-to-top'

interface LayoutProps {
  children: React.ReactNode
  tour?: boolean
}

const Layout = ({ children, tour = false }: LayoutProps) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)
  const [hasScrolled, setHasScrolled] = useState(false)
  const handleScroll = () => {
    const scrollTop = window.pageYOffset

    if (scrollTop > 32) {
      setHasScrolled(true)
    } else {
      setHasScrolled(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  })
  return (
    <>
      <Header tour={tour} hasScrolled={hasScrolled} />
      <main
        className={hasScrolled ? 'scrolled' : undefined}
        style={{ overflow: 'hidden' }}
      >
        {children}
      </main>
      <Footer />
      <ScrollToTop show={hasScrolled} />
    </>
  )
}

export default Layout
