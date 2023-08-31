import { Container } from "./styles";
import externalLink from "../../assets/external-link.svg";

export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">
        <div className="project">
          <header>
            <svg
              width="50"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#23ce6b "
              stroke-width="1"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <title>Folder</title>
              <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
            </svg>
            <div className="project-links">
              <a href="ssumri.github.io" target="_blank" rel="noreferrer">
                <img src={externalLink} alt="Visit site" />
              </a>
            </div>
          </header>
          <div className="body">
            <h3>Oregon Trail</h3>
            <p>c++ project</p>
          </div>
          <footer>
            <ul className="tech-list">
              <li>c++</li>
            </ul>
          </footer>
        </div>
        <div className="project">
          <header>
            <svg
              width="50"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#23ce6b "
              stroke-width="1"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <title>Folder</title>
            </svg>
            <div className="project-links">
              <a href="ssumri.github.io" target="_blank" rel="noreferrer">
                <img src={externalLink} alt="Visit site" />
              </a>
            </div>
          </header>
          <div className="body">
            <h3>tic tac toe</h3>
            <p>React JS</p>
          </div>
          <footer>
            <ul className="tech-list">
              <li>React</li>
              <li>Javascript</li>
            </ul>
          </footer>
        </div>
        <div className="project">
          <header>
            <svg
              width="50"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#23ce6b "
              stroke-width="1"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <title>Folder</title>
            </svg>
            <div className="project-links">
              <a href="ssumri.github.io" target="_blank" rel="noreferrer">
                <img src={externalLink} alt="Visit site" />
              </a>
            </div>
          </header>
          <div className="body">
            <h3>The Gist</h3>
            <p>create frontend</p>
          </div>
          <footer>
            <ul className="tech-list">
              <li>RedwoodJS</li>
              <li>Typescript</li>
              <li>react</li>
            </ul>
          </footer>
        </div>
        <div className="project">
          <header>
            <svg
              width="50"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#23ce6b "
              stroke-width="1"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <title>Folder</title>
            </svg>
            <div className="project-links">
              <a href="ssumri.github.io" target="_blank" rel="noreferrer">
                <img src={externalLink} alt="Visit site" />
              </a>
            </div>
          </header>
          <div className="body">
            <h3>Friendly Neighborhood Dealership</h3>
            <p>java project</p>
          </div>
          <footer>
            <ul className="tech-list">
              <li>Java</li>
            </ul>
          </footer>
        </div>
      </div>
    </Container>
  );
}
