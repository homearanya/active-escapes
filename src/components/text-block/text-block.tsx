import React, { useState } from 'react'
import { Transition } from 'react-transition-group'

import Modal from '../modal'

const duration = 300

const defaultStyle = {
  transition: `opacity, transform ${duration}ms ease-in-out`,
  opacity: 0,
  transform: 'scale(0)',
}

export interface TextBlockData {
  iconClass: string
  heading: string
  text: string[]
  extraText: string[]
}
interface TextBlockProps {
  data: TextBlockData
}
const TextBlock = ({
  data: { iconClass, heading, text, extraText },
}: TextBlockProps) => {
  const [openModal, setOpenModal] = useState(false)

  const transitionStyles = {
    entering: { opacity: 1, transform: 'scale(1)' },
    entered: { opacity: 1, transform: 'scale(1)' },
    exiting: { opacity: 0, transform: 'scale(0)' },
    exited: { opacity: 0, transform: 'scale(0)' },
  }
  return (
    <>
      <div className="col-sm-6 col-md-3 article col-about-us">
        <div className="img-wrap1">
          <span className="ico">
            <span className={iconClass} />
          </span>
        </div>
        <div className="description">
          <h3>{heading}</h3>
          {text.map((paragraph, i) => (
            <p
              key={i}
              className={i === text.length - 1 ? 'last' : undefined}
              dangerouslySetInnerHTML={{ __html: paragraph }}
            />
          ))}
          {extraText && extraText.length > 0 ? (
            <div
              className="btn btn-default read-more"
              onClick={() => setOpenModal(true)}
            >
              Read more
            </div>
          ) : null}
        </div>
      </div>
      <Transition in={openModal} timeout={duration}>
        {(state: 'entering' | 'entered' | 'exiting' | 'exited') => {
          return (
            <Modal
              open={openModal}
              closeHandler={() => setOpenModal(false)}
              modalTitle={heading}
              style={{
                ...defaultStyle,
                ...transitionStyles[state],
              }}
            >
              <>
                {extraText && extraText.length > 0
                  ? extraText.map((paragraph, i) => (
                      <p
                        key={i}
                        dangerouslySetInnerHTML={{ __html: paragraph }}
                      />
                    ))
                  : null}
              </>
            </Modal>
          )
        }}
      </Transition>
    </>
  )
}

export default TextBlock
