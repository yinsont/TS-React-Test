import React, {useState} from 'react'

interface Props {

}

const QuoteGenerator: React.FC<Props> = () => {
    const [quote, setQuote] = useState('')

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        fetch('https://api.quotable.io/quotes/random')
        .then(r => r.json())
        .then(d => setQuote(d[0].content))
    }
    return (
        <div>
            <button onClick = {handleClick}> Generate Quote </button>
            <h3>{quote}</h3>
        </div>
    )
}

export default QuoteGenerator