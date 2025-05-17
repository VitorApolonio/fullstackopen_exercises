import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>
      <Counter text='good' count={good} />
      <Counter text='neutral' count={neutral} />
      <Counter text='bad' count={bad} />
    </div>
  )
}

const Counter = (props) => {
  return (
    <p>{props.text} {props.count}</p>
  )
}

export default App