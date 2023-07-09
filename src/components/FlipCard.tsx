import React, {MouseEvent} from 'react'

interface Props{

}

const FlipCard: React.FC<Props> = () => {

    const handleMouseEnter = (event: MouseEvent<HTMLDivElement>) = {
        event.preventDefault()
    }
    return(
        <div onMouseEnter={handleMouseEnter}>
            {/* <h1>FlipCard</h1> */}
            <img src={require('../images/federalagent.PNG')}></img>

        </div>

    )
}

export default FlipCard