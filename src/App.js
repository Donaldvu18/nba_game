import React ,{useEffect} from 'react';
import GameContextProvider from './contexts/GameContext';
import Header from './components/Header';
import Cards from './components/Cards';
import CardGrid from './components/CardGrid';

function App() {

  useEffect(
    () => {
      document.body.style.background = 'linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%'
    })

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

