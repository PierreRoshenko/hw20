import React, { useEffect, useState } from 'react'

export  const Timer = (props)=>{
    const[timerValue, setValue] = useState(props.time)
    const[isGoing, setState]=useState(props.going)

    useEffect(()=>{
        const ticks = setInterval(()=>{
            if(isGoing&&timerValue>0){
                setValue(timerValue-props.step)
                props.onTick(convertor(timerValue-props.step))
            } else if (isGoing&&timerValue<=0){
                setValue(props.time)
                setState(false)
                console.log("Time over!");
                clearInterval(ticks)
            } else if (!isGoing&&timerValue<=0){
                setValue(props.time)
            } else {
                setValue(timerValue)
            }
        },props.step)

        return(()=>{
            clearInterval(ticks)
        })
    },[timerValue,isGoing,props])

   const convertor = (ms)=>{
        if(ms<0){
            ms=0
        }
        const min = Math.floor(ms / 60000);
        const sec = ((ms % 60000) / 1000).toFixed(0);
        return min + ":" + (sec < 10 ? '0' : '') + sec;
    }

    const pause = ()=> isGoing?setState(false):setState(true)
    
    return(
        <div className="timer">
            <p className="timer_digits">{convertor(timerValue)}</p>
            <button className='btn' onClick = {pause}>{isGoing?'Pause':'Continue'}</button>
        </div>
    )
}