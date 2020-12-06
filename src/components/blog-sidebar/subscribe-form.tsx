import React, { useState } from 'react'
import axios from 'axios'

const resetFields = () => ({
  first_name: '',
  last_name: '',
  email: '',
  first_nameabcdefgjk: '',
  last_nameabcdefgjk: '',
  emailabcdefgjk: '',
})

const SubscribeForm = () => {
  const [open, setOpen] = useState(true)
  const [mailchimpMessage, setMailchimpMessage] = useState('')
  const [formData, setFormData] = useState({
    ...resetFields(),
  })
  const {
    first_name,
    last_name,
    email,
    first_nameabcdefgjk,
    last_nameabcdefgjk,
    emailabcdefgjk,
  } = formData

  const handleSubmit = (e) => {
    e.preventDefault()
    setMailchimpMessage('')
    // check honeypot fields
    if (first_name || last_name || email) {
      return
    }
    axios({
      method: 'post',
      url: `http://active-escapes.co.za/mailchimp.php`,
      headers: { 'content-type': 'application/json' },
      data: {
        ...formData,
      },
    })
      .then((result) => {
        setFormData(resetFields())
        setMailchimpMessage(result.data)
      })
      .catch((error) => {
        setMailchimpMessage(error.message)
      })
  }

  const handleChange = (e) => {
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
      case 'email':
        setFormData((prevFormData) => ({
          ...prevFormData,
          email: e.target.value,
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
      case 'emailabcdefgjk':
        setFormData((prevFormData) => ({
          ...prevFormData,
          emailabcdefgjk: e.target.value,
        }))
        break
      default:
        console.log('Wrong Case in Switch HandleChange')
    }
  }

  return (
    <div className="accordion-group">
      <div className="panel-heading">
        <h4 className="panel-title">
          <a
            className={`${open ? '' : 'collapsed'}`}
            onClick={() => setOpen(!open)}
          >
            SUBSCRIBE
          </a>
        </h4>
      </div>
      <div
        id="collapse5"
        className={`panel-collapse collapse${open ? ' in' : ''}`}
        role="tabpanel"
      >
        <div className="panel-body">
          <form className="subscribe-form" onSubmit={handleSubmit}>
            {' '}
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
                name="email"
                type="email"
                onChange={handleChange}
                value={email}
              />
            </div>
            {/* real fields */}
            <fieldset>
              <div className="form-group">
                <input
                  name="first_nameabcdefgjk"
                  type="text"
                  onChange={handleChange}
                  value={first_nameabcdefgjk}
                  className="form-control"
                  placeholder="First Name"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  name="last_nameabcdefgjk"
                  type="text"
                  onChange={handleChange}
                  value={last_nameabcdefgjk}
                  className="form-control"
                  placeholder="Last Name"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  name="emailabcdefgjk"
                  type="email"
                  onChange={handleChange}
                  value={emailabcdefgjk}
                  className="form-control"
                  placeholder="Email Address"
                  required
                />
              </div>
              <div className="btn-holder">
                <button type="submit" className="btn btn-default">
                  SUBSCRIBE
                </button>
                <p
                  id="error_message"
                  className="contact-confirmation contact-confirmation--mailchimp3"
                >
                  {mailchimpMessage}
                </p>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SubscribeForm
