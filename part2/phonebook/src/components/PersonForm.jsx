import { useState } from "react"

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
        id: String(personList.length + 1),
      }
      if (newPerson.name && newPerson.number) {
        updateFn(newPerson)
        setNewName('')
        setNewNumber('')
      }
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

export default PersonForm