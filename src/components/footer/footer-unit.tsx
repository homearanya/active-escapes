import React from 'react'
import UniversalLink from '../universal-link'

type MenuItem = {
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
  return (
    <nav className={`col-sm-4 col-lg-2 footer-nav ${last ? 'last' : ''}`}>
      <h3>{heading}</h3>
      <ul className="slide address-block">
        {menuItems.map(({ iconClassName, link, name }) => (
          <li key={name} className="wrap-text">
            {iconClassName ? <span className={iconClassName}></span> : null}
            <UniversalLink href={link}>{name}</UniversalLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
export default FooterUnit
