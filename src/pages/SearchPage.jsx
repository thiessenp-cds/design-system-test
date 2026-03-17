import { useState } from 'react'
import { GcdsSearch } from '@gcds-core/components-react'
import { Link } from 'react-router-dom'
import '../styles/page.css'

export default function SearchPage() {
  const [searchValue, setSearchValue] = useState('')
  const [submittedTerm, setSubmittedTerm] = useState('')

  return (
    <div className="page">
      <nav className="page__breadcrumb">
        <Link to="/">← Back to components</Link>
      </nav>

      <header className="page__header">
        <h1 className="page__title">Search</h1>
      </header>

      <main className="page__examples">

        <section className="example">
          <h2 className="example__heading">Basic search</h2>
          <div className="example__body">
            <div className="example__preview">
              <GcdsSearch
                searchId="search-basic"
                name="q"
                placeholder="Canada.ca"
              />
            </div>
          </div>
        </section>

        <section className="example">
          <h2 className="example__heading">Custom placeholder label</h2>
          <div className="example__body">
            <div className="example__preview">
              <GcdsSearch
                searchId="search-placeholder"
                name="q"
                placeholder="this site"
              />
            </div>
          </div>
        </section>

        <section className="example">
          <h2 className="example__heading">With suggested search terms</h2>
          <div className="example__body">
            <div className="example__preview">
              <GcdsSearch
                searchId="search-suggested"
                name="q"
                placeholder="this site"
                suggested={JSON.stringify([
                  'benefits',
                  'passport',
                  'tax return',
                  'immigration',
                  'employment insurance',
                ])}
              />
            </div>
          </div>
        </section>

        <section className="example">
          <h2 className="example__heading">Controlled with live value</h2>
          <div className="example__body">
            <div className="example__preview">
              <GcdsSearch
                searchId="search-controlled"
                name="q"
                placeholder="this site"
                value={searchValue}
                onGcdsInput={(e) => setSearchValue(e.detail)}
                onGcdsSubmit={(e) => {
                  setSubmittedTerm(e.detail)
                  e.preventDefault?.()
                }}
              />
              {searchValue && (
                <p className="example__value">Current value: <code>{searchValue}</code></p>
              )}
              {submittedTerm && (
                <p className="example__value">Last submitted: <code>{submittedTerm}</code></p>
              )}
            </div>
          </div>
        </section>

        <section className="example">
          <h2 className="example__heading">Custom action and method</h2>
          <div className="example__body">
            <div className="example__preview">
              <GcdsSearch
                searchId="search-custom-action"
                name="q"
                placeholder="our records"
                action="/search"
                method="get"
              />
            </div>
          </div>
        </section>

      </main>
    </div>
  )
}
