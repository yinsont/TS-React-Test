import React from 'react'

interface Props {
    decrement:() => void
}

const Decrement: React.FC<Props> = ({decrement}) => {
    return(
        <button onClick={decrement}>Decrement</button>
    )
}

export default Decrement