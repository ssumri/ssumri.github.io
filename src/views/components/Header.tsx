import React from 'react';
import '../../resources/styled/App.css';
import { SHeader, Nav, StyledSocialIcons } from '../../resources/styled/Headerstyled';
import { Container, BorderedContainer } from '../../resources/styled/Container';
import { Button } from '../../resources/styled/Button';
import { Flex } from '../../resources/styled/Flexbox';
import { Image } from '../../resources/styled/Imagestyled';
import { FaLinkedin, FaGithub, FaFileAlt } from 'react-icons/fa';
import portpic from '../../files/PortfolioPics2.png';

function Header() {
  return (
    <div>
      <SHeader>
        <Container>
          <Nav>
            <Image src={portpic} alt="Samriddhi Picture"/>
            <h1>Samriddhi Lamichhane</h1>
            <BorderedContainer>
              <Flex>
                <StyledSocialIcons>
                  <a href="https://github.com/ssumri">
                    <FaGithub size={40} id="github" />
                  </a>
                </StyledSocialIcons>
                <StyledSocialIcons>
                  <a href="https://www.linkedin.com/in/samriddhi-lamichhane-b193431b5/">
                    <FaLinkedin size={40} id="linkedin" />
                  </a>
                  </StyledSocialIcons>
                <StyledSocialIcons>
                  <a href="https://drive.google.com/file/d/1PCrjxW8JcSwXFSKrXFUidj5QCYkgPX6I/view?usp=sharing" target="blank">
                    <FaFileAlt size={40} id="resume" />
                  </a>
                </StyledSocialIcons>
              </Flex>
            </BorderedContainer>
          </Nav>
        </Container>
      </SHeader>
    </div>
  );
}


export default Header;

