import React from 'react'

interface Props{

}

const ClickTest: React.FC<Props> = () => {
    const handleClickEvent = () => {
        console.log('clicked')
    }
    return(
        <div>
            <button onClick={handleClickEvent}>Click Me</button>
        </div>
    )
}

export default ClickTest