import { useState } from "react"

const PersonForm = ({ personList, updateFn }) => {
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const submitFn = (evt) => {
    evt.preventDefault()
    const newPerson = {
      name: newName.trim(),
      number: newNumber,
      id: crypto.randomUUID(),
    }
    if (newPerson.name && newPerson.number) {
      updateFn(newPerson)
      setNewName('')
      setNewNumber('')
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