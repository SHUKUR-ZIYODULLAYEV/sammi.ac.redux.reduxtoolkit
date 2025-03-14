import React from 'react'

function ResetCounter({resetHandle}) {
  return (
    <button className='btn btn-danger' onClick={resetHandle} >Reset</button>
  )
}

export default ResetCounter