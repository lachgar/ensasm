export default function Hero() {
  return (
    <section style={{ padding: "8rem 0 6rem", textAlign: "center" }}>
      <div className="container">
        <div style={{ marginBottom: "2rem" }}>
          <span
            style={{
              display: "inline-block",
              background: "linear-gradient(135deg, rgba(217, 119, 6, 0.1), rgba(217, 119, 6, 0.05))",
              color: "var(--accent-gold)",
              padding: "0.5rem 1.5rem",
              borderRadius: "2rem",
              fontSize: "0.9rem",
              fontWeight: 700,
              marginBottom: "0.75rem",
              border: "1px solid rgba(217, 119, 6, 0.2)",
              boxShadow: "0 0 20px rgba(217, 119, 6, 0.1)"
            }}
          >
            Universite Cadi Ayyad
          </span>
          <p style={{ color: "var(--text-secondary)", fontSize: "1rem", margin: 0, fontWeight: 500 }}>
            Ecole Nationale des Sciences Appliquees <span style={{ opacity: 0.5, margin: "0 0.75rem" }}>|</span> Pr. Mohamed LACHGAR
          </p>
        </div>
        <h1
          className="text-gradient"
          style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", marginBottom: "3rem", letterSpacing: "-0.02em", lineHeight: 1.2 }}
        >
          Projets et demonstrations<br />des etudiants
        </h1>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
          <a href="#projects" className="btn btn-primary" style={{ fontSize: "1.1rem", padding: "0.8rem 2rem" }}>
            Voir les Projets
          </a>
          <a href="#contact" className="btn btn-ghost" style={{ fontSize: "1.1rem", padding: "0.8rem 2rem" }}>
            Nous Contacter
          </a>
        </div>

      </div>
    </section>
  );
}
