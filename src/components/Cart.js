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
    console.log(this.props.cart[0]);
    
    return (<div className='cart'>
      {
        this.props.cart.length
          ? this.props.cart.map(item => {
            return (<div key={item.id} className='cartInfoContainer'>
              <h1 className='cartSpecies'>{item.species}</h1>
              <div className='cartQuantity'>x{item.quantity}</div>
              <img src={item.imgurl} alt='' className = 'cartImage'/>
              <p className='cartPrice'>${item.price}</p>
                <button onClick={()=>this.props.plusItem(item)} className = 'cartPlus'>+</button>
                <button onClick={()=>this.props.minusItem(item)} className = 'cartMinus'>-</button>
                <button onClick={()=>this.props.removeItem(item.id)} className = 'cartRemove'>REMOVE</button>
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
