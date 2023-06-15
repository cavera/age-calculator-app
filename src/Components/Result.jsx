import React from 'react'

const Result = ({ value, content }) => {
  return (
    <p className='result'>
      <span className='result-value'>{value}</span> {content}
    </p>
  )
}

export default Result
