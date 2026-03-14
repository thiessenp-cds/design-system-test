import { useState } from 'react'
import { GcdsRadios } from '@gcds-core/components-react'
import { Link } from 'react-router-dom'
import IssueTable from '../components/IssueTable'
import '../styles/page.css'

const yesNoOptions = [
  { id: 'yes', label: 'Yes', value: 'yes' },
  { id: 'no', label: 'No', value: 'no' },
]

const contactOptions = [
  { id: 'radio-email', label: 'Email', value: 'email', hint: 'We will send updates to your inbox.' },
  { id: 'radio-phone', label: 'Phone', value: 'phone', hint: 'A representative will call you.' },
  { id: 'radio-mail', label: 'Mail', value: 'mail', hint: 'Documents will be sent to your address.' },
]

const sizeOptions = [
  { id: 'size-sm', label: 'Small', value: 'sm' },
  { id: 'size-md', label: 'Medium', value: 'md' },
  { id: 'size-lg', label: 'Large', value: 'lg' },
  { id: 'size-xl', label: 'Extra large', value: 'xl' },
]

export default function RadiosPage() {
  const [yesNo, setYesNo] = useState('')
  const [contact, setContact] = useState('')
  const [size, setSize] = useState('')

  return (
    <div className="page">
      <nav className="page__breadcrumb">
        <Link to="/">← Back to components</Link>
      </nav>

      <header className="page__header">
        <h1 className="page__title">Radios</h1>
      </header>

      <main className="page__examples">

        <section className="example">
          <h2 className="example__heading">Basic radios</h2>
          <div className="example__body">
            <div className="example__preview">
              <GcdsRadios
                name="yes-no"
                legend="Do you agree?"
                options={JSON.stringify(yesNoOptions)}
                onGcdsChange={(e) => setYesNo(e.detail)}
              />
              {yesNo && (
                <p className="example__value">
                  Selected: <code>{yesNo}</code>
                </p>
              )}
            </div>
            <IssueTable issues={[]} />
          </div>
        </section>

        <section className="example">
          <h2 className="example__heading">Options with hint text</h2>
          <div className="example__body">
            <div className="example__preview">
              <GcdsRadios
                name="contact-pref"
                legend="How would you like to be contacted?"
                hint="Choose one option."
                options={JSON.stringify(contactOptions)}
                required
                onGcdsChange={(e) => setContact(e.detail)}
              />
              {contact && (
                <p className="example__value">
                  Selected: <code>{contact}</code>
                </p>
              )}
            </div>
            <IssueTable issues={[]} />
          </div>
        </section>

        <section className="example">
          <h2 className="example__heading">Pre-selected option</h2>
          <div className="example__body">
            <div className="example__preview">
              <GcdsRadios
                name="size"
                legend="Choose a size"
                options={JSON.stringify(
                  sizeOptions.map((o) => ({ ...o, checked: o.value === 'md' }))
                )}
                onGcdsChange={(e) => setSize(e.detail)}
              />
              {size && (
                <p className="example__value">
                  Selected: <code>{size}</code>
                </p>
              )}
            </div>
            <IssueTable issues={[]} />
          </div>
        </section>

        <section className="example">
          <h2 className="example__heading">Disabled radios</h2>
          <div className="example__body">
            <div className="example__preview">
              <GcdsRadios
                name="disabled-radios"
                legend="Unavailable options"
                hint="These options are currently unavailable."
                options={JSON.stringify(yesNoOptions)}
                disabled
              />
            </div>
            <IssueTable issues={[]} />
          </div>
        </section>

        <section className="example">
          <h2 className="example__heading">Radios with error</h2>
          <div className="example__body">
            <div className="example__preview">
              <GcdsRadios
                name="required-radio"
                legend="You must select an option"
                options={JSON.stringify(yesNoOptions)}
                required
                errorMessage="Select yes or no to continue."
              />
            </div>
            <IssueTable issues={[]} />
          </div>
        </section>

      </main>
    </div>
  )
}
