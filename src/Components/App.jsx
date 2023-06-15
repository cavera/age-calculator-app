import React, { useState } from 'react'
import InputGroup from './InputGroup'
import Results from './Results'
import Result from './Result'
import Footer from './Footer'
import { useDateCalc } from '../services/DateCalc'

const App = () => {
  const [day, setday] = useState(null)
  const [month, setmonth] = useState(null)
  const [year, setyear] = useState(null)

  const {
    mytime: { days, months, years }
  } = useDateCalc({
    day,
    month,
    year
  })

  const handleSubmit = e => {
    const formData = new FormData(e.target)
    const day = formData.get('Day')
    const month = formData.get('Month') - 1
    const year = formData.get('Year')
    setday(day)
    setmonth(month)
    setyear(year)
    e.preventDefault()
  }

  return (
    <main>
      <form onSubmit={e => handleSubmit(e)}>
        <InputGroup name='Day' placeholder='DD' id='day' />
        <InputGroup name='Month' placeholder='MM' id='month' />
        <InputGroup name='Year' placeholder='YYYY' id='year' />
        <button type='submit'>calculate</button>
      </form>
      <Results>
        <Result value={years > 0 ? years : '--'} content='years' />
        <Result value={months > 0 ? months : '--'} content='months' />
        <Result value={days > 0 ? days : '--'} content='days' />
      </Results>

      <Footer />
    </main>
  )
}

export default App
