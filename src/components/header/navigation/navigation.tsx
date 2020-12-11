import React, { useState, useEffect, useContext } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { scroller, animateScroll } from 'react-scroll'

import { SubscribeContext } from '../../../context/subscribe-context'
import Burger from './burger'
import MenuItem from './menu-item'
import WhiteLogo from '../../../img/logos/logo-white.inline.svg'

interface NavigationProps {
  handleOpenSearch: () => void
  newsletterRef: React.RefObject<HTMLInputElement>
}

const Navigation = ({ handleOpenSearch, newsletterRef }: NavigationProps) => {
  const {
    site: {
      siteMetadata: {
        siteMenu: { menuItems },
      },
    },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          siteMenu {
            menuItems {
              name
              link
              megaMenu
              menuItems {
                name
                link
                img
                blurb
              }
            }
          }
        }
      }
    }
  `)
  const { dispatch } = useContext(SubscribeContext)
  const [openMenu, setOpenMenu] = useState(false)
  const handleClick = () => setOpenMenu((openMenu) => !openMenu)
  const closeMenu = () => {
    setOpenMenu(false)
    animateScroll.scrollToTop()
  }
  const navigateToNewsletter = () => {
    if (openMenu) setOpenMenu(false)
    dispatch({ type: 'subscribe', payload: true })
    scroller.scrollTo('signup', {
      duration: 1500,
      smooth: 'easeInOut',
    })
    if (newsletterRef && newsletterRef.current) {
      newsletterRef.current.focus()
    }
  }
  useEffect(() => {
    // Update the document title using the browser API
    if (openMenu) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [openMenu])

  return (
    <nav className="navbar navbar-default">
      <Burger handleClick={handleClick} />

      <div
        className={`collapse navbar-collapse${openMenu ? ' in' : ''}`}
        id="nav"
      >
        <ul className="nav navbar-nav">
          {menuItems.map(({ name, link, megaMenu, menuItems }, i) => (
            <MenuItem
              key={i}
              name={name}
              megaMenu={megaMenu}
              link={link}
              menuItems={menuItems}
              closeMenu={closeMenu}
            />
          ))}
          <li className="visible-xs visible-sm">
            <a onClick={navigateToNewsletter} className="subscribe">
              <span className="text">Subscribe</span>
            </a>
          </li>
          <li className="hidden-xs hidden-sm">
            <a onClick={navigateToNewsletter} className="subscribe">
              <WhiteLogo className="newsletter-icon" />
            </a>
          </li>
          <li className="visible-md visible-lg nav-visible">
            <a onClick={handleOpenSearch} className="search-opener">
              <span className="icon icon-search"></span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
export default Navigation
