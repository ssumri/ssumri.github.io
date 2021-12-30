import React from 'react';
import '../../resources/css/App.css';
import { Tabs, Tab, Container, Row, Col, Nav, Modal, Button, Card, NavDropdown} from 'react-bootstrap';


function Info() {
    return (
        <Container>
            <Row>
                <Col>
                    <Nav variant="tabs" defaultActiveKey="#first" className='justify-content-center'>
                    <Nav.Item>
                        <Nav.Link href="#Resume">Resume</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#Contact">Contact</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <NavDropdown title="Projects" id="projects-dropdown">
                            <NavDropdown.Item href="#action/3.1">Oregon Trail</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Dino Dungeons</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Cocktail Database Website</NavDropdown.Item>
                        </NavDropdown>
                    </Nav.Item>
                    </Nav>
                </Col>
            </Row>

            
        </Container> 
    );
}

export default Info;
