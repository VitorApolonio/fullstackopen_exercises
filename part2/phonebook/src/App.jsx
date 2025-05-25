import { useState, useEffect } from 'react'

import Search from './components/Search'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [filter, setFilter] = useState('')

  useEffect(() => {
    axios.get("http://localhost:3001/persons")
      .then(response => {
        console.log("response ok")
        setPersons(response.data)
      })
    console.log("effect")
  }, [])

  const addPerson = (person) => {
    axios.post(baseUrl, person).then(response => {
      setPersons(persons.concat(response.data))
    })
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

export default App