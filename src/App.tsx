import React from 'react';
import {Container} from './resources/styled/Container'
import SHeader from './views/components/Header';
import Footer from './views/components/Footer';
import Info from './views/components/Info';
import './resources/styled/App.css';
import { Glstyle } from './resources/styled/Globals';



class App extends React.Component{
  render() {
    return (
      <>
        <Glstyle />
        <SHeader />
        <Container>
        </Container>
        <Info />
        <Footer/>
      </>
    );
  }
}

export default App;
