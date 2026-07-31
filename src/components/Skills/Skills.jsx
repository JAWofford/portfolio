import Pill from '../Pill/Pill';
import './Skills.css';

const skills = ['Java', 'Spring Boot', 'JavaScript', 'React', 'MySQL', 'REST APIs', 'HTML', 'CSS', 'Git & GitHub'];

export default function Skills() {
  return (
    <section className="section" id="skills">
      <h2 className="section-title">Skills</h2>
      <div className="skills-grid">
        {skills.map((skill) => (
          <Pill key={skill} name={skill} type="skill" />
        ))}
      </div>
    </section>
  );
}