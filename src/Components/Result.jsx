import React, { useState, useEffect } from 'react'
import { gsap } from 'gsap'

const Result = ({ value, content }) => {
  const [resultVal, setResultVal] = useState(0)
  const [resultText, setResultText] = useState({ val: 0 })

  useEffect(() => {
    gsap.fromTo(
      resultText,
      {
        val: resultVal
      },
      {
        val: value,
        duration: 1,
        ease: 'power3.out',
        onComplete: () => setResultVal(value),
        onUpdate: () => setResultText({ val: Math.round(resultText.val) })
      }
    )
  }, [value])

  return (
    <p className='result'>
      <span className='result-value'>
        {!resultText.val || resultText.val <= 0 ? '--' : String(resultText.val)}
      </span>
      {content}
    </p>
  )
}

export default Result
