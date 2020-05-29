import React from 'react'

interface BurgerProps {
  handleClick: () => void
}
const Burger = ({ handleClick }: BurgerProps) => {
  return (
    <div className="navbar-header">
      <button
        type="button"
        className="navbar-toggle nav-opener"
        data-toggle="collapse"
        data-target="#nav"
        onClick={handleClick}
      >
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
    </div>
  )
}

export default Burger
