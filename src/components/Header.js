import React, {useContext} from 'react';
import {GameContext} from '../contexts/GameContext';


const Header = () => {
    const {match,winner,loser,location} = useContext(GameContext);
//     const date = moment("2018-05-18T04:00:00.000Z").format('DD MMM, YYYY');
// console.log(date);
    return (
        <div className='header text-center'>
            <div id='guess'>Guess the Winner</div>
            <div className='container justify-content-center' id='scoreboard'> 
                <div className='row'>
                    <div className='col-4'>{winner.chosenTeam}</div>
                    <div className='col-4'>{winner.chosenpt} - {loser.chosenpt}</div>
                    <div className='col-4'>{loser.chosenTeam}</div>
                </div>
            </div>
            <div className='container justify-content-between' id='locboard'> 
                <div className='row'>
                    <div className='col-4'>{location.winner}</div>
                    <div className='col-4'> </div>
                    <div className='col-4'>{location.loser}</div>
                </div>
            </div>
            <div id='headerdate'> on {match.date} </div>
        </div>
    );

}

export default Header;