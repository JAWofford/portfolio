import "./Hero.css";
import {FaGithub, FaLinkedin, FaEnvelope} from "react-icons/fa";

export default function Hero() {
  return (
    <div className="hero-div">
        <h1 className="hero-title">Jocelyn Wofford</h1>
        <p className="hero-tagline">Full-stack developer building with Java, Spring Boot, and React</p>
        <div className="links">
            <a href="https://github.com/JAWofford" target="_blank" rel="noopener" aria-label="GitHub"><FaGithub/></a>
             <a href="https://www.linkedin.com/in/jawofford/" target="_blank" rel="noopener" aria-label="Linkedin"><FaLinkedin/></a>
             <a href="mailto:jawofford.dev@gmail.com" aria-label="E-mail"><FaEnvelope/></a>
        </div>
    </div>
  )
}
