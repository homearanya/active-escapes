import React, { useState } from 'react'
import { Link } from 'gatsby'

export interface TagsProps {
  tags?: {
    [key: string]: {
      count: number
      slug: string
    }
  }
}

const Tags = ({ tags = {} }: TagsProps) => {
  const [open, setOpen] = useState(true)
  return (
    <div className="accordion-group">
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
        className={`panel-collapse collapse${open ? ' in' : ''}`}
        role="tabpanel"
      >
        <div className="panel-body">
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
