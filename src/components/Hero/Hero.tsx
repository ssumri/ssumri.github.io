import { BrowserRouter } from "react-router-dom";
import { Container } from "./styles";
import { NavHashLink } from "react-router-hash-link";
import linkedin from "../../assets/linkedin.svg";
import githubIcon from "../../assets/github.svg";
import whatsapp from "../../assets/whatsapp.svg";
import Hello from "../../assets/Hello.gif";
export function Hero() {
  return (
    <Container id="home">
      <div className="hero-text">
        <p>
          Hello <img src={Hello} alt="Hello" width="20px" />, I'm
        </p>
        <h1>Samriddhi Lamichhane</h1>
        <h3>Software Engineer</h3>
        <p className="small-resume">New-Grad</p>
        <BrowserRouter>
          <NavHashLink smooth to="#contact" className="button">
            Contact
          </NavHashLink>
        </BrowserRouter>
        <div className="social-media">
          <a
            href="https://www.linkedin.com/in/samriddhil"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedin} alt="Linkedin" />
          </a>
          <a href="https://github.com/ssumri/" target="_blank" rel="noreferrer">
            <img src={githubIcon} alt="GitHub" />
          </a>
        </div>
      </div>
    </Container>
  );
}
