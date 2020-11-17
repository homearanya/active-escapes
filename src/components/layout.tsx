/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState, useEffect } from 'react'
// import { useStaticQuery, graphql } from 'gatsby'

import { ModalProvider } from '../context/modal-context'

import Header from './header'
import Footer from './footer'
import Modals from './modals'

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
  pageClassName?: string
}

const Layout = ({
  children,
  tour = false,
  pageClassName = '',
}: LayoutProps) => {
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
    <ModalProvider>
      <Header tour={tour} hasScrolled={hasScrolled} />
      <main
        id="main"
        className={`${hasScrolled ? 'scrolled' : ''}${
          pageClassName ? ` ${pageClassName}` : ''
        }`}
        style={{ overflow: 'hidden' }}
      >
        {children}
      </main>
      <Footer />
      <ScrollToTop show={hasScrolled} />
      <Modals />
    </ModalProvider>
  )
}

export default Layout
