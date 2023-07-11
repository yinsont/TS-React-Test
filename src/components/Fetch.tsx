import React, {useState, useEffect} from 'react'

interface Props {

}

const Fetch: React.FC<Props> = () => {

    useEffect(() => {
    }, [])

    const handleClickEvent = () => {
        fetch ('https://www.freetogame.com/api/games')
        .then(r => r.json())
        .then(data => console.log(data))
    }
    return (
        <div>
            <button onClick={handleClickEvent}>Fetch</button>
        </div>
    )
}

export default Fetch