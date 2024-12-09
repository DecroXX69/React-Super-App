import React, { useEffect, useState } from 'react'
import styles from './TimerWidget.module.css'
import { CircularProgressbar,buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';   
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
library.add(fas); 





export default function TimerWidget() {
    const [mainSeconds,setMainSeconds]=useState(60)
    const [secondsState,setSecondsState]=useState(60)
    const [isRunning,setIsrunning]=useState(false)
    useEffect(()=>{


if(secondsState===0)
   {
    setIsrunning(false)
    return
   }

        if(isRunning)
        {
            const interval= setInterval(()=>{

                setSecondsState((currentSeconds)=>{
                    if (currentSeconds-1>0)
                    {
                        return currentSeconds-1
                    }
                    else{
                        setIsrunning(false)
                        return 0
                    }
                })

            },1000)

            return ()=>{
                clearInterval(interval)
            }
        }
   
       
    },[isRunning])

    function getTime(totalSeconds){

        const hours= Math.floor((totalSeconds/3600)).toString().padStart(2,"0");
        //hours directly shown by dividing seconds by 3600 and it has no limit 
        const minutes= Math.floor((totalSeconds%3600)/60).toString().padStart(2,"0");
        //after converting given seconds to hour whatever seconds are remaining convert that to minutes that means if seconds are less than 3600 it will be converted to minutes
        const seconds=(totalSeconds%60).toString().padStart(2,"0")
        //after converting to minutes if remaining seconds are less than 60 convert it to seconds
        return {hours,minutes,seconds}
    
    }


    function stepHandler(step){

        if(isRunning|| (step<0 && secondsState+step<0))
            return
        else{
            setSecondsState(secondsState+step)
            setMainSeconds(secondsState+step)
        }
        

    }



    function formattedTime(time)
    {
        return `${time.hours} : ${time.minutes} : ${time.seconds}`
    }

    const percentage=(secondsState/mainSeconds)*100
    
  return (
    <div className={styles.container}>

        <div className={styles.left}>

        <CircularProgressbar value={percentage}  text={`${ formattedTime(getTime(secondsState)) }`} 

styles={{
    path: {
        stroke:`rgba(255, 106, 106)`,
        strokeWidth: "3px",
        transition: "stroke-dashoffset 0.5s ease 0s",
       
        
    },
    trail: {
        stroke: 'transparent',
        strokeWidth: "7px",
       
      
       
    },
    text: {
        fill: "white",
        fontSize: "12px",
       
    },
    

    
}}
        
        />


        </div>



        <div className={styles.right}>
            <div className={styles.time}>
                <div className={styles.hourMinSec}>
                    <p>Hours</p>
                  <FontAwesomeIcon className={styles.arrow} onClick={()=>stepHandler(3600)} icon="fa-solid fa-caret-up" />
                  
                    {getTime(secondsState).hours}
                    <FontAwesomeIcon className={styles.arrow} onClick={()=>stepHandler(-3600)} icon="fa-solid fa-caret-down" />

                    
                </div>
                <span className={styles.colon}>:</span>
                <div className={styles.hourMinSec}>
                    <p>Minutes</p>
                    <FontAwesomeIcon className={styles.arrow} onClick={()=>stepHandler(60)} icon="fa-solid fa-caret-up" />
                    {getTime(secondsState).minutes}
                    <FontAwesomeIcon className={styles.arrow} onClick={()=>stepHandler(-60)} icon="fa-solid fa-caret-down" />                    
                </div>

                <span className={styles.colon}>:</span>

                <div className={styles.hourMinSec}>
                    <p>Seconds</p>
                    <FontAwesomeIcon className={styles.arrow} onClick={()=>stepHandler(1)} icon="fa-solid fa-caret-up" />
                    {getTime(secondsState).seconds}
                    <FontAwesomeIcon className={styles.arrow} onClick={()=>stepHandler(-1)} icon="fa-solid fa-caret-down" />
                    
                </div>
            </div>
            <button onClick={()=>setIsrunning(!isRunning)}>{isRunning?'Stop':'Start'}</button>
        </div>
    </div>
  )
}
