import React, { useState, useEffect } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import MenuDropDown from '../header/navigation/menu-dropdown'

const BrowserSection = () => {
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

  const [dropdown, setDropdown] = useState(false)
  const [sectionOffset, setSectionOffset] = useState(0)

  const handleScroll = () => {
    const scrollTop = window.pageYOffset

    if (scrollTop > sectionOffset - window.innerHeight / 2) {
      setDropdown(true)
    } else {
      setDropdown(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  })

  const activityIndex = menuItems.findIndex(
    (menuItem) => menuItem.name === 'Activities'
  )
  const destinationIndex = menuItems.findIndex(
    (menuItem) => menuItem.name === 'Destinations'
  )

  return (
    <section
      ref={(section) => section && setSectionOffset(section.offsetTop)}
      className="browse-block"
    >
      <div className="browse-destination column">
        <div className="dropdown">
          <span className="dropdown-toggle">BROWSE BY DESTINATION</span>
          <MenuDropDown
            menuItems={menuItems[destinationIndex].menuItems}
            className={dropdown ? 'down' : ''}
          />
        </div>
      </div>
      <div className="browse-adventures column">
        <div className="dropdown">
          <span className="dropdown-toggle">BROWSE BY ADVENTURES</span>
          <MenuDropDown
            menuItems={menuItems[activityIndex].menuItems}
            className={dropdown ? 'down' : ''}
          />
        </div>
      </div>
    </section>
  )
}
export default BrowserSection
