import './App.css'

const components = [
  { name: 'Buttons', status: 'planned' },
  { name: 'Typography', status: 'planned' },
  { name: 'Colors', status: 'planned' },
  { name: 'Form Inputs', status: 'planned' },
  { name: 'Cards', status: 'planned' },
  { name: 'Alerts', status: 'planned' },
]

function StatusBadge({ status }) {
  return <span className={`badge badge--${status}`}>{status}</span>
}

function ComponentCard({ name, status }) {
  return (
    <div className="component-card">
      <div className="component-card__header">
        <h3 className="component-card__name">{name}</h3>
        <StatusBadge status={status} />
      </div>
      <p className="component-card__description">
        Component showcase coming soon.
      </p>
    </div>
  )
}

function App() {
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
          <h2 className="section__heading">Components</h2>
          <div className="component-grid">
            {components.map((c) => (
              <ComponentCard key={c.name} name={c.name} status={c.status} />
            ))}
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>Hosted on GitHub Pages · Built with React + Vite</p>
      </footer>
    </div>
  )
}

export default App
