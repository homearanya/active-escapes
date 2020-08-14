import React, { useMemo } from 'react'

const ContactForm = () => (
  <form className="subscribe-form">
    <fieldset>
      <div className="form-group">
        <div className="seven-ten">
          <label htmlFor="full_name">Full Name</label>
          <input
            id="full_name"
            name="full_name"
            type="text"
            className="form-control"
            required
          />
        </div>
        <div className="three-ten">
          <label htmlFor="age">Your Age</label>
          <input id="age" name="age" type="number" className="form-control" />
        </div>
      </div>
      <div className="form-group">
        <div className="seven-ten">
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            className="form-control"
            required
          />
        </div>
        <div className="three-ten">
          <label htmlFor="contact_number">Contact Number</label>
          <input
            id="contact_number"
            name="contact_number"
            type="tel"
            className="form-control"
            required
          />
        </div>
      </div>
      <label>Potential Group Size</label>
      <div className="form-group">
        <div className="one-three">
          <label htmlFor="group_size">Total group size</label>
          <input type="number" className="form-control" />
        </div>
        <div className="one-three">
          <label>No Adults</label>
          <input type="number" className="form-control" />
        </div>
        <div className="one-three">
          <label>No Children (&lt;12yrs)</label>
          <input type="number" className="form-control" />
        </div>
      </div>
      <div className="form-group">
        <div className="one-one">
          <label>
            Is there a Specific Tour or Destination that you are interested in?
          </label>
          <input type="text" className="form-control" />
        </div>
      </div>
      <label>What Dates are you considering?</label>
      <div className="form-group">
        <div className="one-three">
          <label>Arrival Date</label>
          <input type="date" className="form-control" />
        </div>
        <div className="one-three">
          <label>No of Days</label>
          <input type="number" className="form-control" />
        </div>
        <div className="one-three">
          <label>Alternative Start Date</label>
          <input type="date" className="form-control" />
        </div>
      </div>
      <label>How did you hear about us?</label>
      <div className="form-group">
        <select className="form-control">
          <option value="">Choose an Option</option>
          <option value="word-of-mouth">Word of Mouth</option>
          <option value="website-referral">Website Referral</option>
          <option value="internet-search">Internet Search</option>
          <option value="social-media">Social Media</option>
          <option value="newsletter-email">Newsletter or Email</option>
          <option value="other">Other – please tell us:</option>
        </select>
      </div>
      <div className="btn-holder">
        <button type="submit" className="btn btn-md btn-default">
          SUBSCRIBE
        </button>
      </div>
    </fieldset>
  </form>
)
export default ContactForm
