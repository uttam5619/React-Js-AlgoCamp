import React from 'react'
import getButtonStyle from './getButtonStyle'

const Button = ({ buttonType = 'primary', text='click', handleButtonText }) => {

  return (
    <button className={getButtonStyle(buttonType)} onClick={handleButtonText}>
        {text}
    </button>
  )
  
}

export default Button