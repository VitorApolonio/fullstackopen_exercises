import { useState, useEffect } from 'react'

import Search from './components/Search'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [filter, setFilter] = useState('')

  useEffect(() => {
    personService
      .getAll()
      .then(response => {
        setPersons(response)
      })
  }, [])

  const addPerson = (person) => {
    const id = persons.find(p => p.name === person.name)?.id
    if (id) {
      const replace = confirm(`${person.name} is already in the phonebook. Update number?`)
      if (replace) {
        const newP = { ...person, id }
        personService
          .update(id, newP)
          .then(response => {
            setPersons(persons.map(p => p.id === id ? newP : p))
          })
      }
    } else {
      personService
        .create(person)
        .then(response => {
          setPersons(persons.concat(response))
        })
    }
  }

  const delPerson = (id) => {
    const name = persons.find(p => p.id === id).name
    const sure = confirm(`Are you sure you want to delete ${name}?`)

    if (sure) {
      personService
        .remove(id)
        .then(() => {
          setPersons(persons.filter(p => p.id !== id))
        })
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Search onChange={e => setFilter(e.target.value)} value={filter} />
      <h2>add new</h2>
      <PersonForm personList={persons} updateFn={addPerson} />
      <h2>Numbers</h2>
      <Persons personList={persons} filter={filter} deleteFn={delPerson} />
    </div>
  )
}

export default App