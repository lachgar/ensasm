import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container header-container">
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <img src="/logo.png" alt="Logo Ecole Nationale des Science Appliquees" style={{ height: "55px", objectFit: "contain" }} />
          <div className="header-content">
            <h2 className="title text-gradient" style={{ margin: 0 }}>
              Securite des applications mobiles
            </h2>
            <span className="subtitle" style={{ marginTop: "0.2rem" }}>
              Ecole Nationale des Science Appliquees
            </span>
          </div>
        </div>

        <button
          className="hamburger"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation"
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>

        <nav>
          <ul className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
            <li><a href="#" onClick={() => setIsMenuOpen(false)}>Accueil</a></li>
            <li><a href="#projects" onClick={() => setIsMenuOpen(false)}>Projets</a></li>
            <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
