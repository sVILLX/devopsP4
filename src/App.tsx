import './App.css'

function App() {
  return (
    <main className="app-shell">
      <section className="hero">
        <p className="eyebrow">Practica 4</p>
        <h1>Panel de despliegue</h1>
        <p className="hero-copy">
          Estado general de la aplicacion y sus servicios principales.
        </p>
      </section>

      <section className="stats-grid">
        <article className="stat-card">
          <p className="stat-label">Uptime</p>
          <p className="stat-value">99.97%</p>
        </article>
        <article className="stat-card">
          <p className="stat-label">Build actual</p>
          <p className="stat-value">v1.4.2</p>
        </article>
        <article className="stat-card">
          <p className="stat-label">Usuarios activos</p>
          <p className="stat-value">1,284</p>
        </article>
      </section>

      <section className="status-panel">
        <h2>Servicios</h2>
        <ul>
          <li>
            <span className="service-name">API Gateway</span>
            <span className="chip chip-ok">Operativo</span>
          </li>
          <li>
            <span className="service-name">Base de datos</span>
            <span className="chip chip-warn">Latencia media</span>
          </li>
          <li>
            <span className="service-name">CDN</span>
            <span className="chip chip-ok">Operativo</span>
          </li>
        </ul>
      </section>
    </main>
  )
}

export default App
