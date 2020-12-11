import React, { useState, useEffect } from 'react'
import addToMailchimp from 'gatsby-plugin-mailchimp'

const resetFields = () => ({
  first_name: '',
  last_name: '',
  email: '',
  first_nameabcdefgjk: '',
  last_nameabcdefgjk: '',
  emailabcdefgjk: '',
})
interface MailchimpFormProps {
  inputEmail: string
}

const MailchimpForm = ({ inputEmail }: MailchimpFormProps) => {
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

  useEffect(() => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      emailabcdefgjk: inputEmail,
    }))
  }, [inputEmail])
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
          name="email"
          type="email"
          onChange={handleChange}
          value={email}
        />
      </div>
      {/* real fields */}
      <fieldset>
        <div className="form-group">
          <div className="one-two">
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
          <div className="one-two">
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
        </div>
        <div className="form-group">
          <div className="one-one">
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
        </div>
        <div className="form-group btn-holder">
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
  )
}
export default MailchimpForm
