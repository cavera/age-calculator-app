import React from 'react'

const InputGroup = ({ name, id, placeholder }) => {
  return (
    <div className='input-group'>
      <label htmlFor='day'>Day</label>
      <input
        type='number'
        name={name}
        id={id}
        placeholder={placeholder}
        defaultValue={''}
      />
    </div>
  )
}

export default InputGroup
