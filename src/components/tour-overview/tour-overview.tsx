import React from 'react'

export interface TourOverviewData {
  description: string[]
}

interface TourOverviewProps {
  data: TourOverviewData
}

const TourOverview = ({ data: { description } }: TourOverviewProps) => (
  <div className="row">
    <div className="col-md-6">
      <strong className="header-box">
        All about the classic Annapurna Circuit Trekking
      </strong>
      <div className="detail">
        {description.map((paragraph, i) => (
          <p>{paragraph}</p>
        ))}
      </div>
    </div>
    <div className="col-md-6">
      <strong className="header-box">
        The tour package inclusions and exclusions at a glance
      </strong>
      <div className="text-box">
        <div className="holder">
          <strong className="title">Whats included in this tour</strong>
          <span className="sub-title">
            Items that are covered in the cost of tour price.
          </span>
          <p>
            This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel
            velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum
            auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.{' '}
          </p>
          <ul className="content-list tick-list">
            <li>All breakfasts, lunches and dinners &amp; dining</li>
            <li>All accommodation including tea houses en route</li>
            <li>All transportation including taxis and coaches</li>
            <li>Flights from Heathrow if booked inc. of flight</li>
            <li>Tour and trekking guide for entire journey</li>
          </ul>
        </div>
      </div>
      <div className="text-box not-included">
        <div className="holder">
          <strong className="title">Whats not included in this tour</strong>
          <span className="sub-title">
            Items that are covered in the cost of tour price.
          </span>
          <p>
            This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel
            velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum
            auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.{' '}
          </p>
          <ul className="content-list cross-list">
            <li>Travel insurance and other emergencies</li>
            <li>Visa fees and entry clearing fees</li>
            <li>Single room accommodations</li>
            <li>Liquors, beeers and bootled beverages</li>
            <li>Photography ccessories like cameras etc.</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
)

export default TourOverview
