import React, {useState, useEffect} from 'react'

interface Props {

}

const Fetch: React.FC<Props> = () => {

    useEffect(() => {
    
    }, [])
    const handleClickEvent = () => {
            fetch ('https://pokeapi.co/api/v2/pokemon/ditto')
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