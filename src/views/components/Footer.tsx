import React from 'react';
import '../../resources/styled/App.css';
import { Container } from '../../resources/styled/Container';
import { Button } from '../../resources/styled/Button';
import { Flex } from '../../resources/styled/Flexbox';
import { SFooter } from '../../resources/styled/Footerstyled';


function Footer() {
    return (
        <SFooter>
            <Container> 
                <Flex>
                    <ul>
                        email
                    </ul>
                    <ul>
                        number
                    </ul>
                    <ul>
                        location
                    </ul>
                </Flex>
            </Container>
        </SFooter>
    )
}

export default Footer;