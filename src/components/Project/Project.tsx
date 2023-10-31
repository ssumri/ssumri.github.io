import { Container } from "./styles";

export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">
        <div className="project">
          <header></header>
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
