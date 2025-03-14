import React, { useState } from 'react'
import Counter from './Components/Counter'

const App = () => {
  const [count, setCount] = useState(0)

const plusHandle = () => {
  setCount(prev => prev + 1)
}  

const minusHandle = () => {
  setCount(prev => prev - 1)
}

const resetHandle = () => {
  setCount(0)
}
  return (
    <div className='container' >
      <h1>Counter: {count}</h1>
      <Counter plusHandle={plusHandle} minusHandle={minusHandle} resetHandle={resetHandle}/>
    </div>
  )
}

export default App