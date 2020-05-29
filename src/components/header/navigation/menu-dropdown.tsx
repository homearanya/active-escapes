import React from 'react'
import UniversalLink from '../../universal-link'
import { MenuItems } from './menu-item'

interface MenuDropdownProps {
  menuItems: MenuItems
  className?: string
  props?: React.HTMLAttributes<HTMLAnchorElement | HTMLSpanElement>
}

const MenuDropdown = ({
  menuItems,
  className = '',
  ...props
}: MenuDropdownProps) => {
  return (
    <div
      className={`dropdown-menu${className ? ` ${className}` : ''}`}
      {...props}
    >
      <ul>
        {menuItems.map(({ name, link }) => (
          <li key={name}>
            <UniversalLink href={link}>{name}</UniversalLink>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MenuDropdown
