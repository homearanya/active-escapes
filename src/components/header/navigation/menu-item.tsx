import React from 'react'
import UniversalLink from '../../universal-link'
import MenuDropdown from './menu-dropdown'

type MenuItem = {
  name: string
  link: string
}

export type MenuItems = MenuItem[]

interface MenuItemProps {
  name: string
  link: string
  menuItems: MenuItems
  props?: React.HTMLAttributes<HTMLAnchorElement | HTMLSpanElement>
}

const MenuItem = ({ name, link, menuItems, ...props }: MenuItemProps) => (
  <li className={!!menuItems ? 'dropdown' : ''}>
    <UniversalLink
      activeClassName="active"
      href={link}
      className={`menu-item-header ${!!menuItems ? 'dropdown-toggle' : ''}`}
      data-toggle={`${!!menuItems ? 'dropdown' : undefined}`}
      {...props}
    >
      {name} {!!menuItems ? <b className="icon-angle-down"></b> : null}
    </UniversalLink>
    {!!menuItems ? <MenuDropdown menuItems={menuItems} /> : null}
  </li>
)

export default MenuItem
