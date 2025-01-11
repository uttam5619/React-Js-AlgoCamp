import { useState } from "react";
import TextInputForm from "./TextInputForm";

function TextInputFormContainer(){

    const [text, setText] = useState('hide')
    const [textType, setTextType] = useState('text')

    const [valueContainer, setValueContainer] = useState('')

    const handleTextInputFormSubmission =(e)=>{
        e.preventDefault();
        console.log(`form submmited with data: ${valueContainer}`)
        
    }

    const showInputBody = (e)=>{
        console.log(e.target.value)
        setValueContainer(e.target.value)
    }

    const handleDisplay =()=>{

        if(text=='hide'){
            setText('show')
            setTextType('password')
        }else{
            setText('hide')
            setTextType('text')
        }
        console.log(`button text changed to ${text}`)
        console.log(`text type changed to ${textType}`)

    }

    return (
        <TextInputForm 
            handleFormSubmit={handleTextInputFormSubmission} 
            handleInputBody={showInputBody}
            handleButtonText={handleDisplay}
            buttonText={text}
            inputType={textType}
        />
    )
}

export default TextInputFormContainer