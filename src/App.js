import React, { Component} from 'react';
import './App.css';
import Data from './data';

class App extends Component{

  render(){
  return (
    <div className="App">
      <h1>Datos estáticos</h1>
      <Data/>
    </div>
  );
}
}
export default App;
