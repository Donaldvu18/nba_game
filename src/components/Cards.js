import React, {useContext} from 'react';
import {GameContext} from '../contexts/GameContext';
import image02 from './team01.jpg'
const Cards = ({option}) => {
    const {checkGame} = useContext(GameContext);
    const tempStyle1={
  
    }
    const imgurl='../img/team0'+option.teamId+'.jpg'
    console.log(imgurl)
    return (
     
         
        <div className='bg-info option col-3 border border-danger' onClick={ () => checkGame(option) }>
            <img class='logo' src={image02}></img>
            {option.teamName}</div>
   
    )
}
export default Cards;

