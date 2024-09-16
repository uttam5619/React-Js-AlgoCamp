import React from 'react'
import getButtonStyle from './getButtonStyle'

const Button = ({ buttonType = 'primary', text='click' }) => {

  return (
    <button className={getButtonStyle(buttonType)}>
        {text}
    </button>
  )
  
}

export default Button