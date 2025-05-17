const Header = ({ course }) => (
  <h1>{course}</h1>
)

const Part = ({ part }) => (
  <p>
    {part.name} {part.exercises}
  </p>
)

const Content = ({ parts }) => (
  <div>
    {parts.map(p => <Part part={p} key={p.id} />)}
  </div>
)

const Total = ({ parts }) => {
  const total = parts.map(p => p.exercises).reduce((acc, cur) => acc + cur)
  return (
    <strong>total of {total} exercises</strong>
  )
}

const Course = ({ course }) => (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
)

export default Course