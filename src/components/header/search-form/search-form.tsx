import React, { useState } from 'react'
import { navigate, graphql, useStaticQuery } from 'gatsby'

import ModalDark from '../../modal-dark'

interface SearchFormProps {
  handleOpenSearch: () => void
  handleCloseSearch: () => void
  open: boolean
}

const SearchForm = ({
  open,
  handleOpenSearch,
  handleCloseSearch,
}: SearchFormProps) => {
  const { activities, destinations } = useStaticQuery(graphql`
    query SearchForm {
      activities: allMarkdownRemark(
        filter: { frontmatter: { templateKey: { eq: "activity-page" } } }
        sort: { order: ASC, fields: [frontmatter___order] }
      ) {
        edges {
          node {
            id
            frontmatter {
              activityName
              code
            }
          }
        }
      }
      destinations: allMarkdownRemark(
        filter: { frontmatter: { templateKey: { eq: "destination-page" } } }
        sort: { order: ASC, fields: [frontmatter___order] }
      ) {
        edges {
          node {
            id
            frontmatter {
              destinationName
              code
            }
          }
        }
      }
    }
  `)

  const [formData, setFormData] = useState({
    destination: '',
    activity: '',
  })
  const handleSubmit = (e) => {
    e.preventDefault()
    navigate(`/destination/${formData.destination}/`, {
      state: { activity: formData.activity },
    })
  }

  const handleDestinationChange = (event) => {
    event.persist()
    setFormData((formData) => ({
      ...formData,
      destination: event.target.value,
    }))
  }
  const handleActivityChange = (event) => {
    event.persist()
    setFormData((formData) => ({ ...formData, activity: event.target.value }))
  }
  return (
    <form className="search-form" action="#" onSubmit={handleSubmit}>
      <fieldset>
        <a
          onClick={handleOpenSearch}
          className="search-opener hidden-md hidden-lg"
        >
          <span className="icon-search"></span>
        </a>
        <ModalDark closeHandler={handleCloseSearch} open={open}>
          <div className="trip-form trip-form-v2 trip-search-main">
            <div className="trip-form-wrap">
              <div className="holder">
                <label htmlFor="select-destination">Destination</label>
                <div className="select-holder">
                  <select
                    className="trip-select trip-select-v2 destination form-control"
                    name="destination"
                    id="select-destination"
                    onChange={handleDestinationChange}
                    value={formData.destination}
                    required
                  >
                    <option value="">Choose a destination</option>
                    {destinations.edges.map(({ node }) => (
                      <option key={node.id} value={node.frontmatter.code}>
                        {node.frontmatter.destinationName}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="holder">
                <label htmlFor="select-activity">Holiday Type</label>
                <div className="select-holder">
                  <select
                    className="trip-select trip-select-v2 activity form-control"
                    name="activity"
                    id="select-activity"
                    onChange={handleActivityChange}
                    value={formData.activity}
                    required
                  >
                    <option value="">Choose an activity</option>
                    {activities.edges.map(({ node }) => (
                      <option key={node.id} value={node.frontmatter.code}>
                        {node.frontmatter.activityName}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="holder">
                <button className="btn btn-trip btn-trip-v2" type="submit">
                  Find Tours
                </button>
              </div>
            </div>
          </div>
        </ModalDark>
      </fieldset>
    </form>
  )
}
export default SearchForm
