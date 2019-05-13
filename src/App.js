import React from 'react';
import Pokedex from './pokedex';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Pokedex />
      </div>
    );
  }
}



// function App() {
//   //static defaultProps = {pokies};
  
//   return (
//     <div className="App">
//       <Pokedex pokemon={pokies}/>
//     </div>
//   );
// }

export default App;
