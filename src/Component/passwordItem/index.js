import './index.css'

const PasswordItem = props => {
  const {eachPassword, ispasswordvisible, deletePassword} = props
  const {
    id,
    username,
    website,
    password,
    passwordLength,
    hidePasswordImage,
  } = eachPassword

  const onClickDelete = () => {
    deletePassword(id)
  }

  const savedpassword = () => {
    if (ispasswordvisible) {
      return password
    }

    return (
      <img
        src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
        alt="stars"
      />
    )
  }

  return (
    <li>
      <div className="each-password-container">
        <div>
          <p>{username[0]}</p>
        </div>
        <div>
          <p>{website}</p>
          <p>{username}</p>
          <p>{savedpassword()}</p>
        </div>
        <div>
          <button data-testid="delete">
            <img
              onClick={onClickDelete}
              src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
              alt="delete"
            />
          </button>
        </div>
      </div>
    </li>
  )
}
export default PasswordItem
