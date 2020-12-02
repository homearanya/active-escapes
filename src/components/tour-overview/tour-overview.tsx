import React from 'react'

export interface TourOverviewData {
  heading: string
  description: string[]
  mapUrl?: string
}

interface TourOverviewProps {
  data: TourOverviewData
}

const TourOverview = ({
  data: { heading, description, mapUrl },
}: TourOverviewProps) => (
  <div className="row tour">
    <div className={`${mapUrl ? 'col-md-6' : 'col-md-offset-2 col-md-8'}`}>
      {heading ? <strong className="header-box">{heading}</strong> : null}
      <div className="detail">
        {description.map((paragraph, i) => (
          <p key={i} dangerouslySetInnerHTML={{ __html: paragraph }} />
        ))}
      </div>
    </div>
    {mapUrl && (
      <div className="col-md-6">
        <div className="map-holder">
          <iframe src={mapUrl} allowFullScreen />
        </div>
      </div>
    )}
  </div>
)

export default TourOverview
