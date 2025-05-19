import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '39-44-513232', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 },
  ]) 
  const [filter, setFilter] = useState('')

  const addPerson = (person) => {
    setPersons(persons.concat(person))
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Search onChange={e => setFilter(e.target.value)} value={filter} />
      <h2>add new</h2>
      <PersonForm personList={persons} updateFn={addPerson} />
      <h2>Numbers</h2>
      <Persons personList={persons} filter={filter} />
    </div>
  )
}

const Search = ({ onChange, value }) => {
  return (
    <div>
      search: <input onChange={onChange} value={value} />
    </div>
  )
}

const PersonForm = ({ personList, updateFn }) => {
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const submitFn = (evt) => {
    evt.preventDefault()
    if (personList.map(p => p.name).includes(newName.trim())) {
      alert(`${newName.trim()} has already been added.`)
    } else {
      const newPerson = {
        name: newName.trim(),
        number: newNumber,
      }
      updateFn(newPerson)
    }
  }

  return (
      <form onSubmit={submitFn}>
        <div>
          name: <input onChange={e => setNewName(e.target.value)} value={newName} />
        </div>
        <div>
          number: <input onChange={e => setNewNumber(e.target.value)} value={newNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
  )
}

const Persons = ({ personList, filter }) => {
  return (
    <table>
      <tbody>
        {personList.filter(p => (
          filter.trim()
          ? p.name.trim().toLowerCase().includes(filter.trim().toLowerCase())
          : true
        )).map(p => (
          <tr key={p.id}>
            <td>{p.name}</td>
            <td>{p.number}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default App