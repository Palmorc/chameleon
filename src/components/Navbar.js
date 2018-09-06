import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {getUser, logout} from '../redux/reducers/reducer'

var loggedIn = null

class Navbar extends Component {

  componentDidMount() {
    this.props.getUser()
  }

  checkLoggedIn(props) {
    this.props.user
      ? loggedIn = 1
      : loggedIn = 0
    if (loggedIn === 1) {
      return 'LOGOUT'
    } else if (loggedIn === 0) {
      return 'LOGIN'
    }
  }

  login = () => {
    console.log(this.props.user);
    if (loggedIn === 0) {
      let auth0Domain = `https://${process.env.REACT_APP_AUTH0_DOMAIN}`
      let clientId = process.env.REACT_APP_AUTH0_CLIENT_ID
      let scope = encodeURIComponent('openid profile email')
      let redirectUri = encodeURIComponent(`${window.location.origin}/auth/callback`)
      let location = `${auth0Domain}/authorize?client_id=${clientId}&scope=${scope}&redirect_uri=${redirectUri}&response_type=code`
      window.location = location
    } else if (loggedIn === 1) {
      this.props.logout()
    }
  }

  render() {
    return (<div>
      <button onClick={this.login}>{this.checkLoggedIn()}</button>
    </div>)
  }
}

let mapStateToProps = state => {
  return {user: state.userData}
}

export default connect(mapStateToProps, {getUser, logout})(Navbar)
