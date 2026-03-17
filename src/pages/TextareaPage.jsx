import { useState } from 'react'
import { GcdsTextarea } from '@gcds-core/components-react'
import { Link } from 'react-router-dom'
import '../styles/page.css'

export default function TextareaPage() {
  const [feedbackValue, setFeedbackValue] = useState('')
  const [bioValue, setBioValue] = useState('')

  return (
    <div className="page">
      <nav className="page__breadcrumb">
        <Link to="/">← Back to components</Link>
      </nav>

      <header className="page__header">
        <h1 className="page__title">Textarea</h1>
      </header>

      <main className="page__examples">

        {/* Basic */}
        <section className="example">
          <h2 className="example__heading">Basic textarea</h2>
          <div className="example__body">
            <div className="example__preview">
              <GcdsTextarea
                textareaId="feedback"
                name="feedback"
                label="Feedback"
                hint="Tell us what you think."
                onGcdsInput={(e) => setFeedbackValue(e.detail)}
              />
              {feedbackValue && (
                <p className="example__value">Value: <code>{feedbackValue}</code></p>
              )}
            </div>
          </div>
        </section>

        {/* Required with character limit */}
        <section className="example">
          <h2 className="example__heading">Required with character limit</h2>
          <div className="example__body">
            <div className="example__preview">
              <GcdsTextarea
                textareaId="bio"
                name="bio"
                label="Short biography"
                hint="Briefly describe your role and background."
                maxlength={250}
                required
                onGcdsInput={(e) => setBioValue(e.detail)}
              />
              {bioValue && (
                <p className="example__value">Characters: <code>{bioValue.length}</code></p>
              )}
            </div>
          </div>
        </section>

        {/* Custom rows and pre-filled value */}
        <section className="example">
          <h2 className="example__heading">Custom rows and pre-filled value</h2>
          <div className="example__body">
            <div className="example__preview">
              <GcdsTextarea
                textareaId="address"
                name="address"
                label="Mailing address"
                hint="Enter your full mailing address."
                rows={6}
                value="123 Main Street&#10;Ottawa, ON&#10;K1A 0A6"
              />
            </div>
          </div>
        </section>

        {/* Hidden character limit counter */}
        <section className="example">
          <h2 className="example__heading">Character limit hidden</h2>
          <div className="example__body">
            <div className="example__preview">
              <GcdsTextarea
                textareaId="notes"
                name="notes"
                label="Internal notes"
                hint="These notes are for internal use only."
                maxlength={500}
                hideLimit
              />
            </div>
          </div>
        </section>

        {/* Disabled */}
        <section className="example">
          <h2 className="example__heading">Disabled textarea</h2>
          <div className="example__body">
            <div className="example__preview">
              <GcdsTextarea
                textareaId="disabled-textarea"
                name="disabled-textarea"
                label="Locked field"
                hint="This field cannot be edited."
                value="This content is locked and cannot be modified."
                disabled
              />
            </div>
          </div>
        </section>

        {/* Error state */}
        <section className="example">
          <h2 className="example__heading">Textarea with error</h2>
          <div className="example__body">
            <div className="example__preview">
              <GcdsTextarea
                textareaId="description-error"
                name="description-error"
                label="Description"
                hint="Provide a description of at least 20 characters."
                minlength={20}
                required
                errorMessage="Description must be at least 20 characters."
              />
            </div>
          </div>
        </section>

      </main>
    </div>
  )
}
