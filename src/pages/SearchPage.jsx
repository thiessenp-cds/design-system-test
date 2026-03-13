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
        <p className="page__description">
          Search allows users to enter keywords to find relevant information.
          The component renders a labelled search input with a submit button.
          By default it targets the Canada.ca global search, but the action can
          be customised for any search endpoint.
        </p>
      </header>

      <main className="page__examples">

        {/* Basic */}
        <section className="example">
          <h2 className="example__heading">Basic search</h2>
          <div className="example__preview">
            <GcdsSearch
              searchId="search-basic"
              name="q"
              placeholder="Canada.ca"
            />
          </div>
        </section>

        {/* Custom placeholder */}
        <section className="example">
          <h2 className="example__heading">Custom placeholder label</h2>
          <div className="example__preview">
            <GcdsSearch
              searchId="search-placeholder"
              name="q"
              placeholder="this site"
            />
          </div>
        </section>

        {/* With suggested terms */}
        <section className="example">
          <h2 className="example__heading">With suggested search terms</h2>
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
        </section>

        {/* Controlled with onGcdsInput */}
        <section className="example">
          <h2 className="example__heading">Controlled with live value</h2>
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
        </section>

        {/* Custom action and POST method */}
        <section className="example">
          <h2 className="example__heading">Custom action and method</h2>
          <div className="example__preview">
            <GcdsSearch
              searchId="search-custom-action"
              name="q"
              placeholder="our records"
              action="/search"
              method="get"
            />
          </div>
        </section>

      </main>
    </div>
  )
}
