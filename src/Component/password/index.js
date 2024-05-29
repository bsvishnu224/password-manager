import {Component} from 'react'
import './index.css'
import {v4} from 'uuid'
import PasswordItem from '../passwordItem'

class Password extends Component {
  state = {
    passwordList: [],
    search: '',
    showPassword: false,
    numOfPasswords: 0,
    website: '',
    username: '',
    password: '',
    passwordLength: '',
    hidePasswordImage:
      'https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png',
  }

  onclickCheckbox = () => {
    const {showPassword} = this.state

    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  onsubmitOff = event => {
    event.preventDefault()
    console.log('add button Triggerd')
    const {
      passwordList,
      website,
      username,
      password,
      numOfPasswords,
      passwordLength,
    } = this.state
    const newPassword = {
      id: v4(),
      website,
      username,
      password,
      passwordLength,
    }

    this.setState(prevState => ({
      passwordList: [...prevState.passwordList, newPassword],
      numOfPasswords: prevState.numOfPasswords + 1,
      username: '',
      website: '',
      password: '',
    }))
  }

  onchangeWebsite = event => {
    this.setState(prevState => ({website: event.target.value}))
  }

  onchangeUsername = event => {
    this.setState(prevState => ({username: event.target.value}))
  }

  onchangePassword = event => {
    this.setState(prevState => ({
      password: event.target.value,
      passwordLength: `${prevState.passwordLength}*`,
    }))
  }

  deletePassword = id => {
    const {passwordList} = this.state
    const filterlist = passwordList.filter(each => each.id !== id)
    this.setState(prevState => ({
      passwordList: filterlist,
      numOfPasswords: prevState.numOfPasswords - 1,
    }))
  }

  onClickSearch = event => {
    const {passwordList} = this.state
    this.setState({search: event.target.value})
  }

  render() {
    const {
      passwordList,
      username,
      website,
      password,
      showPassword,
      passwordLength,
      numOfPasswords,
      hidePasswordImage,
      search,
    } = this.state
    console.log(website)
    console.log({passwordList})
    console.log({showPassword})
    console.log({password})
    console.log(passwordLength)
    const searchPasswords = passwordList.filter(each =>
      each.website.toLowerCase().includes(search.toLowerCase()),
    )
    return (
      <div className="main-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="logo-image"
        />
        <div className="input-container">
          <div>
            <h1>Add New Password</h1>
            <form onSubmit={this.onsubmitOff}>
              <div>
                <lebal>
                  <img
                    className="input-img"
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                    alt="website"
                  />
                </lebal>
                <input
                  placeholder="Enter Website"
                  type="text"
                  onChange={this.onchangeWebsite}
                  value={website}
                />
              </div>
              <div>
                <lebal>
                  <img
                    className="input-img"
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                    alt="username"
                  />
                </lebal>
                <input
                  placeholder="Enter Username"
                  type="text"
                  onChange={this.onchangeUsername}
                  value={username}
                />
              </div>
              <div>
                <lebal>
                  <img
                    className="input-img"
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                    alt="password"
                  />
                </lebal>
                <input
                  placeholder="Enter Password"
                  type="password"
                  onChange={this.onchangePassword}
                  value={password}
                />
              </div>
              <button type="submit">Add</button>
            </form>
          </div>
          <div>
            <img
              className="password-manager"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
              alt="password manager"
            />
          </div>
        </div>
        <div className="storage-container">
          <div className="password-search-container">
            <div className="password-count">
              <h1>your passwords</h1>
              <p>{numOfPasswords}</p>
            </div>
            <div className="search-box">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
              />
              <input
                type="search"
                value={search}
                onChange={this.onClickSearch}
              />
            </div>
          </div>
          <div className="check-box">
            <input
              id="checkbox"
              type="checkbox"
              onClick={this.onclickCheckbox}
            />
            <lebal htmlFor="checkbox">Show passwords</lebal>
          </div>

          {passwordList.length === 0 ? (
            <div className="no-password-container">
              <img
                className="no-password-img"
                src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                alt="no passwords"
              />
              <p>No Passwords</p>
            </div>
          ) : (
            <ul>
              {searchPasswords.map(eachpassword => (
                <PasswordItem
                  eachPassword={eachpassword}
                  key={eachpassword.id}
                  ispasswordvisible={showPassword}
                  deletePassword={this.deletePassword}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}
export default Password
