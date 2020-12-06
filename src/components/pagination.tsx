import React from 'react'

const Pagination = () => (
  <nav className="pagination-wrap bg-gray">
    <div className="btn-prev">
      <a href="#" aria-label="Previous">
        <span className="icon-angle-right"></span>
      </a>
    </div>
    <ul className="pagination">
      <li>
        <a href="#">1</a>
      </li>
      <li>
        <a href="#">2</a>
      </li>
      <li>
        <a href="#">3</a>
      </li>
      <li className="active">
        <a href="#">4</a>
      </li>
      <li>
        <a href="#">5</a>
      </li>
      <li>...</li>
      <li>
        <a href="#">7</a>
      </li>
    </ul>
    <div className="btn-next">
      <a href="#" aria-label="Previous">
        <span className="icon-angle-right"></span>
      </a>
    </div>
  </nav>
)

export default Pagination
