import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container header-container">
        <div className="header-brand">
          <img
            src="/logo.png"
            alt="Logo Ecole Nationale des Science Appliquees"
            className="header-logo"
          />
          <div className="header-content">
            <h2 className="title text-gradient" style={{ margin: 0 }}>
              Universite Cadi Ayyad
            </h2>
            <span className="subtitle" style={{ marginTop: "0.2rem" }}>
              Ecole Nationale des Sciences Appliquees
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
