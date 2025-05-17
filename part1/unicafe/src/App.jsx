import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button setterFn={() => setGood(good + 1)} text='good' />
      <Button setterFn={() => setNeutral(neutral + 1)} text='neutral' />
      <Button setterFn={() => setBad(bad + 1)} text='bad' />
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
      <table>
        <tbody>
          <StatisticLine text='good' value={good} />
          <StatisticLine text='neutral' value={neutral} />
          <StatisticLine text='bad' value={bad} />

          <StatisticLine text='all' value={good + bad + neutral} />
          <StatisticLine text='average' value={
              (good * 1 + neutral * 0 + bad * -1) / (good + bad + neutral)
          } />
          <StatisticLine text='positive' value={
              good / (good + bad + neutral) * 100 + ' %'
          } />
        </tbody>
      </table>
    )
  }
}

const Button = (props) => {
  return (
    <button onClick={props.setterFn}>{props.text}</button>
  )
}

const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  )
}

export default App