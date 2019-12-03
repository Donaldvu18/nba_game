import React, {useContext,useState} from 'react';
import {GameContext} from '../contexts/GameContext';
import image02 from './team01.jpg'
const Cards = ({option}) => {
    const {checkGame,ans,setAns,setOutcome,winner} = useContext(GameContext);
    const tempStyle1={
  
    }
    const imgurl='../img/team0'+option.teamId+'.jpg'
    const [tog,setTog] =useState(false) 
    const classtest=tog? 'fadeout ':''
    const classgo=classtest + 'option col-3 border border-danger'
    console.log(classgo)

    
    const checkVisible= (selChoice) => {
        if(selChoice.teamId ===winner.chosenId){
            console.log('u won');
            setOutcome(true);  
            setAns('') 
    } else{
        // removeChoice(selChoice);
        // newlist=choices.filter(choice => choice.teamId !==selChoice.teamId)
        // newlist.push({...selChoice,visible:false})
        let tempAns=ans? ans+'!':'Incorrect!'
        setAns(tempAns)
        setTog(true);
        // console.log(newlist);
        console.log(winner.chosenId);
    };
    }

    return (
     
         
        <div className={classgo} onClick={()=>checkVisible(option)}>
            <img class='logo' src={image02}></img>
            {option.teamName}</div>
   
    )
}
export default Cards;

