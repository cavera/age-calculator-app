import React from 'react'
import InputGroup from './InputGroup'
import Results from './Results'
import Result from './Result'
import Footer from './Footer'

const App = () => {
  return (
    <main>
      <form action=''>
        <InputGroup name='Day' placeholder='DD' id='day' />
        <InputGroup name='Month' placeholder='MM' id='month' />
        <InputGroup name='Year' placeholder='YYYY' id='year' />
      </form>
      <Results>
        <Result value='--' content='years' />
        <Result value='--' content='months' />
        <Result value='--' content='days' />
      </Results>

      <Footer />
    </main>
  )
}

export default App
