import React from 'react';
import Header from './views/partials/Header';
import Info from './views/partials/Info';
import './resources/css/App.css';

class App extends React.Component{
  render() {
    return (
      <div className="App">
        <Header />
        <Info />
      </div>
    );
  }
}

export default App;
