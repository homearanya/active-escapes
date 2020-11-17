import React, { useState } from 'react'
import { Link } from 'gatsby'

import Navigation from './navigation'
import SearchForm from './search-form'

import ColorLogo from '../../img/logos/logo.inline.svg'
import WhiteLogo from '../../img/logos/logo-white.inline.svg'

interface HeaderProps {
  tour?: boolean
  hasScrolled?: boolean
}
const Header = ({ tour = false, hasScrolled = false }: HeaderProps) => {
  const [showSearch, setShowSearch] = useState(false)

  const handleOpenSearch = () => setShowSearch(true)
  const handleCloseSearch = () => setShowSearch(false)

  return (
    <header
      id="header"
      className={`${tour ? 'dark-header' : 'white-header'}${
        hasScrolled ? ' fixed-position' : ''
      }`}
    >
      <div className="header-wrapper">
        <div className={`logo${tour ? ' tour' : ''}`}>
          <Link className="logo-link" to="/">
            {hasScrolled ? (
              tour ? (
                <WhiteLogo className="normal scrolled" />
              ) : (
                <ColorLogo className="gray-logo" />
              )
            ) : (
              <WhiteLogo className="normal" />
            )}
          </Link>
          <span className="logo-text">
            Active Escapes
            <a href="tel:+27842407277">+27 84 240 7277</a>
          </span>
        </div>
        <SearchForm
          handleCloseSearch={handleCloseSearch}
          handleOpenSearch={handleOpenSearch}
          open={showSearch}
        />
        <Navigation handleOpenSearch={handleOpenSearch} />
      </div>
    </header>
  )
}
export default Header
