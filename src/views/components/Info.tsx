import React from 'react';
import '../../resources/styled/App.css';
import {Container} from '../../resources/styled/Container';
import {SCard} from '../../resources/styled/CardsStyled';



function Info() {
    return (
        <>
            <Container>
                <h4> Hello from info </h4>
            </Container>
            <SCard>
                <h2> Insert project 1 here </h2>
            </SCard>
            <SCard>
                <h2> Insert project 2 here </h2>
            </SCard>
            <SCard>
                <h2> Insert project 3 here </h2>
            </SCard>
        </>
    );
}

export default Info;
