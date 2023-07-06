import React from 'react'

interface Props {
    text: string;
    boo?: boolean;
    num?: number
}

const Hello: React.FC<Props> = ({ text }) => {
    return (
        <div>
            <h1>{text}</h1>
        </div>
    )
}

export default Hello