import Pill from '../Pill/Pill';
import './ProjectCard.css';

export default function ProjectCard({ project }) {
  return (
    <div className="project-card">
     
      <div className="project-content">

        <div className="project-title-row">
        <h3 className="project-title">{project.title}</h3>
        <Pill type="status" name={project.status}/>
        </div>


        <p className="project-subheading">{project.subheading}</p>
       
        
        <div className="project-pills">
          {project.techStack.map((tech) => (
            <Pill key={tech} type="project" name={tech} />
          ))}
        </div>
         <p className="project-desc">{project.description}</p>
         <img src={project.image} alt={project.imageAlt} className="project-image" />
        <div className="project-links">
          <a href={project.githubUrl} target="_blank" rel="noopener">GitHub</a>
          {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener">Live Demo</a>}
        </div>
      </div>
    </div>
  );
}