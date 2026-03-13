import { useState } from 'react'
import { GcdsSelect } from '@gcds-core/components-react'
import { Link } from 'react-router-dom'
import IssueTable from '../components/IssueTable'
import '../styles/page.css'

export default function SelectPage() {
  const [province, setProvince] = useState('')
  const [language, setLanguage] = useState('')

  return (
    <div className="page">
      <nav className="page__breadcrumb">
        <Link to="/">← Back to components</Link>
      </nav>

      <header className="page__header">
        <h1 className="page__title">Select</h1>
      </header>

      <main className="page__examples">

        {/* Basic */}
        <section className="example">
          <h2 className="example__heading">Basic select</h2>
          <div className="example__body">
            <div className="example__preview">
              <GcdsSelect
                selectId="province"
                name="province"
                label="Province or territory"
                hint="Select the province or territory where you currently reside."
                defaultValue="Select an option"
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
              {province && (
                <p className="example__value">Selected: <code>{province}</code></p>
              )}
            </div>
            <IssueTable issues={[]} />
          </div>
        </section>

        {/* Required with pre-selected value */}
        <section className="example">
          <h2 className="example__heading">Required with pre-selected value</h2>
          <div className="example__body">
            <div className="example__preview">
              <GcdsSelect
                selectId="language"
                name="language"
                label="Preferred language"
                hint="Choose the language you would like to receive communications in."
                required
                value="en"
                onGcdsChange={(e) => setLanguage(e.detail)}
              >
                <option value="en">English</option>
                <option value="fr">French</option>
              </GcdsSelect>
              {language && (
                <p className="example__value">Selected: <code>{language}</code></p>
              )}
            </div>
            <IssueTable issues={[]} />
          </div>
        </section>

        {/* Grouped options */}
        <section className="example">
          <h2 className="example__heading">Grouped options</h2>
          <div className="example__body">
            <div className="example__preview">
              <GcdsSelect
                selectId="department"
                name="department"
                label="Government department"
                hint="Select the department that best describes your area."
                defaultValue="Select a department"
              >
                <option value="">Select a department</option>
                <optgroup label="Science and Technology">
                  <option value="nrc">National Research Council</option>
                  <option value="nserc">NSERC</option>
                  <option value="sshrc">SSHRC</option>
                </optgroup>
                <optgroup label="Public Safety">
                  <option value="rcmp">RCMP</option>
                  <option value="cse">Communications Security Establishment</option>
                  <option value="cbsa">Canada Border Services Agency</option>
                </optgroup>
                <optgroup label="Health">
                  <option value="hc">Health Canada</option>
                  <option value="phac">Public Health Agency of Canada</option>
                </optgroup>
              </GcdsSelect>
            </div>
            <IssueTable issues={[]} />
          </div>
        </section>

        {/* Disabled */}
        <section className="example">
          <h2 className="example__heading">Disabled select</h2>
          <div className="example__body">
            <div className="example__preview">
              <GcdsSelect
                selectId="disabled-select"
                name="disabled-select"
                label="Region"
                hint="Region selection is not available at this time."
                disabled
                value="on"
              >
                <option value="on">Ontario</option>
                <option value="qc">Quebec</option>
              </GcdsSelect>
            </div>
            <IssueTable issues={[]} />
          </div>
        </section>

        {/* Error state */}
        <section className="example">
          <h2 className="example__heading">Select with error</h2>
          <div className="example__body">
            <div className="example__preview">
              <GcdsSelect
                selectId="select-error"
                name="select-error"
                label="Country of birth"
                hint="Select the country where you were born."
                required
                errorMessage="Select a country to continue."
              >
                <option value="">Select an option</option>
                <option value="ca">Canada</option>
                <option value="us">United States</option>
                <option value="other">Other</option>
              </GcdsSelect>
            </div>
            <IssueTable issues={[]} />
          </div>
        </section>

      </main>
    </div>
  )
}
