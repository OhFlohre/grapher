import { ChangeEvent, useState } from "react"

function App() {
  const [expression, setExpression] = useState("")

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setExpression(value)
  }


  return (
    <>
      <input type="text" onChange={onChange} value={expression} ></input>
    </>
  )
}

export default App