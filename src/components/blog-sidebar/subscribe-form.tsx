import React, { useState, useRef } from 'react'
import addToMailchimp from 'gatsby-plugin-mailchimp'
import useResizeObserver from 'use-resize-observer/polyfilled'

const resetFields = () => ({
  first_name: '',
  last_name: '',
  email: '',
  first_nameabcdefgjk: '',
  last_nameabcdefgjk: '',
  emailabcdefgjk: '',
})

const SubscribeForm = () => {
  const ref = useRef<HTMLDivElement>(null)
  const { height } = useResizeObserver({
    ref,
  })
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
    addToMailchimp(emailabcdefgjk, {
      FNAME: first_nameabcdefgjk,
      LNAME: last_nameabcdefgjk,
    })
      .then(({ result, msg }) => {
        setFormData(resetFields())
        setMailchimpMessage(msg)
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
    <div className="subscribe-form accordion-group">
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
        className={`panel-collapse collapse in`}
        role="tabpanel"
        style={
          open && height
            ? { height: `${height + (mailchimpMessage ? 150 : 60)}px` }
            : { height: 0 }
        }
      >
        <div ref={ref} className="panel-body">
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
                  className="contact-confirmation contact-confirmation--mailchimp2"
                  dangerouslySetInnerHTML={{ __html: mailchimpMessage }}
                />
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SubscribeForm
