import React, {useState, useEffect} from 'react'

interface Props {

}

const QuoteGenerator: React.FC<Props> = () => {
    const [quote, setQuote] = useState<string>('')
    const [author, setAuthor] = useState<string>('')
    const [time, setTime] = useState<string>('')

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        fetch('https://api.quotable.io/quotes/random')
        .then(r => r.json())
        .then(d => (console.log(d[0]), setQuote(d[0].content), setAuthor(d[0].author)));
    }

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
    }, )
    
    return (
        <div>
            <button onClick = {handleClick}> Generate Quote </button>
            <h2>{quote}</h2>
            <h3>{author}</h3>
            <h3>{time}</h3>
        </div>
    )
}

export default QuoteGenerator

//https://github.com/lukePeavey/quotable