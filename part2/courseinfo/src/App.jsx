const Header = (props) => <h1>{props.course}</h1>

const Content = (props) => (
  <div>
    {props.parts.map(p => <Part part={p} key={p.id} />)}
  </div>
)

const Part = (props) => (
  <p>
    {props.part.name} {props.part.exercises}
  </p>
)

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

const Total = ({ parts }) => {
  const total = parts.map(p => p.exercises).reduce((acc, cur) => acc + cur)
  return (
    <>
      <strong>
        total of {total} exercises
      </strong>
    </>
  )
}

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1,
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2,
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3,
        },
        {
          name: 'Fundamentals of Group Theory',
          exercises: 342,
          id: 4,
        },
      ],
    },
    {
      name: 'Learn OpenGL',
      id: 2,
      parts: [
        {
          name: 'Fundamentals of C++',
          exercises: 932,
          id: 1,
        },
        {
          name: 'Basics of Linear Algebra',
          exercises: 1,
          id: 2,
        },
        {
          name: 'Displaying hello world',
          exercises: 3213,
          id: 3,
        },
      ],
    },
  ]

  return (
    <div>
      {courses.map(c => <Course course={c} />)}
    </div>
  )
}

export default App