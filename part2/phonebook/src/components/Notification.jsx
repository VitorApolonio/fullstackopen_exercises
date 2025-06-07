const Notification = ({ message, success }) => {
  const styleBase = {
    fontStyle: 'italic',
    background: 'lightgrey',
    fontSize: '20px',
    borderStyle: 'solid',
    borderRadius: '5px',
    padding: '10px',
  }

  const styleSuccess = { ...styleBase, color: 'green' }
  const styleFailure = { ...styleBase, color: 'red' }

  return (
    message
    ? (<div style={success ? styleSuccess : styleFailure}>{message}</div>)
    : null
  )
}

export default Notification