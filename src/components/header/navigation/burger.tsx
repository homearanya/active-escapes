import React from 'react'

const Burger = () => {
  return (
    <div className="navbar-header">
      <button
        type="button"
        className="navbar-toggle nav-opener"
        data-toggle="collapse"
        data-target="#nav"
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
