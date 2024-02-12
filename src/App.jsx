import { useState } from 'react'
import Body from './Components/Body'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Body />
    </>
  )
}

export default App
