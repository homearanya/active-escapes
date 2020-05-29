import React, { useState } from 'react'

interface SearchFormProps {
  handleOpenSearch: () => void
  handleCloseSearch: () => void
}

export default ({ handleOpenSearch, handleCloseSearch }: SearchFormProps) => {
  const [formData, setFormData] = useState({
    destination: '',
    activity: '',
  })
  const handleSubmit = (e) => {
    e.preventDefault()
    alert(
      `You have chosen activity: ${formData.activity}, destination: ${formData.destination}`
    )
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
        <div className="search-wrap">
          <a onClick={handleCloseSearch} className="search-opener close">
            <span className="icon-cross"></span>
          </a>
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
                    <option value="drakensberg">Drakensberg</option>
                    <option value="ec-highlands">EC Highlands</option>
                    <option value="free-state">Free State</option>
                    <option value="kosi-bay">Kosi Bay</option>
                    <option value="kzn-interior">KZN Interior</option>
                    <option value="kzn-midlands">KZN Midlands</option>
                    <option value="western-cape">Western Cape</option>
                    <option value="wild-coast">Wild Coast</option>
                    <option value="southern-africa">Southern Africa</option>
                  </select>
                </div>
              </div>

              <div className="holder">
                <label htmlFor="select-activity">Holiday Type</label>
                <div className="select-holder">
                  <select
                    className="trip-select trip-select-v2 acitvity form-control"
                    name="activity"
                    id="select-activity"
                    onChange={handleActivityChange}
                    value={formData.activity}
                    required
                  >
                    <option value="">Choose an activity</option>
                    <option value="hiking-slackpacking">
                      Hiking / Slackpacking
                    </option>
                    <option value="mountain-biking">Mountain Biking</option>
                    <option value="horse-riding">Horse Riding</option>
                    <option value="nature">Nature</option>
                    <option value="family">Family</option>
                    <option value="groups">Groups</option>
                    <option value="rafting">Rafting</option>
                    <option value="running">Running</option>
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
        </div>
      </fieldset>
    </form>
  )
}
