import React from 'react'
import Counter from './Components/Counter'
import { useSelector } from 'react-redux'

const App = () => {
const state = useSelector(state => state.count)
  return (
    <div className='container' >
      <h1>Counter: {state}</h1>
      <Counter/>
    </div>
  )
}

export default App