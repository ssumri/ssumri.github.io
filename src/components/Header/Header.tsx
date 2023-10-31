import { Container } from "./styles";
import { BrowserRouter as Router } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useState } from "react";

export function Header() {
  const [isActive, setActive] = useState(false);

  return (
    <Container className="header-fixed">
      <Router>
        <HashLink smooth to="#home" className="logo">
          <span>Sami</span>
        </HashLink>

        <nav className={isActive ? "active" : ""}>
          <a
            href={
              "https://drive.google.com/file/d/1PCrjxW8JcSwXFSKrXFUidj5QCYkgPX6I/view?usp=sharing"
            }
            className="button"
          >
            Resume
          </a>
        </nav>
        <div
          aria-expanded={isActive ? "true" : "false"}
          aria-haspopup="true"
          aria-label={isActive ? "Fechar menu" : "Abrir menu"}
          className={isActive ? "menu active" : "menu"}
          onClick={() => {
            setActive(!isActive);
          }}
        ></div>
      </Router>
    </Container>
  );
}
