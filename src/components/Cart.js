import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Cart extends Component{
  render(){
    return(
      <div>Cart</div>
    )
  }
}

let mapStateToProps = state => {
  return{

  }
}

export default connect(mapStateToProps,{})(Cart)
