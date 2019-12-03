import React, {createContext,useState} from 'react';

export const GameContext = createContext();

const GameContextProvider = (props) => {

    // const[games,setGames] = useState([
    //     {hometeam:'Lakers', homeId:1, homepts:102, awayteam:'Warriors', awayId:8, awaypts:123,id:1, date:'2019-12-01'},
    //     {hometeam:'Thunder', homeId:2, homepts:98, awayteam:'Pacers', awayId:9, awaypts:133, id:2,date:'2019-12-01'},
    //     {hometeam:'Celtics', homeId:3, homepts:103, awayteam:'Magic', awayId:10,awaypts:183, id:3, date:'2019-12-01'},
    //     {hometeam:'Blazers', homeId:4, homepts:122, awayteam:'Suns', awayId:11,awaypts:98, id:4,date:'2019-12-01'},
    //     {hometeam:'Spurs', homeId:5, homepts:162, awayteam:'Timberwolves', awayId:12,awaypts:75, id:5,date:'2019-12-01'},
    //     {hometeam:'Jazz', homeId:6, homepts:98, awayteam:'76ers', awayId:13,awaypts:90, id:6,date:'2019-12-01'},
    //     {hometeam:'Rockets', homeId:7, homepts:145, awayteam:'Bucks', awayId:14,awaypts:100, id:7,date:'2019-12-01'}
    // ]);
    const games=[{hometeam:'Lakers', homeId:1, homepts:102, awayteam:'Warriors', awayId:6, awaypts:123,id:1, date:'2019-12-01'},
            {hometeam:'Thunder', homeId:5, homepts:98, awayteam:'Pacers', awayId:4, awaypts:133, id:2,date:'2019-12-01'},
            {hometeam:'Celtics', homeId:2, homepts:103, awayteam:'Thunder', awayId:5,awaypts:183, id:3, date:'2019-12-01'},
            {hometeam:'Bulls', homeId:3, homepts:122, awayteam:'Suns', awayId:9,awaypts:98, id:4,date:'2019-12-01'},
            {hometeam:'Pacers', homeId:4, homepts:162, awayteam:'Lakers', awayId:1,awaypts:75, id:5,date:'2019-12-01'},
            {hometeam:'Pelicans', homeId:8, homepts:98, awayteam:'Bulls', awayId:3,awaypts:90, id:6,date:'2019-12-01'},
            {hometeam:'Suns', homeId:9, homepts:145, awayteam:'Celtics', awayId:2,awaypts:100, id:7,date:'2019-12-01'}]

    const firstmatch= games[Math.floor(Math.random()*games.length)]
    const firstwinner=firstmatch.homepts> firstmatch.awaypts ? {chosenId:firstmatch.homeId, chosenpt:firstmatch.homepts, chosenTeam:firstmatch.hometeam} :{chosenId:firstmatch.awayId, chosenpt:firstmatch.awaypts, chosenTeam:firstmatch.awayteam}
    const firstloser=firstmatch.homepts< firstmatch.awaypts ? {chosenId:firstmatch.homeId, chosenpt:firstmatch.homepts, chosenTeam:firstmatch.hometeam} :{chosenId:firstmatch.awayId, chosenpt:firstmatch.awaypts, chosenTeam:firstmatch.awayteam}

    const loc = firstmatch.homepts>firstmatch.awaypts ?{winner:'home',loser:'away'} : {winner:'away',loser:'home'};

    const teamList=[
        {teamId:1, teamName:'Lakers'},
        {teamId:2, teamName:'Celtics'},
        {teamId:3, teamName:'Bulls'},
        {teamId:4, teamName:'Pacers'},
        {teamId:5, teamName:'Thunder'},
        {teamId:6, teamName:'Warriors'},
        {teamId:7, teamName:'Jazz'},
        {teamId:8, teamName:'Pelicans'},
        {teamId:9, teamName:'Suns'}]


    let tempList = teamList.filter(team => team.teamId !== firstwinner.chosenId)
    let newChoices=[{teamId:firstwinner.chosenId, teamName:firstwinner.chosenTeam}]
    for (let i = 0 ; i<5 ;i++){
        newChoices.push(tempList[Math.floor(Math.random()*tempList.length)])
    }
    newChoices.sort(() => Math.random() - 0.5);

    
    const[match,setMatch] = useState(firstmatch);

    const[winner,setWinner] = useState(firstwinner);

    const[loser,setLoser] = useState(firstloser);

    const[location,setLocation] = useState(loc);

    const[choices,setChoices]= useState(newChoices);

    const[outcome,setOutcome]= useState(false);

    const[ans,setAns]=useState('');

    // const initMatch = (games) => {
    //     setMatch(games[Math.floor(Math.random()*games.length)])
    // }

    // const initWinner = (match) => {
    //     setWinner(match.homepts> match.awaypts ? {chosenId:match.homeId, chosenTeam:match.hometeam} :{chosenId:match.awayId, chosenTeam:match.awayteam})
    // }

    // const initChoices = (chosenTeam,teamIdList) =>{

    //     setChoices([...newChoices,chosenTeam])
    // }
    // const[match,setMatch] = useState(games[Math.floor(Math.random()*games.length)]);
    // const[winner,setWinner] = useState(match.homepts> match.awaypts ? {chosenId:match.homeId, chosenTeam:match.hometeam} :{chosenId:match.awayId, chosenTeam:match.awayteam} )
    // console.log(match,winner)
    // // const chooseNewMatch = () =>{
    // //     let chosengame=games[Math.floor(Math.random()*games.length)]
    // //     setMatch(chosengame);
    // //     let winnerStats = match.homepts> match.awaypts ? {chosenId:match.homeId, chosenTeam:match.hometeam} :{chosenId:match.awayId, chosenTeam:match.awayteam} 
    // //     setWinner(winnerStats);
    // //     console.log(chosengame,winnerStats)

    const checkGame= (selChoice) => {
        if(selChoice.teamId ===winner.chosenId){
            console.log('u won');
            setOutcome(true);  
            setAns('') 
    } else{
        // removeChoice(selChoice);
        setChoices(choices.filter(choice => choice.teamId !==selChoice.teamId))
        let tempAns=ans? ans+'!':'Incorrect!'
        setAns(tempAns)
        console.log(selChoice.teamId);
        console.log(winner.chosenId);
    };
    }

    // const removeChoice = (wrongChoice) =>{
    //     console.log('wrong choice');
        

    // }
    


    return (
        <GameContext.Provider value={{match,winner,choices,location,setOutcome,checkGame,loser,ans,outcome}}>
            {props.children}
        </GameContext.Provider>
    )
}

export default GameContextProvider;