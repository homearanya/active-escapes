import React, { useRef } from 'react'

import useResizeObserver from 'use-resize-observer/polyfilled'

export interface FAQBlockData {
  question: string
  answer: string[]
}

interface FAQBlockProps {
  data: FAQBlockData
  active?: boolean
}

const FAQBlock = ({
  data: { question, answer },
  active = false,
}: FAQBlockProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const { height } = useResizeObserver({
    ref,
  })
  return (
    <>
      <div className="faq-heading">
        <strong className="title">{question}</strong>
      </div>
      <div
        className="slide"
        style={
          active && height ? { height: `${height + 30}px` } : { height: 0 }
        }
      >
        <div ref={ref} className="slide-holder faq">
          {answer.map((paragraph, j) => (
            <p key={j} dangerouslySetInnerHTML={{ __html: paragraph }} />
          ))}
        </div>
      </div>
    </>
  )
}

export default FAQBlock
