import React from 'react'
import TextInput from '../textinput/TextInput'
import Button from '../button/Button'

const TextInputForm = ({handleFormSubmit, handleInputBody, buttonText, handleButtonText, inputType}) => {
    return (

    <React.Fragment>
    <form onSubmit={handleFormSubmit}>
        <TextInput
          size='extraLarge'
          placeholder='enter a word or a phrase'
          type={inputType}
          handleInputBody={handleInputBody}
        />

        <Button buttonType='warning' text={buttonText} handleButtonText={handleButtonText} />
        <Button buttonType='primary' text='submit'/>
    </form>
    </React.Fragment>
  )
}

export  default TextInputForm