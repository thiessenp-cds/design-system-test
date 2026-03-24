import { useState } from 'react'
import { GcdsInput } from '@gcds-core/components-react'
import { Link } from 'react-router-dom'
import '../styles/page.css'

const COUNTRIES = [
  { label: 'Afghanistan', value: 'AF' },
  { label: 'Albania', value: 'AL' },
  { label: 'Algeria', value: 'DZ' },
  { label: 'Argentina', value: 'AR' },
  { label: 'Australia', value: 'AU' },
  { label: 'Austria', value: 'AT' },
  { label: 'Bangladesh', value: 'BD' },
  { label: 'Belgium', value: 'BE' },
  { label: 'Brazil', value: 'BR' },
  { label: 'Canada', value: 'CA' },
  { label: 'Chile', value: 'CL' },
  { label: 'China', value: 'CN' },
  { label: 'Colombia', value: 'CO' },
  { label: 'Croatia', value: 'HR' },
  { label: 'Czech Republic', value: 'CZ' },
  { label: 'Denmark', value: 'DK' },
  { label: 'Egypt', value: 'EG' },
  { label: 'Ethiopia', value: 'ET' },
  { label: 'Finland', value: 'FI' },
  { label: 'France', value: 'FR' },
  { label: 'Germany', value: 'DE' },
  { label: 'Ghana', value: 'GH' },
  { label: 'Greece', value: 'GR' },
  { label: 'Hungary', value: 'HU' },
  { label: 'India', value: 'IN' },
  { label: 'Indonesia', value: 'ID' },
  { label: 'Iran', value: 'IR' },
  { label: 'Iraq', value: 'IQ' },
  { label: 'Ireland', value: 'IE' },
  { label: 'Israel', value: 'IL' },
  { label: 'Italy', value: 'IT' },
  { label: 'Japan', value: 'JP' },
  { label: 'Jordan', value: 'JO' },
  { label: 'Kenya', value: 'KE' },
  { label: 'Malaysia', value: 'MY' },
  { label: 'Mexico', value: 'MX' },
  { label: 'Morocco', value: 'MA' },
  { label: 'Netherlands', value: 'NL' },
  { label: 'New Zealand', value: 'NZ' },
  { label: 'Nigeria', value: 'NG' },
  { label: 'Norway', value: 'NO' },
  { label: 'Pakistan', value: 'PK' },
  { label: 'Peru', value: 'PE' },
  { label: 'Philippines', value: 'PH' },
  { label: 'Poland', value: 'PL' },
  { label: 'Portugal', value: 'PT' },
  { label: 'Romania', value: 'RO' },
  { label: 'Russia', value: 'RU' },
  { label: 'Saudi Arabia', value: 'SA' },
  { label: 'South Africa', value: 'ZA' },
  { label: 'South Korea', value: 'KR' },
  { label: 'Spain', value: 'ES' },
  { label: 'Sweden', value: 'SE' },
  { label: 'Switzerland', value: 'CH' },
  { label: 'Thailand', value: 'TH' },
  { label: 'Turkey', value: 'TR' },
  { label: 'Ukraine', value: 'UA' },
  { label: 'United Kingdom', value: 'GB' },
  { label: 'United States', value: 'US' },
  { label: 'Venezuela', value: 'VE' },
  { label: 'Vietnam', value: 'VN' },
]

export default function InputPage() {
  const [textValue, setTextValue] = useState('')
  const [emailValue, setEmailValue] = useState('')
  const [passwordValue, setPasswordValue] = useState('')
  const [numberValue, setNumberValue] = useState('')
  const [countryValue, setCountryValue] = useState('')

  return (
    <div className="page">
      <nav className="page__breadcrumb">
        <Link to="/">← Back to components</Link>
      </nav>

      <header className="page__header">
        <h1 className="page__title">Input</h1>
      </header>

      <main className="page__examples">

        <section className="example">
          <h2 className="example__heading">Text input</h2>
          <div className="example__body">
            <div className="example__preview">
              <GcdsInput
                inputId="full-name"
                name="full-name"
                label="Full name"
                hint="Enter your first and last name."
                type="text"
                value={textValue}
                onGcdsInput={(e) => setTextValue(e.detail)}
              />
              {textValue && (
                <p className="example__value">Value: <code>{textValue}</code></p>
              )}
            </div>
          </div>
        </section>

        <section className="example">
          <h2 className="example__heading">Email input</h2>
          <div className="example__body">
            <div className="example__preview">
              <GcdsInput
                inputId="email"
                name="email"
                label="Email address"
                hint="You will use this to sign in."
                type="email"
                autocomplete="email"
                required
                value={emailValue}
                onGcdsInput={(e) => setEmailValue(e.detail)}
              />
              {emailValue && (
                <p className="example__value">Value: <code>{emailValue}</code></p>
              )}
            </div>
          </div>
        </section>

        <section className="example">
          <h2 className="example__heading">Password input</h2>
          <div className="example__body">
            <div className="example__preview">
              <GcdsInput
                inputId="password"
                name="password"
                label="Password"
                hint="Must be at least 8 characters."
                type="password"
                required
                minlength={8}
                value={passwordValue}
                onGcdsInput={(e) => setPasswordValue(e.detail)}
              />
            </div>
          </div>
        </section>

        <section className="example">
          <h2 className="example__heading">Number input</h2>
          <div className="example__body">
            <div className="example__preview">
              <GcdsInput
                inputId="quantity"
                name="quantity"
                label="Quantity"
                hint="Enter a value between 1 and 100."
                type="number"
                min={1}
                max={100}
                size={10}
                value={numberValue}
                onGcdsInput={(e) => setNumberValue(e.detail)}
              />
            </div>
          </div>
        </section>

        <section className="example">
          <h2 className="example__heading">Disabled input</h2>
          <div className="example__body">
            <div className="example__preview">
              <GcdsInput
                inputId="disabled-example"
                name="disabled-example"
                label="Locked field"
                hint="This field cannot be edited."
                type="text"
                value="Read-only content"
                disabled
              />
            </div>
          </div>
        </section>

        <section className="example">
          <h2 className="example__heading">Input with error</h2>
          <div className="example__body">
            <div className="example__preview">
              <GcdsInput
                inputId="postal-code"
                name="postal-code"
                label="Postal code"
                hint="Example: A1A 1A1"
                type="text"
                size={7}
                required
                errorMessage="Enter a valid Canadian postal code."
              />
            </div>
          </div>
        </section>

        <section className="example">
          <h2 className="example__heading">Autocomplete with country suggestions</h2>
          <div className="example__body">
            <div className="example__preview">
              <GcdsInput
                inputId="country"
                name="country"
                label="Country of birth"
                hint="Start typing to see suggestions."
                type="text"
                autocomplete="country-name"
                suggestions={JSON.stringify(COUNTRIES)}
                value={countryValue}
                onGcdsInput={(e) => setCountryValue(e.detail)}
              />
              {countryValue && (
                <p className="example__value">Value: <code>{countryValue}</code></p>
              )}
            </div>
          </div>
        </section>

      </main>
    </div>
  )
}
