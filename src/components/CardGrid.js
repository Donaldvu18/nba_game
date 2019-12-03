import React, {useContext} from 'react';
import {GameContext} from '../contexts/GameContext';
import Card from './Cards';
import image01 from '../img/congrats.jpg'


const CardGrid = () => {
    const {match,winner,choices,removeChoice,ans,checkGame,outcome,setOutcome} = useContext(GameContext);
    // console.log(match)
    // console.log(winner)
    // console.log(choices)

    const tempStyle={
        
        // alignItems:'flex-start'
    }

    const testStyle={
        flexWrap:'wrap'
    }

    const resetGame = () => {
        setOutcome(false);
        window.location.reload(true);
    }
    
    return (
        <div className='bg-primary text-center optiongrid'>        
    
            {/* <h1>{winner.chosenId} {winner.chosenTeam}</h1> */}
            
            <div className='bg-white status'>{ans}<span id='placehold'></span></div>
            <div className=' d-flex justify-content-around optionrow' style={testStyle}>
            {outcome ? <div class="imgcont"><img class="card-img-top" src={image01}></img>
                        <button class='my-4 btn btn-light' onClick={resetGame}>Play Again?</button></div> :( 
                choices.map(choice =><Card option={choice}/>)
            )}

            </div>

        </div>
    )
}
export default CardGrid;