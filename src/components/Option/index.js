const Option = props => {
  const {countryAndCapitals, clicking} = props
  const {id, capitalDisplayText} = countryAndCapitals

  const onClicking = () => {
    clicking(id)
  }
  return (
    <option value={id} onChange={onClicking}>
      {capitalDisplayText}
    </option>
  )
}
export default Option
