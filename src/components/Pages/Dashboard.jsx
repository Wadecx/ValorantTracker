import React, { useState, useEffect } from 'react'
import Navbar from '../Navbar'
import ModeSwitch from '../ModeSwitch'
import Player from '../Player'


const Dashboard = (props) => {

  const userDataUrl = `https://api.henrikdev.xyz/valorant/v1/account/${props.riotId}/${props.riotTag}`
  const [playerData, setPlayerData] = useState([]);

  const getData = async () =>{
    const responseUser = await fetch(userDataUrl).then(res => res.json());
    setPlayerData(responseUser.data);
    console.log(playerData);
  }

  useEffect(() => {
    getData(); 
  
  }, [props.riotId])
  


  return (
    <div className="dashboard">
        <Navbar/>

      <main>
        <div className="panels">
        <ModeSwitch/>
        <Player playerData={playerData}/>
        </div>
      </main>
    </div>
  )
}

export default Dashboard