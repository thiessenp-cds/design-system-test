import { useState } from 'react'
import { GcdsInput } from '@gcds-core/components-react'
import { Link } from 'react-router-dom'
import '../styles/page.css'

export default function InputPage() {
  const [textValue, setTextValue] = useState('')
  const [emailValue, setEmailValue] = useState('')
  const [passwordValue, setPasswordValue] = useState('')
  const [numberValue, setNumberValue] = useState('')

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

      </main>
    </div>
  )
}
