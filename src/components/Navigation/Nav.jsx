import "./Nav.css";

export default function Nav() {
    return (
        <div className="nav-circle-wrap">

            <div className="nav-circle-fill"></div>
            <svg className="nav-circle-border" viewBox="0 0 280 280">
                <circle cx="140" cy="140" r="120"></circle>
            </svg>

            <div className="nav-circle-links">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            </div>

            <a href="#top" className="floating-top">Top</a>
            
       </div>
    )
}
