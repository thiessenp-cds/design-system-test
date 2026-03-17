import { HashRouter, Routes, Route, Link } from 'react-router-dom'
import InputPage from './pages/InputPage'
import CheckboxesPage from './pages/CheckboxesPage'
import RadiosPage from './pages/RadiosPage'
import TextareaPage from './pages/TextareaPage'
import SelectPage from './pages/SelectPage'
import FileUploaderPage from './pages/FileUploaderPage'
import DateInputPage from './pages/DateInputPage'
import SearchPage from './pages/SearchPage'
import CompleteFormPage from './pages/CompleteFormPage'
import './App.css'

const components = [
  { name: 'Input', path: 'input' },
  { name: 'Textarea', path: 'textarea'},
  { name: 'Select', path: 'select'},
  { name: 'Checkboxes', path: 'checkboxes' },
  { name: 'Radios', path: 'radios' },
  { name: 'File Uploader', path: 'file-uploader' },
  { name: 'Date Input', path: 'date-input' },
  { name: 'Search', path: 'search' },
]

function ComponentCard({ name, path }) {
  return (
    <Link className={`component-card component-card--planned'}`} to={path}>
      <h3 className="component-card__name">{name}</h3>
    </Link>
  )
}

function HomePage() {
  return (
    <div className="app">
      <header className="site-header">
        <div className="site-header__inner">
          <h1 className="site-header__title">Design System Component Test</h1>
        </div>
      </header>

      <main className="main">
        <section className="section">
          <h2 className="section__heading">Form Components</h2>
          <div className="component-grid">
            {components.map((c) => (
              <ComponentCard key={c.name} name={c.name} path={c.path} />
            ))}
          </div>
        </section>

        <section className="section">
          <h2 className="section__heading">Form Examples</h2>
          <div className="component-grid">
            <ComponentCard key={"Contact Form"} name={"Contact Form"} path={"complete-form"} />
          </div>
        </section>

        <section className="section">
          <h2 className="section__heading">Known Issues</h2>
          <div className="known-issues-wrapper">
            <table className="known-issues-table">
              <thead>
                <tr>
                  <th>Component</th>
                  <th>Browser / AT</th>
                  <th>Issue</th>
                  <th>Tickets</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Input required</td>
                  <td>Chrome + TalkBack 15 (Android)</td>
                  <td>Does not announce required.</td>
                  <td>
                    <a href="https://github.com/cds-snc/platform-forms-client/issues/5842" target="_blank" rel="noreferrer">#5842</a>
                    {' '}
                    <a href="https://github.com/cds-snc/platform-forms-client/issues/5845" target="_blank" rel="noreferrer">#5845</a>
                  </td>
                </tr>
                <tr>
                  <td>Input number</td>
                  <td>All browsers (mouse/touch users)</td>
                  <td>Increment/decrement spinner buttons are hidden by CSS, preventing pointer users from adjusting the value with the controls.</td>
                  <td>
                    <a href="https://github.com/cds-snc/gcds-components/issues/1011" target="_blank" rel="noreferrer">#1011</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>Hosted on GitHub Pages · Built with React + Vite · GC Design System</p>
      </footer>
    </div>
  )
}

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/input" element={<InputPage />} />
        <Route path="/checkboxes" element={<CheckboxesPage />} />
        <Route path="/radios" element={<RadiosPage />} />
        <Route path="/textarea" element={<TextareaPage />} />
        <Route path="/select" element={<SelectPage />} />
        <Route path="/file-uploader" element={<FileUploaderPage />} />
        <Route path="/date-input" element={<DateInputPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/complete-form" element={<CompleteFormPage />} />
      </Routes>
    </HashRouter>
  )
}
