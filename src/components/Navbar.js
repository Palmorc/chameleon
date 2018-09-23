import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {getUser, logout, getCart} from '../redux/reducers/reducer'

var loggedIn = null

class Navbar extends Component {

  componentDidMount() {
    this.props.getUser(),
    this.props.getCart()
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

  cartCount = () => {
    if (!this.props.cart.length){
      return null
    } else {
      return '+' + this.props.cart.length
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
    return (
    <div className='navbar'>
      <Link to='/'><img src={require('../images/logo.png')} alt = '' height='100' width='100' className='logo'/></Link>
      <h1 className='navName'>Chameleon</h1>
      <div className='navButtons'>
        <button onClick={this.login} className='navLogin'>{this.checkLoggedIn()}</button>
        <Link to='/cart'><button className='navCart'>CART {this.cartCount()}</button></Link>
      </div>
    </div>)
  }
}

let mapStateToProps = state => {
  return {user : state.userData,
          cart : state.cart}
}

export default connect(mapStateToProps, {getUser, logout, getCart})(Navbar)
