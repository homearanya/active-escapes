import React, { useRef } from 'react'

import useResizeObserver from 'use-resize-observer/polyfilled'

export interface DayBlockData {
  heading: string
  subHeading: string
  description: string[]
}

interface DayBlockProps {
  data: DayBlockData
  active?: boolean
}

const DayBlock = ({
  data: { heading, subHeading, description },
  active = false,
}: DayBlockProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const { height } = useResizeObserver({
    ref,
  })
  return (
    <>
      <div className="day-heading">
        <strong className="title">{heading}</strong>
        <span>{subHeading}</span>
      </div>
      <div
        className="slide"
        style={
          active && height ? { height: `${height + 30}px` } : { height: 0 }
        }
      >
        <div ref={ref} className="slide-holder">
          {description
            ? description.map((paragraph, j) => (
                <p key={j} dangerouslySetInnerHTML={{ __html: paragraph }} />
              ))
            : null}
        </div>
      </div>
    </>
  )
}

export default DayBlock
