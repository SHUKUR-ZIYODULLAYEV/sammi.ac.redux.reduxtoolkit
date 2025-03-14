import React from 'react'
import AddCounter from './AddCounter'
import MinusCounter from './MinusCounter'
import ResetCounter from './ResetCounter'

function Counter({plusHandle, minusHandle, resetHandle}) {
  return (
    <div className='btn-group' >
        <AddCounter plusHandle={plusHandle}/>
        <MinusCounter minusHandle={minusHandle}/>
        <ResetCounter resetHandle={resetHandle}/>
    </div>
  )
}

export default Counter