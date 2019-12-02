import React, {createContext,useState} from 'react';

export const GameContext = createContext();

const GameContextProvider = (props) => {

    const[games,setGames] = useState([
        {hometeam:'Lakers', homepts:102, awayteam:'Warriors', awaypts:123,id:1},
        {hometeam:'Thunder', homepts:98, awayteam:'Pacers', awaypts:133, id:2},
        {hometeam:'Celtics', homepts:103, awayteam:'Magic', awaypts:183, id:3},
        {hometeam:'Blazers', homepts:122, awayteam:'Suns', awaypts:98, id:4},
        {hometeam:'Spurs', homepts:162, awayteam:'Timberwolves', awaypts:75, id:5},
        {hometeam:'Jazz', homepts:98, awayteam:'76ers', awaypts:90, id:6},
        {hometeam:'Rockets', homepts:145, awayteam:'Bucks', awaypts:100, id:7}
    ]);

    const removeGame= (id) => {
        setGames(games.filter(game => game.id !== id));
    };
    return (
        <GameContext.Provider value={{games,removeGame}}>
            {props.children}
        </GameContext.Provider>
    )
}

export default GameContextProvider;