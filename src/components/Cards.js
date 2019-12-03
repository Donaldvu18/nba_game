import React, {useContext} from 'react';
import {GameContext} from '../contexts/GameContext';

const Cards = ({option}) => {
    const {checkGame} = useContext(GameContext);
    const tempStyle1={
        alignItems:'flex-end'
    }
    return (
        <div className='bg-info border border-danger' >
         
        <div onClick={ () => checkGame(option) }>{option.teamId} {option.teamName}</div>
          
        </div>
    )
}
export default Cards;

