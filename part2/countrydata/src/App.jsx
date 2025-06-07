import { useState, useEffect } from 'react'
import CountryService from './services/country'

import CountryPage from './components/CountryPage'
import MatchList from './components/MatchList'

const App = () => {
  const [countryList, setCountryList] = useState([])
  const [country, setCountry] = useState(null)

  useEffect(() => {
    CountryService
      .getAll()
      .then(r => {
        setCountryList(r.filter(
          c => country ? c.name.common.toLowerCase().includes(country.toLowerCase()) : false
        ))
      })
  }, [country])

  const handleChange = (evt) => {
    setCountry(evt.target.value)
  }

  const filter = (evt) => {
    setCountryList(countryList.filter(c => c.ccn3 === evt.target.id))
  }

  return (
    <div>
      <p>find countries <input onChange={handleChange} type='text'/></p>
      {
        countryList.length > 1 || countryList.length === 0
          ? <MatchList showHandler={filter} countries={countryList} />
          : <CountryPage country={countryList[0]} />
      }
    </div>
  )
}

export default App
