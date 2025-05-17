import { useState } from 'react'

const totalFeedback = []

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  // record feedback count and whether it is good, bad or neutral
  const addGoodFb = () => {
    setGood(good + 1)
    totalFeedback.push(1)
  }
  const addNeutralFb = () => {
    setNeutral(neutral + 1)
    totalFeedback.push(0)
  }
  const addBadFb = () => {
    setBad(bad + 1)
    totalFeedback.push(-1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={addGoodFb}>good</button>
      <button onClick={addNeutralFb}>neutral</button>
      <button onClick={addBadFb}>bad</button>
      <Counter text='good' count={good} />
      <Counter text='neutral' count={neutral} />
      <Counter text='bad' count={bad} />

      <Counter text='all' count={good + bad + neutral} />
      <AvgCount fbList={totalFeedback} />
      <PosCount fbList={totalFeedback} />
    </div>
  )
}

const Counter = (props) => {
  return (
    <p>{props.text} {props.count}</p>
  )
}

const AvgCount = ({ fbList }) => {
  if (fbList.length === 0) {
    return (
      <Counter text='average' count='0' />
    )
  } else {
    return (
      <Counter text='average' count={
        fbList.reduce((acc, cur) => acc + cur, 0) / fbList.length
      } />
    )
  }
}

const PosCount = ({ fbList }) => {
  if (fbList.length === 0) {
    return (
      <Counter text='positive' count='0 %' />
    )
  } else {
    return (
      <Counter text='positive' count={
        fbList.filter(e => e === 1).length / fbList.length * 100 + ' %'
      } />
    )
  }
}

export default App