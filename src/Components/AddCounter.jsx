import React from 'react'

function AddCounter({plusHandle}) {
  return (
    <button className='btn btn-success' onClick={plusHandle} > Plus</button>
  )
}

export default AddCounter