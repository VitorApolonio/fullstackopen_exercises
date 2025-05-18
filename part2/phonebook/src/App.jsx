import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '39-44-513232' },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 },
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  const addPerson = (evt) => {
    evt.preventDefault()
    if (persons.map(p => p.name).includes(newName)) {
      alert(`${newName} has already been added.`)
    } else {
      const newPerson = {
        name: newName,
        number: newNumber,
      }
      setPersons(persons.concat(newPerson))
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        search: <input onChange={e => setFilter(e.target.value)} value={filter} />
      </div>
      <h2>add new</h2>
      <form onSubmit={addPerson}>
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
      <h2>Numbers</h2>
      <div>
        {persons.filter(p => (
          filter
          ? p.name.toLowerCase().trim().includes(filter.toLowerCase().trim())
          : true
        )).map(p => <p key={p.name}>{p.name} {p.number}</p>)}
      </div>
    </div>
  )
}

export default App