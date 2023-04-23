import React from 'react'
import { BsFillBellFill } from "react-icons/bs";
import { SiValorant } from "react-icons/si";
import { useState, useEffect } from 'react';
import './Assets/Player.css'
import { wait } from '@testing-library/user-event/dist/utils';

const Player = (props) => {
    
    
    return (
        <>
            {/* <input type="submit" value="Reload" onClick={handleSubmit} /> */}
            {props.playerData ? ( <div className="User">
                <div className="logo">
                    <BsFillBellFill className='bell' />
                </div>

                <div className="text">
                    <SiValorant className='valorant' />
                    <h4>{props.playerData.name}</h4>
                    <h4 className='tag'>#{props.playerData.tag}</h4>
                </div>
                <img src={props.playerData.card?.small} alt=''/>
            </div>) : null}
           
        </>

    )
}

export default Player