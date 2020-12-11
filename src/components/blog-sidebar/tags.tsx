import React, { useState, useRef } from 'react'
import { Link } from 'gatsby'
import useResizeObserver from 'use-resize-observer/polyfilled'

export interface TagsProps {
  tags?: {
    [key: string]: {
      count: number
      slug: string
    }
  }
}

const Tags = ({ tags = {} }: TagsProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const { height } = useResizeObserver({
    ref,
  })
  const [open, setOpen] = useState(false)
  return (
    <div className="tags accordion-group">
      <div className="panel-heading">
        <h4 className="panel-title">
          <a
            className={`${open ? '' : 'collapsed'}`}
            onClick={() => setOpen(!open)}
          >
            TAGS
          </a>
        </h4>
      </div>
      <div
        id="collapse1"
        className={`panel-collapse collapse in`}
        role="tabpanel"
        style={open && height ? { height: `${height + 60}px` } : { height: 0 }}
      >
        <div ref={ref} className="panel-body">
          <ul className="side-list category-side-list hovered-list">
            {Object.keys(tags).map((tag, index) => (
              <li key={index}>
                <Link to={tags[tag].slug}>
                  <span className="text">{tag}</span>
                  <span className="count">{tags[tag].count}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Tags
