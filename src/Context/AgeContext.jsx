import React, { useState } from 'react'
import { createContext } from 'react'
import { useMaxDate } from '../services/DateCalc'

const AgeContext = createContext()

const AgeProvider = ({ children }) => {
  const [month, setMonth] = useState(new Date().getMonth())

  const { maxVal } = useMaxDate({ month: month })

  return (
    <AgeContext.Provider value={{ maxVal, month, setMonth }}>
      {children}
    </AgeContext.Provider>
  )
}

export { AgeContext, AgeProvider }
