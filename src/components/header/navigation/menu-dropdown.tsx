import React from 'react'
import UniversalLink from '../../universal-link'
import { MenuItems } from './menu-item'

interface MenuDropdownProps {
  menuItems: MenuItems
  closeMenu: () => void
  className?: string
  props?: React.HTMLAttributes<HTMLAnchorElement | HTMLSpanElement>
}

const MenuDropdown = ({
  menuItems,
  closeMenu,
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
            <UniversalLink href={link} onClick={closeMenu}>
              {name}
            </UniversalLink>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MenuDropdown
