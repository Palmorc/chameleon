import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {getItems, addItem} from '../redux/reducers/reducer'

class Landing extends Component {

  componentDidMount() {
    this.props.getItems()
  }

  render() {
    return (<div className='landing'>
      {
        this.props.items.map(items => {
          return (<div key={items.id} className='chameleonLandingItems'>
            <Link to={`/chameleons/${items.id}`}>
              <h1 className='landingChamTitle'>{items.species}</h1>
            </Link>
            <p className='landingChamPrice'>${items.price}</p>
            <Link to={`/chameleons/${items.id}`}><img src={items.imgurl} alt='' className='landingChamImg'/></Link>
          </div>)
        })
      }
    </div>)
  }
}

let mapStateToProps = state => {
  return {items: state.chameleons}
}

export default connect(mapStateToProps, {getItems, addItem})(Landing)
