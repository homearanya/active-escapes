import React from 'react'

export interface TourPriceData {
  table: {
    pax: string
    price: string
  }[]
  includes?: string[]
  notIncludes?: string[]
  emailAddress: string
  emailSubject: string
}

interface TourPriceProps {
  data: TourPriceData
}

const TourPrice = ({
  data: { table, includes, notIncludes, emailAddress, emailSubject },
}: TourPriceProps) => {
  return (
    <>
      <div className="row">
        <div className="col-md-6">
          <div className="table-container">
            <div className="table-responsive">
              <table className="table table-striped price">
                <thead>
                  <tr>
                    <th>
                      <strong className="date-text">PAX</strong>
                    </th>

                    <th>
                      <strong className="date-text">Price (PP)</strong>
                    </th>

                    <th>&nbsp;</th>
                  </tr>
                </thead>
                <tbody>
                  {table.map(({ pax, price }, i) => (
                    <tr>
                      <td>
                        <div className="cell">
                          <div className="middle">{pax}</div>
                        </div>
                      </td>
                      <td>
                        <div className="cell">
                          <div className="middle">{price}</div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {includes || notIncludes ? (
          <div className="col-md-6">
            {includes ? (
              <div className="text-box">
                <div className="holder">
                  <strong className="title">Whats included in this tour</strong>
                  <ul className="content-list tick-list">
                    {includes.map((include, i) => (
                      <li
                        key={i}
                        dangerouslySetInnerHTML={{ __html: include }}
                      />
                    ))}
                  </ul>
                </div>
              </div>
            ) : null}
            {notIncludes ? (
              <div className="text-box not-included">
                <div className="holder">
                  <strong className="title">
                    Whats not included in this tour
                  </strong>
                  <ul className="content-list cross-list">
                    {notIncludes.map((include, i) => (
                      <li
                        key={i}
                        dangerouslySetInnerHTML={{ __html: include }}
                      />
                    ))}
                  </ul>
                </div>
              </div>
            ) : null}
          </div>
        ) : null}
      </div>
      <div className="text-center text-uppercase">
        <div className="btn-holder">
          <a
            href={`mailto:${emailAddress}?subject=${emailSubject}`}
            className="btn btn-lg btn-info"
          >
            BOOK NOW
          </a>
        </div>
      </div>
    </>
  )
}

export default TourPrice
