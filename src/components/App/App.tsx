import { ChangeEvent, useEffect, useState } from "react"
import parse from '../../math/parse'

function App() {
  const [expression, setExpression] = useState("")

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setExpression(value)
  }

  useEffect(() => {
    parse(expression)
  }, [expression])

  return (
    <>
      <input type="text" onChange={onChange} value={expression} ></input>
    </>
  )
}

export default App