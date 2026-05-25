export default function Footer() {
  return (
    <footer
      id="contact"
      className="glass-3d"
      style={{
        borderTop: "1px solid rgba(15, 23, 42, 0.05)",
        padding: "4rem 0",
        background: "var(--bg-secondary)",
        marginTop: "4rem",
        borderRadius: "40px 40px 0 0"
      }}
    >
      <div className="container" style={{ textAlign: "center", color: "var(--text-secondary)" }}>
        <h3 className="text-gradient" style={{ fontSize: "1.5rem", marginBottom: "1rem", fontWeight: "bold" }}>
          Galerie - Securite des applications mobiles
        </h3>
        <p style={{ marginBottom: "0.25rem", lineHeight: 1.6 }}>
          Ecole Nationale des Sciences Appliquees
        </p>
        <p style={{ marginBottom: "0.25rem", lineHeight: 1.6 }}>
          BP 575, Avenue Abdelkrim Khattabi, 40000, Gueliz - Marrakech
        </p>
        <p style={{ marginBottom: "0.25rem", lineHeight: 1.6 }}>(+212) 5 24 34 01 25</p>
        <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>
          &copy; {new Date().getFullYear()} Securite des applications mobiles. Tous droits reserves.
        </p>
      </div>
    </footer>
  );
}
