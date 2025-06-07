const MatchList = ({ countries }) => {
  if (countries.length > 10) {
    return <p>Too many matches, try a more specific query</p>
  }

  return (
    <>
      <ul>
        {countries.map(c => <li key={c.ccn3}>{c.name.common}</li>)}
      </ul>
    </>
  )
}

export default MatchList