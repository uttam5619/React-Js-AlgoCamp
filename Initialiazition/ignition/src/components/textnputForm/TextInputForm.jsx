import React from 'react'
import TextInput from '../textinput/TextInput'
import Button from '../button/Button'

const TextInputForm = ({handleFormSubmit, handleInputBody}) => {
    return (

    <React.Fragment>
    <form onSubmit={handleFormSubmit}>
        <TextInput size='extraLarge' placeholder='enter a word or a phrase' handleInputBody={handleInputBody}/>
        <Button buttonType='primary' text='submit'/>
    </form>
    </React.Fragment>
  )
}

export  default TextInputForm