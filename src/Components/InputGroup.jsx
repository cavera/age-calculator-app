import React, { useState, useRef, useEffect, useContext } from 'react'
import { AgeContext } from '../Context/AgeContext'

const InputGroup = ({ name, id, placeholder }) => {
  const [inputval, setInputval] = useState('')
  const [inputState, setInputState] = useState('')

  const { maxVal, setMonth } = useContext(AgeContext)

  const inputRef = useRef()

  const requiredString = 'This field is required'
  const invalidString =
    id !== 'year' ? `Must be a valid ${id}` : 'Must be in the past'

  useEffect(() => {
    if (inputval > maxVal[id]) {
      setInputState('invalid')
      setInputval(invalidString)
    } else {
      setInputState('')
      setInputval('')
    }
  }, [maxVal])

  const handleChange = e => {
    const value = inputRef.current.value

    if (id === 'month') {
      setMonth(value)
    }

    if (value.match(/[0-9]/)) {
      setInputval(value)
      e.target.value = value
    } else {
      setInputval('')
      e.target.value = ''
    }
    if (value > maxVal[id]) {
      setInputState('invalid')
      setInputval(invalidString)
    } else {
      setInputState('')
      setInputval('')
    }
  }

  const maxLen = placeholder.length

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
          required
          minLength={1}
          maxLength={maxLen}
          onChange={handleChange}
          autoComplete='off'
        />
      </label>
      <p className='input-group--text'>{inputval}</p>
    </div>
  )
}

export default InputGroup
