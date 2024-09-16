import TextInputForm from "./TextInputForm";

function TextInputFormContainer(){

    const handleTextInputFormSubmission =(e)=>{
        e.preventDefault();
        console.log(`form submmited`)
    }

    const showInputBody = (e)=>{
        console.log(e.target.value)
    }

    return (<TextInputForm handleFormSubmit={handleTextInputFormSubmission} handleInputBody={showInputBody}/>)
}

export default TextInputFormContainer