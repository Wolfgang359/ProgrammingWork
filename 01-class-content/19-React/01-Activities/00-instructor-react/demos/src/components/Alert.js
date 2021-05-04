export const Alert = ({ theme, message }) => {
  return (
    <div className={`alert alert-${theme}`}>
      {message}
    </div>
  )
}