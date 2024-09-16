import React from 'react'
import getTextInputStyle from './getTextInputStyle'

const TextInput = ({type='text', placeholder='se@rch', size='medium', handleInputBody}) => {

  return (
    <React.Fragment>
        <input
          type={type}
          placeholder={placeholder}
          className={getTextInputStyle(size)}
          onChange={handleInputBody}>
        </input>
    </React.Fragment>
  )
}

export default TextInput