import React from 'react'
import { animateScroll } from 'react-scroll'

interface ScrollToTopProps {
  show: boolean
}

const ScrollToTop = ({ show = false }: ScrollToTopProps) => (
  <div className="scroll-holder text-center">
    <span
      id="scroll-to-top"
      style={show ? { display: 'block' } : { display: 'none' }}
      onClick={() => animateScroll.scrollToTop()}
    >
      <i className="icon-arrow-down"></i>
    </span>
  </div>
)

export default ScrollToTop
