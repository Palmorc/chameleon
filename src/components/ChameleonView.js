import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {getOne} from '../redux/reducers/reducer'

class ChameleonView extends Component{
  componentDidMount(){
    this.props.getOne(this.props.item.id)
  }
  
  render(){
    return(
      <div>ChameleonView</div>
    )
  }
}

let mapStateToProps = state => {
  return{
    item: state.chameleons
  }
}

export default connect(mapStateToProps,{})(ChameleonView)
