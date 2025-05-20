const Search = ({ onChange, value }) => {
  return (
    <div>
      search: <input onChange={onChange} value={value} />
    </div>
  )
}

export default Search