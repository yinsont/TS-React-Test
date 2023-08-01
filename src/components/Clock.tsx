import React, {useState, useEffect} from 'react'

interface Props{

}

const Clock: React.FC<Props> = () => {
    const [time, setTime] = useState('')

    useEffect(() => {
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();
        setTime(`${hours}:${minutes}:${seconds}`); 

        const intervalId = setInterval(() => {
            const newNow = new Date();
            const newHours = newNow.getHours();
            const newMinutes = newNow.getMinutes();
            const newSeconds = newNow.getSeconds();
            setTime(`${newHours}:${newMinutes}:${newSeconds}`);
        }, 1000);
    
        return () => clearInterval(intervalId);
    }, [])

    return(
        <h3>{time}</h3>
    )
}

export default Clock