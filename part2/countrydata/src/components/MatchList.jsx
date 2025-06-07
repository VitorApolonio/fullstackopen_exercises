const MatchList = ({ countries, showHandler }) => {
  if (countries.length > 10) {
    return <p>Too many matches, try a more specific query</p>
  }

  if (countries.length === 0) {
    return <p>Start typing a country's name to see information about it</p>
  }

  return (
    <>
      <ul>
        {countries.map(c => (
          <li key={c.ccn3}>
            {c.name.common}
            &nbsp;
            <button onClick={showHandler} id={c.ccn3}>Show</button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default MatchList