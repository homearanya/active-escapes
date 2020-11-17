import React, { useState } from 'react'
import Loader from 'react-loader-spinner'
import axios from 'axios'

const resetFields = () => ({
  first_name: '',
  last_name: '',
  age: '',
  email: '',
  phone: '',
  first_nameabcdefgjk: '',
  last_nameabcdefgjk: '',
  ageabcdefgjk: '',
  emailabcdefgjk: '',
  phoneabcdefgjk: '',
  group_sizeabcdefgjk: '',
  no_adultsabcdefgjk: '',
  no_childrenabcdefgjk: '',
  preferred_toursabcdefgjk: '',
  arrival_dateabcdefgjk: '',
  no_daysabcdefgjk: '',
  alternative_start_dateabcdefgjk: '',
  referral_sourceabcdefgjk: '',
  newsletterabcdefgjk: true,
})

const ContactForm = () => {
  const [submitting, setSubmitting] = useState(false)
  const [message, setMessage] = useState('')
  const [mailchimpMessage, setMailchimpMessage] = useState('')
  const [formData, setFormData] = useState(resetFields())
  const {
    first_name,
    last_name,
    age,
    email,
    phone,
    first_nameabcdefgjk,
    last_nameabcdefgjk,
    ageabcdefgjk,
    emailabcdefgjk,
    phoneabcdefgjk,
    group_sizeabcdefgjk,
    no_adultsabcdefgjk,
    no_childrenabcdefgjk,
    preferred_toursabcdefgjk,
    arrival_dateabcdefgjk,
    no_daysabcdefgjk,
    alternative_start_dateabcdefgjk,
    referral_sourceabcdefgjk,
    newsletterabcdefgjk,
  } = formData

  const handleSubmit = (e) => {
    setSubmitting(true)
    e.preventDefault()
    setMessage('')
    setMailchimpMessage('')
    // check honeypot fields
    if (first_name || last_name || age || email || phone) {
      setSubmitting(false)
      return
    }

    axios({
      method: 'post',
      url: `http://active-escapes.co.za/contact.php`,
      headers: { 'content-type': 'application/json' },
      data: {
        ...formData,
        newsletterabcdefgjk: newsletterabcdefgjk ? 'Yes' : 'No',
      },
    })
      .then((result) => {
        setMessage(result.data)
        setFormData(resetFields())
        setSubmitting(false)
        if (!newsletterabcdefgjk) return
        axios({
          method: 'post',
          url: `http://active-escapes.co.za/mailchimp.php`,
          headers: { 'content-type': 'application/json' },
          data: {
            ...formData,
          },
        })
          .then((result) => {
            setMailchimpMessage(result.data)
          })
          .catch((error) => {
            setMailchimpMessage(error.message)
          })
      })
      .catch((error) => {
        setMessage(error.message)
        setSubmitting(false)
      })
  }
  const handleChange = (e) => {
    setMessage('')
    setMailchimpMessage('')
    e.persist()
    switch (e.target.name) {
      case 'first_name':
        setFormData((prevFormData) => ({
          ...prevFormData,
          first_name: e.target.value,
        }))
        break
      case 'last_name':
        setFormData((prevFormData) => ({
          ...prevFormData,
          last_name: e.target.value,
        }))
        break
      case 'age':
        setFormData((prevFormData) => ({
          ...prevFormData,
          age: e.target.value * 1 > 0 ? e.target.value : '0',
        }))
        break
      case 'email':
        setFormData((prevFormData) => ({
          ...prevFormData,
          email: e.target.value,
        }))
        break
      case 'phone':
        setFormData((prevFormData) => ({
          ...prevFormData,
          phone: e.target.value,
        }))
        break
      case 'first_nameabcdefgjk':
        setFormData((prevFormData) => ({
          ...prevFormData,
          first_nameabcdefgjk: e.target.value,
        }))
        break
      case 'last_nameabcdefgjk':
        setFormData((prevFormData) => ({
          ...prevFormData,
          last_nameabcdefgjk: e.target.value,
        }))
        break
      case 'ageabcdefgjk':
        setFormData((prevFormData) => ({
          ...prevFormData,
          ageabcdefgjk: e.target.value * 1 > 0 ? e.target.value : '0',
        }))
        break
      case 'emailabcdefgjk':
        setFormData((prevFormData) => ({
          ...prevFormData,
          emailabcdefgjk: e.target.value,
        }))
        break
      case 'phoneabcdefgjk':
        setFormData((prevFormData) => ({
          ...prevFormData,
          phoneabcdefgjk: e.target.value,
        }))
        break
      case 'group_sizeabcdefgjk':
        setFormData((prevFormData) => ({
          ...prevFormData,
          group_sizeabcdefgjk: e.target.value * 1 > 0 ? e.target.value : '0',
        }))
        break
      case 'no_adultsabcdefgjk':
        setFormData((prevFormData) => ({
          ...prevFormData,
          no_adultsabcdefgjk: e.target.value * 1 > 0 ? e.target.value : '0',
        }))
        break
      case 'no_childrenabcdefgjk':
        setFormData((prevFormData) => ({
          ...prevFormData,
          no_childrenabcdefgjk: e.target.value * 1 > 0 ? e.target.value : '0',
        }))
        break
      case 'preferred_toursabcdefgjk':
        setFormData((prevFormData) => ({
          ...prevFormData,
          preferred_toursabcdefgjk: e.target.value,
        }))
        break
      case 'arrival_dateabcdefgjk':
        setFormData((prevFormData) => ({
          ...prevFormData,
          arrival_dateabcdefgjk: e.target.value,
        }))
        break
      case 'no_daysabcdefgjk':
        setFormData((prevFormData) => ({
          ...prevFormData,
          no_daysabcdefgjk: e.target.value * 1 > 0 ? e.target.value : '0',
        }))
        break
      case 'alternative_start_dateabcdefgjk':
        setFormData((prevFormData) => ({
          ...prevFormData,
          alternative_start_dateabcdefgjk: e.target.value,
        }))
        break
      case 'referral_sourceabcdefgjk':
        setFormData((prevFormData) => ({
          ...prevFormData,
          referral_sourceabcdefgjk: e.target.value,
        }))
        break
      case 'newsletterabcdefgjk':
        setFormData((prevFormData) => ({
          ...prevFormData,
          newsletterabcdefgjk: e.target.checked,
        }))
        break
      default:
        console.log('Wrong Case in Switch HandleChange')
    }
  }

  return (
    <form className="subscribe-form" onSubmit={handleSubmit}>
      {/* honeypot fields */}
      <div className="honeypot">
        <input
          autoComplete="new-password"
          name="first_name"
          type="text"
          onChange={handleChange}
          value={first_name}
        />
        <input
          autoComplete="new-password"
          name="last_name"
          type="text"
          onChange={handleChange}
          value={last_name}
        />
        <input
          autoComplete="new-password"
          name="age"
          type="number"
          onChange={handleChange}
          value={age}
        />
        <input
          autoComplete="new-password"
          name="email"
          type="email"
          onChange={handleChange}
          value={email}
        />
        <input
          autoComplete="new-password"
          name="phone"
          type="tel"
          onChange={handleChange}
          value={phone}
        />
      </div>
      {/* real fields */}
      <fieldset>
        <div className="form-group">
          <div className="four-ten">
            <label htmlFor="first_name">First Name</label>
            <input
              id="first_name"
              name="first_nameabcdefgjk"
              type="text"
              className="form-control"
              onChange={handleChange}
              value={first_nameabcdefgjk}
              required
            />
          </div>
          <div className="four-ten">
            <label htmlFor="last_name">Last Name</label>
            <input
              id="last_name"
              name="last_nameabcdefgjk"
              type="text"
              className="form-control"
              onChange={handleChange}
              value={last_nameabcdefgjk}
              required
            />
          </div>
          <div className="two-ten">
            <label htmlFor="age">Your Age</label>
            <input
              id="age"
              name="ageabcdefgjk"
              type="number"
              className="form-control"
              onChange={handleChange}
              value={ageabcdefgjk}
            />
          </div>
        </div>
        <div className="form-group">
          <div className="seven-ten">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              name="emailabcdefgjk"
              type="email"
              className="form-control"
              onChange={handleChange}
              value={emailabcdefgjk}
              required
            />
          </div>
          <div className="three-ten">
            <label htmlFor="contact_number">Contact Number</label>
            <input
              id="contact_number"
              name="phoneabcdefgjk"
              type="tel"
              className="form-control"
              onChange={handleChange}
              value={phoneabcdefgjk}
              required
            />
          </div>
        </div>
        <label>Potential Group Size</label>
        <div className="form-group">
          <div className="one-three">
            <label htmlFor="group_size">Total group size</label>
            <input
              type="number"
              name="group_sizeabcdefgjk"
              className="form-control"
              onChange={handleChange}
              value={group_sizeabcdefgjk}
            />
          </div>
          <div className="one-three">
            <label>No Adults</label>
            <input
              type="number"
              name="no_adultsabcdefgjk"
              className="form-control"
              onChange={handleChange}
              value={no_adultsabcdefgjk}
            />
          </div>
          <div className="one-three">
            <label>No Children (&lt;12yrs)</label>
            <input
              type="number"
              name="no_childrenabcdefgjk"
              className="form-control"
              onChange={handleChange}
              value={no_childrenabcdefgjk}
            />
          </div>
        </div>
        <div className="form-group">
          <div className="one-one">
            <label>
              Is there a Specific Tour or Destination that you are interested
              in?
            </label>
            <input
              type="text"
              name="preferred_toursabcdefgjk"
              className="form-control"
              onChange={handleChange}
              value={preferred_toursabcdefgjk}
            />
          </div>
        </div>
        <label>What Dates are you considering?</label>
        <div className="form-group">
          <div className="one-three">
            <label>Arrival Date</label>
            <input
              type="date"
              name="arrival_dateabcdefgjk"
              className="form-control"
              onChange={handleChange}
              value={arrival_dateabcdefgjk}
            />
          </div>
          <div className="one-three">
            <label>No of Days</label>
            <input
              type="number"
              name="no_daysabcdefgjk"
              className="form-control"
              onChange={handleChange}
              value={no_daysabcdefgjk}
            />
          </div>
          <div className="one-three">
            <label>Alternative Start Date</label>
            <input
              type="date"
              name="alternative_start_dateabcdefgjk"
              className="form-control"
              onChange={handleChange}
              value={alternative_start_dateabcdefgjk}
            />
          </div>
        </div>
        <label>How did you hear about us?</label>
        <div className="form-group">
          <select
            className="form-control"
            onChange={handleChange}
            name="referral_sourceabcdefgjk"
            value={referral_sourceabcdefgjk}
          >
            <option value="">Choose an Option</option>
            <option value="word-of-mouth">Word of Mouth</option>
            <option value="website-referral">Website Referral</option>
            <option value="internet-search">Internet Search</option>
            <option value="social-media">Social Media</option>
            <option value="newsletter-email">Newsletter or Email</option>
            <option value="other">Other – please tell us:</option>
          </select>
        </div>
        <div className="form-group form-group--newsletter">
          <input
            id="newsletter"
            className="form-control"
            type="checkbox"
            name="newsletterabcdefgjk"
            onChange={handleChange}
            checked={newsletterabcdefgjk}
          />
          <label htmlFor="newsletter">
            Would you like to subscribe to our quarterly newsletter?
          </label>
        </div>
        <div
          className={`form-group btn-holder${submitting ? ' submitting' : ''}`}
        >
          {submitting && (
            <Loader
              className="loader"
              type="ThreeDots"
              color="#ffffff"
              height={15}
              width={80}
            />
          )}
          <button
            type="submit"
            className={`btn btn-md btn-default${
              submitting ? ' submitting' : ''
            }`}
            disabled={submitting}
          >
            SEND
          </button>
          <p id="error_message" className="contact-confirmation">
            {message}
          </p>
          <p
            id="error_message"
            className="contact-confirmation contact-confirmation--mailchimp"
          >
            {mailchimpMessage}
          </p>
        </div>
      </fieldset>
    </form>
  )
}
export default ContactForm
