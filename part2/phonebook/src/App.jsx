import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const addPerson = (evt) => {
    evt.preventDefault()
    if (persons.map(p => p.name).includes(newName)) {
      alert(`${newName} has already been added.`)
    } else {
      const newPerson = {
        name: newName,
      }
      setPersons(persons.concat(newPerson))
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input onChange={e => setNewName(e.target.value)} value={newName} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map(p => <p key={p.name}>{p.name}</p>)}
      </div>
    </div>
  )
}

export default App