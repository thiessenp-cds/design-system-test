import { HashRouter, Routes, Route, Link } from 'react-router-dom'
import InputPage from './pages/InputPage'
import CheckboxesPage from './pages/CheckboxesPage'
import RadiosPage from './pages/RadiosPage'
import TextareaPage from './pages/TextareaPage'
import SelectPage from './pages/SelectPage'
import FileUploaderPage from './pages/FileUploaderPage'
import DateInputPage from './pages/DateInputPage'
import SearchPage from './pages/SearchPage'
import './App.css'

const components = [
  { name: 'Input', path: 'input', status: 'done' },
  { name: 'Textarea', path: 'textarea', status: 'done' },
  { name: 'Select', path: 'select', status: 'done' },
  { name: 'Checkboxes', path: 'checkboxes', status: 'done' },
  { name: 'Radios', path: 'radios', status: 'done' },
  { name: 'File Uploader', path: 'file-uploader', status: 'done' },
  { name: 'Date Input', path: 'date-input', status: 'done' },
  { name: 'Search', path: 'search', status: 'done' },
]

function StatusBadge({ status }) {
  return <span className={`badge badge--${status}`}>{status}</span>
}

function ComponentCard({ name, path, status }) {
  const isReady = status === 'done' || status === 'in-progress'
  const CardTag = isReady ? Link : 'div'
  const linkProps = isReady ? { to: `/${path}` } : {}

  return (
    <CardTag className="component-card" {...linkProps}>
      <div className="component-card__header">
        <h3 className="component-card__name">{name}</h3>
        <StatusBadge status={status} />
      </div>
      <p className="component-card__description">
        {isReady ? 'View component examples →' : 'Component showcase coming soon.'}
      </p>
    </CardTag>
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
              <ComponentCard key={c.name} name={c.name} path={c.path} status={c.status} />
            ))}
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
      </Routes>
    </HashRouter>
  )
}
