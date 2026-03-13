import { HashRouter, Routes, Route, Link } from 'react-router-dom'
import InputPage from './pages/InputPage'
import './App.css'

const components = [
  { name: 'Input', path: 'input', status: 'done' },
  { name: 'Textarea', path: 'textarea', status: 'planned' },
  { name: 'Select', path: 'select', status: 'planned' },
  { name: 'Checkboxes', path: 'checkboxes', status: 'planned' },
  { name: 'Radios', path: 'radios', status: 'planned' },
  { name: 'File Uploader', path: 'file-uploader', status: 'planned' },
  { name: 'Date Input', path: 'date-input', status: 'planned' },
  { name: 'Search', path: 'search', status: 'planned' },
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
          <h1 className="site-header__title">Design System</h1>
          <p className="site-header__subtitle">
            A living reference for UI components and design tokens.
          </p>
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
      </Routes>
    </HashRouter>
  )
}
