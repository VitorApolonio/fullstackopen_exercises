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

export default Persons