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
