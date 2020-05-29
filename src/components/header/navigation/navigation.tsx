import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
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
              menuItems {
                name
                link
              }
            }
          }
        }
      }
    }
  `)
  return (
    <nav className="navbar navbar-default">
      <Burger />

      <div className="collapse navbar-collapse" id="nav">
        <ul className="nav navbar-nav">
          {menuItems.map(({ name, link, menuItems }) => (
            <>
              <MenuItem
                key={name}
                name={name}
                link={link}
                menuItems={menuItems}
              />
            </>
          ))}
          <li className="visible-xs visible-sm">
            <a href="login.html" className="subscribe">
              <WhiteLogo className="newsletter-icon" />
              <span className="text">Subscribe</span>
            </a>
          </li>
          <li className="hidden-xs hidden-sm">
            <a href="login.html" className="subscribe">
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
