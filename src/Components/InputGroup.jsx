import React, { useRef } from 'react'
import { useDateInput } from '../hooks/useDateInput'

const InputGroup = ({ name, id, placeholder }) => {
  const inputRef = useRef()

  const { inputState, inputStates, inputChange, updateInput } = useDateInput(
    inputRef,
    id
  )

  const handleChange = e => {
    updateInput[id](inputRef.current.value)
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
          placeholder={placeholder}
          defaultValue={''}
          maxLength={placeholder.length}
          onChange={handleChange}
          autoComplete='off'
          inputMode='numeric'
        />
      </label>
      <p className='input-group--text'>{inputStates[inputState]}</p>
    </div>
  )
}

export default InputGroup
