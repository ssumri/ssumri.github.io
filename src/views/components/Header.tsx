import React from 'react';
import '../../resources/styled/App.css';
import { SHeader, Nav, StyledSocialIcons } from '../../resources/styled/Headerstyled';
import { Container } from '../../resources/styled/Container';
import { Button } from '../../resources/styled/Button';
import { Flex } from '../../resources/styled/Flexbox';
import { Image } from '../../resources/styled/Imagestyled';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

function Header() {
  return (
    <div>
      <SHeader>
        <Container>
          <Nav>
            <h1>Samriddhi Lamichhane</h1>
            <Flex>
              <StyledSocialIcons>
                <a href="https://github.com">
                  <FaGithub/>
                </a>
              </StyledSocialIcons>
              <StyledSocialIcons>
                <a href="https://linkedin.com">
                  <FaLinkedin />
                </a>
                </StyledSocialIcons>
              <Button>
                Resume
              </Button>
            </Flex>
          </Nav>
        </Container>
      </SHeader>
    </div>
  );
}


export default Header;

