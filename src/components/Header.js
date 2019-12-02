import React, {useContext} from 'react';
import {GameContext} from '../contexts/GameContext';

const Header = () => {
    const {games,match} = useContext(GameContext);
    return (
        <div className='header container text-center'>
            <h1>Guess the Team</h1>
            <h2>{match.hometeam} {match.homepts} - {match.awaypts} {match.awayteam}</h2>
        </div>
    );

}

export default Header;