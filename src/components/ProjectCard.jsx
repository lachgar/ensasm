export default function ProjectCard({ project }) {
  return (
    <div
      className="glass-3d"
      style={{
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        transition:
          "transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.4s ease"
      }}
      onMouseOver={(event) => {
        event.currentTarget.style.transform = "translateY(-10px) scale(1.02)";
        event.currentTarget.style.boxShadow =
          "0 30px 60px rgba(15,23,42,0.15), inset 0 1px 0 rgba(255,255,255,0.6), 0 0 20px rgba(2,132,199,0.1)";
      }}
      onMouseOut={(event) => {
        event.currentTarget.style.transform = "translateY(0) scale(1)";
        event.currentTarget.style.boxShadow = "var(--card-shadow)";
      }}
    >
      <div style={{ position: "relative", width: "100%", paddingTop: "56.25%", background: "#e2e8f0" }}>
        {project.videoUrl ? (
          <iframe
            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }}
            src={`${project.videoUrl}?modestbranding=1&rel=0&showinfo=0`}
            title={project.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
        ) : (
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.5rem",
              color: "var(--text-secondary)"
            }}
          >
            <span style={{ fontSize: "2.5rem" }}>Video</span>
            <span style={{ fontSize: "0.85rem", fontWeight: 500 }}>Lien YouTube non disponible</span>
          </div>
        )}
      </div>

      <div style={{ padding: "1.75rem", display: "flex", flexDirection: "column", flex: 1 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "0.75rem", marginBottom: "0.9rem", flexWrap: "wrap" }}>
          <span
            style={{
              background: "linear-gradient(135deg, var(--accent-cyan), var(--accent-purple))",
              color: "#fff",
              borderRadius: "8px",
              padding: "0.15rem 0.55rem",
              fontSize: "0.75rem",
              fontWeight: 700
            }}
          >
            {project.teamName}
          </span>
          <p style={{ color: "var(--accent-cyan)", fontSize: "0.82rem", fontWeight: 700, margin: 0, letterSpacing: "0.02em", textTransform: "uppercase" }}>
            {project.members.length} membres
          </p>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.45rem", marginBottom: "1rem" }}>
          {project.members.map((member) => (
            <span
              key={member}
              style={{
                background: "rgba(2, 132, 199, 0.08)",
                border: "1px solid rgba(2, 132, 199, 0.18)",
                color: "var(--accent-cyan)",
                borderRadius: "999px",
                padding: "0.35rem 0.7rem",
                fontSize: "0.8rem",
                fontWeight: 700,
                lineHeight: 1.2
              }}
            >
              {member.toUpperCase()}
            </span>
          ))}
        </div>

        <h3
          style={{
            fontSize: "1.15rem",
            marginBottom: "0.75rem",
            color: "var(--text-primary)",
            lineHeight: 1.35,
            textShadow: "0 2px 4px rgba(0,0,0,0.5)"
          }}
        >
          {project.title}
        </h3>

        <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", marginBottom: "1.25rem", flex: 1, lineHeight: 1.6 }}>
          {project.description}
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "1.5rem" }}>
          {project.tags.map((tag) => (
            <span
              key={tag}
              style={{
                background: "rgba(124, 58, 237, 0.1)",
                border: "1px solid rgba(124, 58, 237, 0.2)",
                padding: "0.25rem 0.7rem",
                borderRadius: "10px",
                fontSize: "0.72rem",
                color: "var(--accent-purple)",
                fontWeight: 600
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        <div style={{ display: "flex", gap: "0.75rem", marginTop: "auto", flexWrap: "wrap" }}>
          {project.portfolioLink ? (
            <a
              href={project.portfolioLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ flex: 1, padding: "0.6rem", fontSize: "0.85rem", minWidth: "120px" }}
            >
              Demo / Doc
            </a>
          ) : (
            <span
              className="btn btn-primary"
              style={{ flex: 1, padding: "0.6rem", fontSize: "0.85rem", opacity: 0.4, cursor: "not-allowed", minWidth: "120px" }}
            >
              Demo / Doc
            </span>
          )}

          {project.articleLink ? (
            <a
              href={project.articleLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
              style={{ flex: 1, padding: "0.6rem", fontSize: "0.85rem", minWidth: "120px" }}
            >
              Article
            </a>
          ) : (
            <span
              className="btn btn-ghost"
              style={{ flex: 1, padding: "0.6rem", fontSize: "0.85rem", opacity: 0.4, cursor: "not-allowed", minWidth: "120px" }}
            >
              Article
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
