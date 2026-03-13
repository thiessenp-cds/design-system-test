import { useState } from 'react'
import { GcdsCheckboxes } from '@gcds-core/components-react'
import { Link } from 'react-router-dom'
import IssueTable from '../components/IssueTable'
import '../styles/page.css'

const colourOptions = [
  { id: 'red', label: 'Red', value: 'red' },
  { id: 'green', label: 'Green', value: 'green' },
  { id: 'blue', label: 'Blue', value: 'blue' },
]

const contactOptions = [
  { id: 'contact-email', label: 'Email', value: 'email', hint: 'We will send updates to your inbox.' },
  { id: 'contact-phone', label: 'Phone', value: 'phone', hint: 'A representative will call you.' },
  { id: 'contact-mail', label: 'Mail', value: 'mail', hint: 'Documents will be sent to your address.' },
]

const termsOption = [
  { id: 'terms', label: 'I agree to the terms and conditions', value: 'agreed' },
]

export default function CheckboxesPage() {
  const [colours, setColours] = useState([])
  const [contact, setContact] = useState([])

  return (
    <div className="page">
      <nav className="page__breadcrumb">
        <Link to="/">← Back to components</Link>
      </nav>

      <header className="page__header">
        <h1 className="page__title">Checkboxes</h1>
        <p className="page__description">
          Checkboxes let a person select one or more options from a list. Use
          them when multiple selections are valid.
        </p>
      </header>

      <main className="page__examples">

        {/* Basic group */}
        <section className="example">
          <h2 className="example__heading">Basic group</h2>
          <div className="example__body">
            <div className="example__preview">
              <GcdsCheckboxes
                name="colours"
                legend="Select your favourite colours"
                options={JSON.stringify(colourOptions)}
                onGcdsInput={(e) => setColours(e.detail)}
              />
              {colours.length > 0 && (
                <p className="example__value">
                  Selected: <code>{colours.join(', ')}</code>
                </p>
              )}
            </div>
            <IssueTable issues={[]} />
          </div>
        </section>

        {/* Group with hint text per option */}
        <section className="example">
          <h2 className="example__heading">Options with hint text</h2>
          <div className="example__body">
            <div className="example__preview">
              <GcdsCheckboxes
                name="contact-method"
                legend="How would you like to be contacted?"
                hint="Select all that apply."
                options={JSON.stringify(contactOptions)}
                required
                onGcdsInput={(e) => setContact(e.detail)}
              />
              {contact.length > 0 && (
                <p className="example__value">
                  Selected: <code>{contact.join(', ')}</code>
                </p>
              )}
            </div>
            <IssueTable issues={[]} />
          </div>
        </section>

        {/* Pre-checked */}
        <section className="example">
          <h2 className="example__heading">Pre-selected option</h2>
          <div className="example__body">
            <div className="example__preview">
              <GcdsCheckboxes
                name="newsletter"
                legend="Communication preferences"
                options={JSON.stringify([
                  { id: 'newsletter', label: 'Subscribe to our newsletter', value: 'newsletter', checked: true },
                  { id: 'updates', label: 'Receive product updates', value: 'updates' },
                ])}
              />
            </div>
            <IssueTable issues={[]} />
          </div>
        </section>

        {/* Single checkbox */}
        <section className="example">
          <h2 className="example__heading">Single checkbox (agreement)</h2>
          <div className="example__body">
            <div className="example__preview">
              <GcdsCheckboxes
                name="terms"
                legend="Terms and conditions"
                hideLegend
                options={JSON.stringify(termsOption)}
                required
              />
            </div>
            <IssueTable issues={[]} />
          </div>
        </section>

        {/* Disabled */}
        <section className="example">
          <h2 className="example__heading">Disabled checkboxes</h2>
          <div className="example__body">
            <div className="example__preview">
              <GcdsCheckboxes
                name="disabled-example"
                legend="Unavailable options"
                hint="These options are currently unavailable."
                options={JSON.stringify(colourOptions)}
                disabled
              />
            </div>
            <IssueTable issues={[]} />
          </div>
        </section>

        {/* Error state */}
        <section className="example">
          <h2 className="example__heading">Checkboxes with error</h2>
          <div className="example__body">
            <div className="example__preview">
              <GcdsCheckboxes
                name="required-choice"
                legend="You must select at least one option"
                options={JSON.stringify(colourOptions)}
                required
                errorMessage="Select at least one colour to continue."
              />
            </div>
            <IssueTable issues={[]} />
          </div>
        </section>

      </main>
    </div>
  )
}
