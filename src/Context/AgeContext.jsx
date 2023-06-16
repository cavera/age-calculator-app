import React, { useState } from 'react'
import { createContext } from 'react'
import { useMaxDate } from '../hooks/DateCalc'

const AgeContext = createContext()

const AgeProvider = ({ children }) => {
  const [inputDay, setInputDay] = useState('')
  const [inputMonth, setInputMonth] = useState('')
  const [inputYear, setInputYear] = useState('')
  const [required, setRequired] = useState(false)

  const { maxVal } = useMaxDate({ month: inputMonth, year: inputYear })

  const updateDay = value => setInputDay(value)
  const updateMonth = value => setInputMonth(value)
  const updateYear = value => setInputYear(value)

  return (
    <AgeContext.Provider
      value={{
        maxVal,
        inputDay,
        inputMonth,
        inputYear,
        required,
        updateDay,
        updateMonth,
        updateYear,
        setRequired
      }}
    >
      {children}
    </AgeContext.Provider>
  )
}

export { AgeContext, AgeProvider }
