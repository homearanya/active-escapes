import React from 'react'

export interface TourOverviewData {
  heading: string
  description: string[]
}

interface TourOverviewProps {
  data: TourOverviewData
}

const TourOverview = ({
  data: { heading, description },
}: TourOverviewProps) => (
  <div className="row">
    <div className="col-md-offset-2 col-md-8">
      {heading ? <strong className="header-box">{heading}</strong> : null}
      <div className="detail">
        {description.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
    </div>
  </div>
)

export default TourOverview
