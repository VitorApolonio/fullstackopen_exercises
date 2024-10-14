const Header = (props) => {
  console.log(props)
  
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Part = (props) => {
  console.log(props)

  return (
    <div>
      <p>{props.name} {props.exercises}</p>
    </div>
  )
}

const Content = (props) => {
  console.log(props)

  return (
    <div>
      <Part name={props.p1} exercises={props.e1}/>
      <Part name={props.p2} exercises={props.e2}/>
      <Part name={props.p3} exercises={props.e3}/>
    </div>
  )
}

const Total = (props) => {
  console.log(props)

  return (
    <div>
      <p>Number of exercises {props.total}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <>
      <Header course={course} />
      <Content p1={part1} p2={part2} p3={part3} e1={exercises1} e2={exercises2} e3={exercises3}/>
      <Total total={exercises1 + exercises2 + exercises3}/>
    </>
  )
}

export default App