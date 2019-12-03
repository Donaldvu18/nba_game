import React ,{useEffect} from 'react';
import GameContextProvider from './contexts/GameContext';
import Header from './components/Header';
import Cards from './components/Cards';
import CardGrid from './components/CardGrid';
function App() {


  return (
    <div className='App'>
      <GameContextProvider>
        <Header/>
        <CardGrid/>
      </GameContextProvider>
    </div>
  );
}

export default App;

