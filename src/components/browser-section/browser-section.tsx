import React, { useState, useEffect } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import MenuDropDown from '../header/navigation/menu-dropdown'
import useMedia from 'use-media'

const BrowserSection = () => {
  const isMobile = useMedia({ maxWidth: 992 - 1 })
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
  const [showActivities, setShowActivities] = useState(false)
  const [showDestinations, setShowDestinations] = useState(false)
  const [activityDropdown, setActivityDropdown] = useState(false)
  const [destinationDropdown, setDestinationDropdown] = useState(false)
  const [activityDivOffset, setActivityDivOffset] = useState(0)
  const [destinationDivOffset, setDestinationDivOffset] = useState(0)

  const handleScroll = () => {
    const scrollTop = window.pageYOffset

    if (scrollTop > activityDivOffset - window.innerHeight / 2) {
      setActivityDropdown(true)
    } else {
      setActivityDropdown(false)
    }

    if (scrollTop > destinationDivOffset - window.innerHeight / 2) {
      setDestinationDropdown(true)
    } else {
      setDestinationDropdown(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  })

  const activityIndex = menuItems.findIndex(
    (menuItem) => menuItem.name === 'Activities',
  )
  const destinationIndex = menuItems.findIndex(
    (menuItem) => menuItem.name === 'Destinations',
  )

  return (
    <section className="browse-block">
      <div
        ref={(div) => div && setDestinationDivOffset(div.offsetTop)}
        className="browse-destination column"
      >
        <div
          className={`dropdown${isMobile && showDestinations ? ' open' : ''}`}
        >
          <span
            onClick={() =>
              setShowDestinations((showDestinations) => !showDestinations)
            }
            className="dropdown-toggle"
          >
            BROWSE BY DESTINATION
          </span>
          <MenuDropDown
            menuItems={menuItems[destinationIndex].menuItems}
            className={isMobile ? '' : destinationDropdown ? 'down' : ''}
          />
        </div>
      </div>
      <div
        ref={(div) => div && setActivityDivOffset(div.offsetTop)}
        className="browse-adventures column"
      >
        <div className={`dropdown${isMobile && showActivities ? ' open' : ''}`}>
          <span
            onClick={() =>
              setShowActivities((showActivities) => !showActivities)
            }
            className="dropdown-toggle"
          >
            BROWSE BY ADVENTURES
          </span>
          <MenuDropDown
            menuItems={menuItems[activityIndex].menuItems}
            className={isMobile ? 'down' : activityDropdown ? 'down' : ''}
          />
        </div>
      </div>
    </section>
  )
}
export default BrowserSection
