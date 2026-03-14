import { useState } from 'react'
import {
  GcdsInput,
  GcdsTextarea,
  GcdsSelect,
  GcdsCheckboxes,
  GcdsRadios,
  GcdsButton,
  GcdsErrorSummary,
} from '@gcds-core/components-react'
import { Link } from 'react-router-dom'
import '../styles/page.css'
import './CompleteFormPage.css'

const contactOptions = [
  { id: 'form-contact-email', label: 'Email', value: 'email', hint: 'We will send updates to your inbox.' },
  { id: 'form-contact-phone', label: 'Phone', value: 'phone', hint: 'A representative will call you.' },
  { id: 'form-contact-mail', label: 'Mail', value: 'mail', hint: 'Documents will be mailed to your address.' },
]

const notificationOptions = [
  { id: 'form-notif-immediate', label: 'Immediately', value: 'immediate' },
  { id: 'form-notif-daily', label: 'Daily digest', value: 'daily' },
  { id: 'form-notif-weekly', label: 'Weekly digest', value: 'weekly' },
]

export default function CompleteFormPage() {
  const [name, setName] = useState('')
  const [province, setProvince] = useState('')
  const [contactMethods, setContactMethods] = useState([])
  const [notification, setNotification] = useState('')
  const [comments, setComments] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()

    const isValid =
      name.trim() !== '' &&
      province !== '' &&
      contactMethods.length > 0 &&
      notification !== '' &&
      comments.trim() !== ''

    if (isValid) {
      setSubmitted(true)
    }
  }

  function handleReset() {
    setName('')
    setProvince('')
    setContactMethods([])
    setNotification('')
    setComments('')
    setSubmitted(false)
  }

  if (submitted) {
    return (
      <div className="page">
        <nav className="page__breadcrumb">
          <Link to="/">← Back to components</Link>
        </nav>
        <header className="page__header">
          <h1 className="page__title">Complete Form Example</h1>
        </header>
        <main className="page__examples">
          <section className="example">
            <div className="example__body">
              <div className="example__preview">
                <div className="form-success" role="alert">
                  <div className="form-success__icon" aria-hidden="true">✓</div>
                  <h2 className="form-success__heading">Form submitted successfully</h2>
                  <p className="form-success__message">
                    Thank you, <strong>{name}</strong>. Your information has been received and we will be in touch shortly.
                  </p>
                </div>
                <div className="form-success__actions">
                  <GcdsButton buttonRole="secondary" onClick={handleReset}>
                    Submit another response
                  </GcdsButton>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    )
  }

  return (
    <div className="page">
      <nav className="page__breadcrumb">
        <Link to="/">← Back to components</Link>
      </nav>

      <header className="page__header">
        <h1 className="page__title">Complete Form Example</h1>
      </header>

      <main className="page__examples">
        <section className="example">
          <h2 className="example__heading">Registration form</h2>
          <div className="example__body example__body--full">
            <div className="example__preview">
              <form onSubmit={handleSubmit} noValidate>
                <GcdsErrorSummary listen />

                <GcdsInput
                  inputId="form-name"
                  name="full-name"
                  label="Full name"
                  hint="Enter your first and last name."
                  type="text"
                  required
                  value={name}
                  onGcdsInput={(e) => setName(e.detail)}
                />

                <GcdsSelect
                  selectId="form-province"
                  name="province"
                  label="Province or territory"
                  hint="Select the province or territory where you currently reside."
                  required
                  onGcdsChange={(e) => setProvince(e.detail)}
                >
                  <option value="">Select an option</option>
                  <option value="AB">Alberta</option>
                  <option value="BC">British Columbia</option>
                  <option value="MB">Manitoba</option>
                  <option value="NB">New Brunswick</option>
                  <option value="NL">Newfoundland and Labrador</option>
                  <option value="NS">Nova Scotia</option>
                  <option value="NT">Northwest Territories</option>
                  <option value="NU">Nunavut</option>
                  <option value="ON">Ontario</option>
                  <option value="PE">Prince Edward Island</option>
                  <option value="QC">Quebec</option>
                  <option value="SK">Saskatchewan</option>
                  <option value="YT">Yukon</option>
                </GcdsSelect>

                <GcdsCheckboxes
                  name="contact-methods"
                  legend="How would you like to be contacted?"
                  hint="Select all that apply."
                  options={JSON.stringify(contactOptions)}
                  required
                  onGcdsInput={(e) => setContactMethods(e.detail)}
                />

                <GcdsRadios
                  name="notification-frequency"
                  legend="How often would you like to receive notifications?"
                  options={JSON.stringify(notificationOptions)}
                  required
                  onGcdsChange={(e) => setNotification(e.detail)}
                />

                <GcdsTextarea
                  textareaId="form-comments"
                  name="comments"
                  label="Additional comments"
                  hint="Tell us anything else you would like us to know."
                  required
                  onGcdsInput={(e) => setComments(e.detail)}
                />

                <div className="form-actions">
                  <GcdsButton type="submit">Submit</GcdsButton>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
