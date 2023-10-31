import { Container } from "./styles";
import { Hero } from "../Hero/Hero";
import { Contact } from "../Contact/Contact";
import { Project } from "../Project/Project";

export function Main() {
  return (
    <Container>
      <Hero />
      <Project />
      <Contact />
    </Container>
  );
}
