const CountryPage = ({ country }) => {
  return (
    <div>
      <h1>{country.name.common}</h1>
      <p>Capital: {country.capital}</p>
      <p>Land area: {country.area} km²</p>
      <h2>Languages</h2>
      <ul>
        {
          (() => {
            const list = []
            for (const l in country.languages) {
              list.push(<li key={list.length}>{country.languages[l]}</li>)
            }
            return list
          })()
        }
      </ul>
      <img src={country.flags.svg} width='40%' alt={`Flag of ${country.name.common}`} />
    </div>
  )
}

export default CountryPage