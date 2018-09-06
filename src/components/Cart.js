import React, {Component} from 'react'
import {connect} from 'react-redux'
import {
  getCart,
  addItem,
  plusItem,
  minusItem,
  removeItem,
  getUser
} from '../redux/reducers/reducer'

class Cart extends Component {

  componentDidMount() {
    this.props.getCart()
  }

  render() {
    return (<div className='cart'>
      {
        this.props.cart.length
          ? this.props.cart.map(item => {
            return (<div key={item.id}>
              <h1>{item.species}</h1>
              <p>x{item.quantity}</p>
              <img src={item.imgurl} alt=''/>
              <p>${item.price}</p>
                <button onClick={()=>this.props.plusItem(item)}>+</button>
                <button onClick={()=>this.props.minusItem(item)}>-</button>
                <button onClick={()=>this.props.removeItem(item.id)}>REMOVE</button>
            </div>)
          })
          : <h1>No chameleons were found here, try adding some!</h1>
      }
    </div>)
  }
}

let mapStateToProps = state => {
  return {items: state.chameleons, cart: state.cart, user: state.userData}
}

export default connect(mapStateToProps, {
  getCart,
  addItem,
  plusItem,
  minusItem,
  removeItem,
  getUser
})(Cart)
