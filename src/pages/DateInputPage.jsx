import { useState } from 'react'
import { GcdsDateInput } from '@gcds-core/components-react'
import { Link } from 'react-router-dom'
import IssueTable from '../components/IssueTable'
import '../styles/page.css'

export default function DateInputPage() {
  const [dateValue, setDateValue] = useState('')
  const [compactValue, setCompactValue] = useState('')

  return (
    <div className="page">
      <nav className="page__breadcrumb">
        <Link to="/">← Back to components</Link>
      </nav>

      <header className="page__header">
        <h1 className="page__title">Date Input</h1>
      </header>

      <main className="page__examples">

        {/* Full format */}
        <section className="example">
          <h2 className="example__heading">Full format (day, month, year)</h2>
          <div className="example__body">
            <div className="example__preview">
              <GcdsDateInput
                name="date-full"
                legend="Date of birth"
                format="full"
                hint="For example: 1990 06 15"
                onGcdsChange={(e) => setDateValue(e.detail)}
              />
              {dateValue && (
                <p className="example__value">Value: <code>{dateValue}</code></p>
              )}
            </div>
            <IssueTable issues={[]} />
          </div>
        </section>

        {/* Compact format */}
        <section className="example">
          <h2 className="example__heading">Compact format (month and year)</h2>
          <div className="example__body">
            <div className="example__preview">
              <GcdsDateInput
                name="date-compact"
                legend="Expiry date"
                format="compact"
                hint="For example: 2030 08"
                onGcdsChange={(e) => setCompactValue(e.detail)}
              />
              {compactValue && (
                <p className="example__value">Value: <code>{compactValue}</code></p>
              )}
            </div>
            <IssueTable issues={[]} />
          </div>
        </section>

        {/* Required with pre-filled value */}
        <section className="example">
          <h2 className="example__heading">Required with pre-filled value</h2>
          <div className="example__body">
            <div className="example__preview">
              <GcdsDateInput
                name="date-prefilled"
                legend="Event date"
                format="full"
                value="2026-06-15"
                required
              />
            </div>
            <IssueTable issues={[]} />
          </div>
        </section>

        {/* Min and max constraints */}
        <section className="example">
          <h2 className="example__heading">With min and max constraints</h2>
          <div className="example__body">
            <div className="example__preview">
              <GcdsDateInput
                name="date-minmax"
                legend="Appointment date"
                format="full"
                hint="You may book appointments between June 1, 2026 and December 31, 2026."
                min="2026-06-01"
                max="2026-12-31"
              />
            </div>
            <IssueTable issues={[]} />
          </div>
        </section>

        {/* Disabled */}
        <section className="example">
          <h2 className="example__heading">Disabled date input</h2>
          <div className="example__body">
            <div className="example__preview">
              <GcdsDateInput
                name="date-disabled"
                legend="Registration date"
                format="full"
                value="2026-01-20"
                hint="Registration date cannot be changed."
                disabled
              />
            </div>
            <IssueTable issues={[]} />
          </div>
        </section>

        {/* Error state */}
        <section className="example">
          <h2 className="example__heading">Date input with error</h2>
          <div className="example__body">
            <div className="example__preview">
              <GcdsDateInput
                name="date-error"
                legend="Date of birth"
                format="full"
                hint="For example: 1990 06 15"
                required
                errorMessage="Enter your date of birth to continue."
              />
            </div>
            <IssueTable issues={[]} />
          </div>
        </section>

      </main>
    </div>
  )
}
