import { GcdsFileUploader } from '@gcds-core/components-react'
import { Link } from 'react-router-dom'
import '../styles/page.css'

export default function FileUploaderPage() {
  return (
    <div className="page">
      <nav className="page__breadcrumb">
        <Link to="/">← Back to components</Link>
      </nav>

      <header className="page__header">
        <h1 className="page__title">File Uploader</h1>
        <p className="page__description">
          A file uploader allows users to select and attach supporting
          documentation. Use it when you need physical or digital documents from
          the user, such as proof of identity or supporting evidence.
        </p>
      </header>

      <main className="page__examples">

        {/* Basic */}
        <section className="example">
          <h2 className="example__heading">Basic file uploader</h2>
          <div className="example__preview">
            <GcdsFileUploader
              uploaderId="file-basic"
              name="file-basic"
              label="Upload a document"
            />
          </div>
        </section>

        {/* Hint and required */}
        <section className="example">
          <h2 className="example__heading">With hint and required</h2>
          <div className="example__preview">
            <GcdsFileUploader
              uploaderId="file-required"
              name="file-required"
              label="Proof of address"
              hint="Upload a recent utility bill, bank statement, or government-issued letter. Maximum file size: 5 MB."
              required
            />
          </div>
        </section>

        {/* Accept specific file types */}
        <section className="example">
          <h2 className="example__heading">Accept specific file types</h2>
          <div className="example__preview">
            <GcdsFileUploader
              uploaderId="file-images"
              name="file-images"
              label="Upload a photo"
              hint="Accepted formats: JPG, PNG, GIF. Maximum file size: 2 MB."
              accept="image/*"
            />
          </div>
        </section>

        {/* Multiple files */}
        <section className="example">
          <h2 className="example__heading">Multiple file upload</h2>
          <div className="example__preview">
            <GcdsFileUploader
              uploaderId="file-multiple"
              name="file-multiple"
              label="Supporting documents"
              hint="You may upload up to 5 files. Accepted formats: PDF, DOC, DOCX."
              accept=".pdf,.doc,.docx"
              multiple
            />
          </div>
        </section>

        {/* Disabled */}
        <section className="example">
          <h2 className="example__heading">Disabled file uploader</h2>
          <div className="example__preview">
            <GcdsFileUploader
              uploaderId="file-disabled"
              name="file-disabled"
              label="Additional documents"
              hint="Document upload is not available at this stage."
              disabled
            />
          </div>
        </section>

        {/* Error state */}
        <section className="example">
          <h2 className="example__heading">File uploader with error</h2>
          <div className="example__preview">
            <GcdsFileUploader
              uploaderId="file-error"
              name="file-error"
              label="Government-issued ID"
              hint="Upload a scan or photo of your passport, driver's licence, or permanent resident card."
              required
              errorMessage="You must upload a valid government-issued ID to continue."
            />
          </div>
        </section>

      </main>
    </div>
  )
}
