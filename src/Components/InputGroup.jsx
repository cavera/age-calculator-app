import React, { useRef } from 'react'
import { useDateInput } from '../hooks/useDateInput'

const InputGroup = ({ name, id, placeholder }) => {
  const inputRef = useRef()
  const maxLen = placeholder.length

  const { inputState, inputStates, inputChange, updateInput } = useDateInput(
    inputRef,
    id
  )

  const handleChange = e => {
    const value = inputRef.current.value
    updateInput[id](value)
    inputChange()
  }

  return (
    <div className={`input-group ${inputState}`}>
      <label>
        {name}
        <input
          ref={inputRef}
          type='text'
          name={name}
          id={id}
          placeholder={placeholder}
          defaultValue={''}
          // required
          minLength={1}
          maxLength={maxLen}
          onChange={handleChange}
          autoComplete='off'
        />
      </label>
      <p className='input-group--text'>{inputStates[inputState]}</p>
    </div>
  )
}

export default InputGroup
