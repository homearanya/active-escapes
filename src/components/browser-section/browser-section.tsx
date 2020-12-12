import React, { useRef, useEffect, useReducer } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import MenuDropDown from '../header/navigation/menu-dropdown'
import useMedia from 'use-media'

interface State {
  showActivities: boolean
  showDestinations: boolean
  activityDropdown: boolean
  destinationDropdown: boolean
}

interface Action {
  type:
    | 'showActivity'
    | 'showDestination'
    | 'activityDropdown'
    | 'destinationDropdown'
  payload: boolean
}

const reducer = (state: State, action: Action) => {
  const { type, payload } = action

  switch (type) {
    case 'showActivity':
      return { ...state, showActivities: payload }
    case 'showDestination':
      return { ...state, showDestinations: payload }
    case 'activityDropdown':
      return { ...state, activityDropdown: payload }
    case 'destinationDropdown':
      return { ...state, destinationDropdown: payload }
    default:
      return state
  }
}

const initialState: State = {
  showActivities: false,
  showDestinations: false,
  activityDropdown: false,
  destinationDropdown: false,
}

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

  const activityRef = useRef<HTMLDivElement | null>(null)
  const destinationRef = useRef<HTMLDivElement | null>(null)

  const [state, dispatch] = useReducer(reducer, initialState)
  const {
    showActivities,
    showDestinations,
    activityDropdown,
    destinationDropdown,
  } = state

  const handleScroll = () => {
    const scrollTop = window.pageYOffset

    let activityDivOffset = 0
    if (activityRef && activityRef.current) {
      activityDivOffset = activityRef.current.offsetTop
    }

    let destinationDivOffset = 0
    if (destinationRef && destinationRef.current) {
      destinationDivOffset = destinationRef.current.offsetTop
    }

    if (scrollTop > activityDivOffset - window.innerHeight / 2) {
      dispatch({ type: 'activityDropdown', payload: true })
    } else {
      dispatch({ type: 'activityDropdown', payload: false })
    }

    if (scrollTop > destinationDivOffset - window.innerHeight / 2) {
      dispatch({ type: 'destinationDropdown', payload: true })
    } else {
      dispatch({ type: 'destinationDropdown', payload: false })
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

  let destinationDropdownClass = ''
  if (isMobile) {
    if (showDestinations) {
      destinationDropdownClass = ' open'
    } else {
      destinationDropdownClass = ' closed'
      // destinationDropdownClass = ''
    }
  } else {
    destinationDropdownClass = ''
  }
  let activityDropdownClass = ''
  if (isMobile) {
    if (showActivities) {
      activityDropdownClass = ' open'
    } else {
      activityDropdownClass = ' closed'
      // activityDropdownClass = ''
    }
  } else {
    activityDropdownClass = ''
  }

  return (
    <section className="browse-block">
      <div ref={destinationRef} className="browse-destination column">
        <div className={`dropdown${destinationDropdownClass}`}>
          <span
            onClick={
              isMobile
                ? () =>
                    dispatch({
                      type: 'showDestination',
                      payload: !showDestinations,
                    })
                : undefined
            }
            className="dropdown-toggle"
          >
            BROWSE BY DESTINATION
          </span>
          <MenuDropDown
            menuItems={menuItems[destinationIndex].menuItems}
            className={isMobile ? '' : destinationDropdown ? 'down' : ''}
            closeMenu={() =>
              dispatch({ type: 'showDestination', payload: false })
            }
          />
        </div>
      </div>
      <div ref={activityRef} className="browse-adventures column">
        <div className={`dropdown${activityDropdownClass}`}>
          <span
            onClick={
              isMobile
                ? () =>
                    dispatch({ type: 'showActivity', payload: !showActivities })
                : undefined
            }
            className="dropdown-toggle"
          >
            BROWSE BY ADVENTURES
          </span>
          <MenuDropDown
            menuItems={menuItems[activityIndex].menuItems}
            className={isMobile ? 'down' : activityDropdown ? 'down' : ''}
            closeMenu={() => dispatch({ type: 'showActivity', payload: false })}
          />
        </div>
      </div>
    </section>
  )
}
export default BrowserSection
