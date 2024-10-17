const Header = (props) => {
  console.log('Header', props)
  
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Part = (props) => {
  console.log('Part', props)

  return (
    <div>
      <p>{props.name} {props.exercises}</p>
    </div>
  )
}

const Content = (props) => {
  console.log('Content', props)

  return (
    <div>
      <Part name={props.p1.name} exercises={props.p1.exercises}/>
      <Part name={props.p2.name} exercises={props.p2.exercises}/>
      <Part name={props.p3.name} exercises={props.p3.exercises}/>
    </div>
  )
}

const Total = (props) => {
  console.log('Total', props)

  return (
    <div>
      <p>Number of exercises {props.total}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <>
      <Header course={course} />
      <Content p1={part1} p2={part2} p3={part3}/>
      <Total total={part1.exercises + part2.exercises + part3.exercises}/>
    </>
  )
}

export default App