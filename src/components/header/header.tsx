import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'

import Navigation from './navigation'
import SearchForm from './search-form'

import ColorLogo from '../../img/logos/logo.inline.svg'
import WhiteLogo from '../../img/logos/logo-white.inline.svg'

const Header = () => {
  const [hasScrolled, setHasScrolled] = useState(false)
  const [showSearch, setShowSearch] = useState(false)

  const handleOpenSearch = () => setShowSearch(true)
  const handleCloseSearch = () => setShowSearch(false)

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
    <header
      id="header"
      className={`white-header ${hasScrolled ? 'fixed-position' : ''}${
        showSearch ? 'search-active' : ''
      }`}
    >
      <div className="header-wrapper">
        <div className="logo">
          <Link className="logo-link" to="/">
            <WhiteLogo className="normal" />
            <ColorLogo className="gray-logo" />
          </Link>
          <span className="logo-text">
            Active Escapes
            <a href="tel:+27842407277">+27 84 240 7277</a>
          </span>
        </div>
        <SearchForm
          handleCloseSearch={handleCloseSearch}
          handleOpenSearch={handleOpenSearch}
        />
        <Navigation handleOpenSearch={handleOpenSearch} />
      </div>
    </header>
  )
}
export default Header
