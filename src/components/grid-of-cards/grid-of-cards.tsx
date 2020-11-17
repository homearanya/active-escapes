import React from 'react'
import Card, { CardProps } from '../card'

export interface Item extends CardProps {
  id: string
}

interface GridOfCardsProps {
  items: Item[]
}

const GridOfCards = ({ items }: GridOfCardsProps) => {
  return (
    <div className="grid-of-cards drop-wrap">
      <div className="drop-holder">
        <div className="row menu-mega-row">
          {items.map(({ id, ...rest }) => (
            <Card key={id} {...rest} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default GridOfCards
