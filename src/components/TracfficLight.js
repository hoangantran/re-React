import React, { useState } from 'react';
import classNames from 'classnames/bind';
import './Style.css';

const RED = 0;
const YELLOW = 1;
const GREEN = 2;


export default function TracfficLight(){
    const [light, setLight] = useState(RED);

    setInterval(() => 
    {
        if(light === RED){
            setLight(YELLOW);
        }
        else if(light === YELLOW){
            setLight(GREEN);
        }
        else{
            setLight(RED);
        }
    },1000);

    return(
        <div className="TracfficLight">
            <div className={classNames('blub', 'red', { active: light === RED })}/>
            <div className={classNames('blub', 'yellow', { active: light === YELLOW })}/>
            <div className={classNames('blub', 'green', { active: light === GREEN })}/>
        </div>
    )
}
