import React from 'react'

function MinusCounter({minusHandle}) {
  return (
    <button className='btn btn-secondary' onClick={minusHandle} > Minus</button>
  )
}

export default MinusCounter