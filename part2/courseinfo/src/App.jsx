import Course from './components/Course'

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
      {courses.map(c => <Course course={c} key={c.id} />)}
    </div>
  )
}

export default App