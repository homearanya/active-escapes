import React, { useState } from 'react'
import UniversalLink from '../universal-link'
import useMedia from 'use-media'

type MenuItem = {
  id: string
  iconClassName?: string
  link: string
  name: string
}

interface FooterUnitProps {
  heading: string
  menuItems: MenuItem[]
  last?: boolean
}

const FooterUnit = ({ heading, menuItems, last = false }: FooterUnitProps) => {
  const isMobile = useMedia({ maxWidth: 768 - 1 })
  const [active, setActive] = useState(last)
  return (
    <nav
      className={`col-sm-4 col-lg-2 footer-nav${active ? ' active' : ''}${
        last ? ' last' : ''
      }`}
    >
      <h3 onClick={() => isMobile && setActive((active) => !active)}>
        {heading}
      </h3>
      <ul
        className="slide address-block"
        style={
          isMobile
            ? active
              ? {}
              : { position: 'absolute', top: '-9999px', left: '-9999px' }
            : {}
        }
      >
        {menuItems.map(({ id, iconClassName, link, name }) => (
          <li key={id} className="wrap-text">
            {iconClassName ? <span className={iconClassName}></span> : null}
            <UniversalLink href={link}>{name}</UniversalLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
export default FooterUnit
