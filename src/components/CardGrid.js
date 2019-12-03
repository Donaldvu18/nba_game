import React, {useContext} from 'react';
import {GameContext} from '../contexts/GameContext';
import Card from './Cards';
import { endianness } from 'os';


const CardGrid = () => {
    const {match,winner,choices,removeChoice,checkGame,outcome} = useContext(GameContext);
    // console.log(match)
    // console.log(winner)
    // console.log(choices)

    const tempStyle={
        height:'1000px',
        alignItems:'flex-end'
    }
    
  
    return (
        <div className='container'>        
            <div className='bg-primary d-flex border border-secondary'>
    
            <h1>{winner.chosenId} {winner.chosenTeam}</h1>
                <hr/>
            {outcome ? (<li>U WON!!!</li>) : (
                choices.map(choice =><Card option={choice}/>)
            )}
        
            </div>
        </div>
    )
}
export default CardGrid;