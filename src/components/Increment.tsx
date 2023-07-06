import React from 'react'

interface Props {
    increment: () => void;
}

const Increment: React.FC<Props> = ({increment}) => {
    return(
        <button onClick={increment}>Increment</button>
    )
}

export default Increment