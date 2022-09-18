import React from 'react';
import '../../resources/styled/App.css';
import { Container, BorderedContainer } from '../../resources/styled/Container';
import { Button } from '../../resources/styled/Button';
import { Flex } from '../../resources/styled/Flexbox';
import { SFooter } from '../../resources/styled/Footerstyled';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';


function Footer() {
    return (
        <SFooter>
            <Container> 
                <Flex>
                    <ul>
                        <FaEnvelope /> &ensp; sumriddhi9118@gmail.com
                    </ul>
                    <ul>
                        <FaPhone />
                        &ensp; (720) 438-8645
                    </ul>
                    <ul>
                        <FaMapMarkerAlt />
                        &ensp; Westminster, Colorado
                    </ul>
                </Flex>
            </Container>
        </SFooter>
    )
}

export default Footer;