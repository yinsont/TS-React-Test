import React, {useState, useEffect} from 'react'

interface Props {

}

const QuoteGenerator: React.FC<Props> = () => {
    const [quote, setQuote] = useState<string>('')
    const [author, setAuthor] = useState<string>('')

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        // fetch('https://api.quotable.io/random')
        // .then(r => r.json())
        // .then(d => (console.log(d[0]), setQuote(d[0].content), setAuthor(d[0].author)));
        fetch('https://animechan.xyz/api/random')
            .then(r => r.json())
            .then(d => (console.log(d), setQuote(d.quote), setAuthor(d.character)))
    }
    
    return (
        <div>
            <button onClick = {handleClick}> Generate Quote </button>
            <h2>{quote}</h2>
            <h3>{author}</h3>
        </div>
    )
}

export default QuoteGenerator

//https://github.com/lukePeavey/quotable
//https://animechan.xyz/docs#random-quote