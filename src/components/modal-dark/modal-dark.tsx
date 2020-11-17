import React, { useRef, useEffect } from 'react'
import { Transition } from 'react-transition-group'

import useOnClickOutside from '../../utils/hooks/useOnClickOutside'

const duration = 300

const defaultStyle = {
  transition: `opacity, transform ${duration}ms ease-in-out`,
  opacity: 0,
  transform: 'scale(0)',
}
const transitionStyles = {
  entering: { opacity: 1, transform: 'scale(1)' },
  entered: { opacity: 1, transform: 'scale(1)' },
  exiting: { opacity: 0, transform: 'scale(0)' },
  exited: { opacity: 0, transform: 'scale(0)' },
}

interface ModalProps {
  modalTitle?: string
  closeHandler: () => void
  children: React.ReactNode
  open: boolean
  style?: React.CSSProperties
  className?: string
}

const ModalDark = ({
  children,
  closeHandler,
  modalTitle = '',
  open,
  style = {},
  className = '',
}: ModalProps) => {
  const outsideRef = useRef(null)
  useOnClickOutside(outsideRef, () => open && closeHandler())

  useEffect(() => {
    // Update the document title using the browser API
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  })
  return (
    <div
      className={`modal-dark${open ? ' search-active' : ''}${
        className ? ` ${className}` : ''
      }`}
    >
      <Transition in={open} timeout={duration} mountOnEnter>
        {(state: 'entering' | 'entered' | 'exiting' | 'exited') => {
          return (
            <div
              className="search-wrap"
              style={{
                ...style,
                ...defaultStyle,
                ...transitionStyles[state],
              }}
            >
              <a onClick={closeHandler} className="search-opener close">
                <span className="icon-cross"></span>
              </a>
              <div ref={outsideRef} className="modal-dark__container">
                {modalTitle && (
                  <h2 className="modal-dark__heading">{modalTitle}</h2>
                )}
                {children}
              </div>
            </div>
          )
        }}
      </Transition>
    </div>
  )
}

export default ModalDark
