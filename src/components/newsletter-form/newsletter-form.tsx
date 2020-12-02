import React, { useState, useContext } from 'react'
import { Transition } from 'react-transition-group'

import Modal from '../modal'
import MailchimpForm from '../mailchimp-form'
import { SubscribeContext } from '../../context/subscribe-context'

const resetFields = () => ({
  email: '',
  emailabcdefgjk: '',
})

const duration = 300

const defaultStyle = {
  transition: `opacity, transform ${duration}ms ease-in-out`,
  opacity: 0,
  transform: 'scale(0)',
}

const NewsletterForm = React.forwardRef(
  (props, ref: React.ForwardedRef<HTMLInputElement>) => {
    const { state, dispatch } = useContext(SubscribeContext)
    const [openModal, setOpenModal] = useState(false)

    const transitionStyles = {
      entering: { opacity: 1, transform: 'scale(1)' },
      entered: { opacity: 1, transform: 'scale(1)' },
      exiting: { opacity: 0, transform: 'scale(0)' },
      exited: { opacity: 0, transform: 'scale(0)' },
    }
    const [formData, setFormData] = useState(resetFields())
    const { email, emailabcdefgjk } = formData

    const handleSubmit = (e) => {
      e.preventDefault()

      // check honeypot fields
      if (email) {
        return
      }
      setOpenModal(true)
    }
    const handleChange = (e) => {
      if (state.subscribe) {
        dispatch({ type: 'subscribe', payload: false })
      }
      e.persist()
      switch (e.target.name) {
        case 'email':
          setFormData((prevFormData) => ({
            ...prevFormData,
            email: e.target.value,
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
      <>
        <form
          id="signup"
          onSubmit={handleSubmit}
          className="newsletter-form contact-form"
          {...props}
        >
          {/* honeypot fields */}
          <div className="honeypot">
            <input
              autoComplete="new-password"
              name="email"
              type="email"
              onChange={handleChange}
              value={email}
            />
          </div>
          <fieldset>
            <div className="input-holder">
              <input
                ref={ref}
                type="email"
                className={`form-control email${
                  state.subscribe ? ' animate' : ''
                }`}
                placeholder={`${
                  state.subscribe ? 'Please Enter You Email' : 'Email Address'
                }`}
                name="emailabcdefgjk"
                id="subscriber_email"
                onChange={handleChange}
                value={emailabcdefgjk}
                required
              />
              <input type="submit" value="GO" />
            </div>
            <span className="info" id="subscribe_message">
              To receive news, updates and tour packages via email.
            </span>
          </fieldset>
        </form>
        <Transition in={openModal} timeout={duration}>
          {(state: 'entering' | 'entered' | 'exiting' | 'exited') => {
            return (
              <Modal
                open={openModal}
                closeHandler={() => {
                  setOpenModal(false)
                  setFormData(resetFields())
                }}
                modalTitle="Quarterly Newsletter Subscription"
                style={{
                  ...defaultStyle,
                  ...transitionStyles[state],
                }}
              >
                <div className="contact-form contact-form--mailchimp">
                  <div
                    id="collapse5"
                    className="panel-collapse collapse in"
                    role="tabpanel"
                  >
                    <MailchimpForm inputEmail={emailabcdefgjk} />
                  </div>
                </div>
              </Modal>
            )
          }}
        </Transition>
      </>
    )
  },
)

export default NewsletterForm
