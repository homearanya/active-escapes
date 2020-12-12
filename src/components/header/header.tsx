import React, { useState } from 'react'
import { Link } from 'gatsby'
import useMedia from 'use-media'

import Navigation from './navigation'
import SearchForm from './search-form'

import ColorLogo from '../../img/logos/logo.inline.svg'
import WhiteLogo from '../../img/logos/logo-white.inline.svg'

interface HeaderProps {
  tour?: boolean
  hasScrolled?: boolean
  newsletterRef: React.RefObject<HTMLInputElement>
}
const Header = ({
  tour = false,
  hasScrolled = false,
  newsletterRef,
}: HeaderProps) => {
  const isMobile = useMedia({ maxWidth: 992 - 1 })
  const [showSearch, setShowSearch] = useState(false)

  const handleOpenSearch = () => setShowSearch(true)
  const handleCloseSearch = () => setShowSearch(false)

  let logo

  if (tour) {
    logo = <WhiteLogo className="normal scrolled" />
  } else {
    if (isMobile) {
      logo = <ColorLogo className="gray-logo" />
    } else {
      if (hasScrolled) {
        logo = <ColorLogo className="gray-logo" />
      } else {
        logo = <WhiteLogo className="normal scrolled" />
      }
    }
  }

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
            {logo}
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
        <Navigation
          handleOpenSearch={handleOpenSearch}
          newsletterRef={newsletterRef}
        />
      </div>
    </header>
  )
}
export default Header
