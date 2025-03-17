import React from 'react'
import { useDispatch } from 'react-redux'
import { minusCounter } from '../reducers/countSlice'

function MinusCounter() {
  const dispatch = useDispatch()
  return (
    <button className='btn btn-secondary' onClick={() => dispatch(minusCounter())} > Minus</button>
  )
}

export default MinusCounter