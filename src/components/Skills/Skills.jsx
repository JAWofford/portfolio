import Pill from './Pill';
import './Skills.css';

const skills = ['Java', 'Spring Boot', 'React', 'MySQL', 'JavaScript', 'HTML', 'CSS', 'Git & GitHub'];

export default function Skills() {
  return (
    <section className="skills-section">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skills.map((skill) => (
          <Pill key={skill} name={skill} />
        ))}
      </div>
    </section>
  );
}