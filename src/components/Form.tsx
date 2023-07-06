import React, {useState} from 'react'

interface Props{
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}
const Form: React.FC<Props> = ({handleSubmit}) => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    
    const handleChangeFirst = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFirstName(event.target.value)
        // console.log(firstName, lastName)
    }
    const handleChangeLast = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLastName(event.target.value)
        // console.log(firstName, lastName)
    }
    return(
        <form onSubmit = {handleSubmit}>
            <input placeholder='First Name' name='firstName' value = {firstName} onChange = {handleChangeFirst}></input>
            <input placeholder='Last Name' name='lastName' value = {lastName} onChange={handleChangeLast}></input>
            <button type = 'submit'>Give Your Info</button>
        </form>
    )
}

export default Form