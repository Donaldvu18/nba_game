import React from 'react';
import GameContextProvider from './contexts/GameContext';
import Header from './components/Header';
function App() {
  return (
    <div className='App'>
      <GameContextProvider>
        <Header/>
      </GameContextProvider>
    </div>
  );
}

export default App;

