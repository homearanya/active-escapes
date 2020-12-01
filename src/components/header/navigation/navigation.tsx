import React, { useState, useEffect } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { scroller } from 'react-scroll'
import Burger from './burger'
import MenuItem from './menu-item'
import WhiteLogo from '../../../img/logos/logo-white.inline.svg'

interface NavigationProps {
  handleOpenSearch: () => void
}

const Navigation = ({ handleOpenSearch }: NavigationProps) => {
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

  const [openMenu, setOpenMenu] = useState(false)
  const handleClick = () => setOpenMenu((openMenu) => !openMenu)
  const navigateToNewsletter = () => {
    scroller.scrollTo('signup', {
      duration: 1500,
      smooth: 'easeInOut',
    })
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
            />
          ))}
          <li className="visible-xs visible-sm">
            <a href="login.html" className="subscribe">
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
