import React, {useState} from 'react'

interface Props {

}

const CatImageCreator: React.FC<Props> = () => {

    const [image, setImage] = useState('https://placekitten.com/g/0/0')

    const [width, setWidth] = useState(0)
    const [height, setHeight] = useState(0)

    const handleWidthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setWidth(parseInt(event.target.value))
        console.log(width)
    }

    const handleLengthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setHeight(parseInt(event.target.value))
        console.log(height)
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setImage(`https://placekitten.com/g/${width}/${height}`)
    }
    return (
        <div>
            <div>
                <form onSubmit={handleSubmit}>
                    <input placeholder = 'width length in px' name = 'width' onChange={handleWidthChange}></input>
                    <input placeholder = 'height length in px' name = 'height' onChange={handleLengthChange}></input>
                    <button type = 'submit'>Pick Yo Cat</button>
                </form>
            </div>
            <img src = {image} alt = 'penguin'></img>
        </div>
    )
}
//https://placekitten.com/g/1920/1080
export default CatImageCreator