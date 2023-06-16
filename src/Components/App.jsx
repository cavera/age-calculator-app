import React, { useState } from 'react'
// import { ReactComponent as Arrow } from '../assets/icon-arrow.svg'
import Arrow from '../assets/icon-arrow.svg'
import InputGroup from './InputGroup'
import Results from './Results'
import Result from './Result'
import Footer from './Footer'
import { useDateCalc } from '../services/DateCalc'
import { AgeProvider } from '../Context/AgeContext'

const App = () => {
  const [birthday, setBirthday] = useState({})

  const {
    mytime: { days, months, years }
  } = useDateCalc(birthday)

  const handleSubmit = e => {
    const formData = new FormData(e.target)
    const day = formData.get('Day')
    const month = formData.get('Month') - 1
    const year = formData.get('Year')
    setBirthday({ day, month, year })
    e.preventDefault()
  }
  return (
    <AgeProvider>
      <main className='calculator'>
        <form onSubmit={e => handleSubmit(e)}>
          <div className='inputs-container'>
            <InputGroup name='Day' placeholder='DD' id='day' />
            <InputGroup name='Month' placeholder='MM' id='month' />
            <InputGroup name='Year' placeholder='YYYY' id='year' />
          </div>
          <div className='button-container'>
            <button type='submit'>
              <img src={Arrow} alt='' />
            </button>
          </div>
        </form>
        <Results>
          <Result value={years > 0 ? years : '--'} content='years' />
          <Result value={months > 0 ? months : '--'} content='months' />
          <Result value={days > 0 ? days : '--'} content='days' />
        </Results>

        <Footer />
      </main>
    </AgeProvider>
  )
}

export default App
