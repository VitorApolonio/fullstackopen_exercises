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
      <h1>statistics</h1>
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  )
}

const Statistics = ({ good, neutral, bad }) => {
  if (good + bad + neutral === 0) {
    return 'No feedback given'
  } else {
    return (
      <>
        <Counter text='good' count={good} />
        <Counter text='neutral' count={neutral} />
        <Counter text='bad' count={bad} />

        <Counter text='all' count={good + bad + neutral} />
        <Counter text='average' count={
            (good * 1 + neutral * 0 + bad * -1) / (good + bad + neutral)
        } />
        <Counter text='positive' count={
            good / (good + bad + neutral) * 100 + ' %'
        } />
      </>
    )
  }
}

const Counter = (props) => {
  return (
    <p>{props.text} {props.count}</p>
  )
}

export default App