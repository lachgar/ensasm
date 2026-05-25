import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';

export default function ProjectGrid() {
  return (
    <section id="projects" style={{ padding: '4rem 0 6rem' }}>
      <div className="container">
        <h2 className="text-gradient" style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center', fontWeight: 'bold' }}>Projets à la Une</h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', 
          gap: '2.5rem' 
        }}>
          {projects.map(project => (
             <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
