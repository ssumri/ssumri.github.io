import React from 'react';
import '../../resources/styled/App.css';
import {Container} from '../../resources/styled/Container';
import {ListCard, SCard} from '../../resources/styled/CardsStyled';
import { Flex } from '../../resources/styled/Flexbox';
import { Image } from '../../resources/styled/Imagestyled';
import portpic from '../../files/PortfolioPics.png';

function Info() {
    return (
        <>
            <Container justify-content="space-between">
                <h4> Enthusiastic Computer Science Sophomore at University of Colorado Boulder </h4>   
            </Container>

            <SCard>
                <h2>About Me</h2>
                <h4>Hello! My name is Samriddhi Lamichhane but I go by Sami and I am currently a sophomore at the University of Colorado Boulder (go buffs!). </h4>
            </SCard>

            <SCard>
                <h2> Projects </h2>
                <h4>Dino Dungeons</h4>
                <p> 2d platformer game built using the Unity Game Engine </p>
            </SCard>
            <Flex>
                <ListCard>
                    <ul> Hobbies
                        <li>Working Out</li>
                        <li>Coding</li>
                        <li>Hiking</li>
                        <li>Biking</li>
                    </ul>
                    <ul>
                        <li></li>
                        <li>Journaling</li>
                        <li>Researching Random Topics</li>
                        <li>Gaming</li>
                    </ul>
                </ListCard>
                <ListCard>
                    <ul> Interests
                        <li>True Crime</li>
                        <li>Marvel Movies</li>
                        <li>Dark Comedy Cartoons</li>
                    </ul>
                    <ul>
                        <li></li>
                        <li>Manga/Anime</li>
                        <li>Game Development</li>
                        <li>Cloud Computing</li>
                    </ul>
                </ListCard>
            </Flex>
            
        </>
    );
}

export default Info;
