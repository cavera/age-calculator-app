import React, { useContext, useState, useEffect } from 'react'
import { AgeContext } from '../Context/AgeContext'

const useDateInput = (inputRef, id) => {
  const [inputState, setInputState] = useState('normal')
  const {
    maxVal,
    inputDay,
    inputMonth,
    required,
    inputYear,
    updateDay,
    updateMonth,
    updateYear,
    setRequired
  } = useContext(AgeContext)

  const updateInput = {
    day: updateDay,
    month: updateMonth,
    year: updateYear
  }

  const inputNames = {
    day: inputDay,
    month: inputMonth,
    year: inputYear
  }

  const inputStates = {
    required: 'This field is required',
    invalid: id !== 'year' ? `Must be a valid ${id}` : 'Must be in the past',
    normal: ''
  }

  const inputChange = () => {
    setRequired(false)
    validateTypeVal()
    validateMaxVal()
  }

  const validateMaxVal = () => {
    if (inputRef.current.value > maxVal[id]) {
      setInputState('invalid')
    } else {
      setInputState('')
    }
  }

  const validateTypeVal = () => {
    if (inputRef.current.value.match(/[0-9]/)) {
      inputRef.current.value = inputRef.current.value
    } else {
      inputRef.current.value = ''
    }
  }

  useEffect(() => validateMaxVal(), [maxVal])
  useEffect(() => {
    console.log('value', inputRef.current.value, inputRef.current.value.lenght)
    if (!inputRef.current.value) {
      setInputState('required')
    }
  }, [required])

  return {
    inputState,
    inputStates,
    inputChange,
    updateInput
  }
}

export { useDateInput }
