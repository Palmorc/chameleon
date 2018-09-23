import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {getOne, addItem} from '../redux/reducers/reducer'

class ChameleonView extends Component {
  componentDidMount() {
    this.props.getOne(this.props.match.params.id)
  }

  render() {
    console.log(this.props.cart);
    return (<div className='chameleonView'>
      {
        this.props.item.map(item => {
          return (<div key={item.id}>
            <div className='chamInfo'>
              <h1 className='chameleonSpecies'>{item.species}</h1>
              <p className='chameleonPrice'>
                <b>
                  <i>${item.price}</i>
                </b>
              </p>
              <p className='chameleonInfo'>{item.info}</p>
              <button onClick={() => this.props.addItem(item)} className='addToCart'>Add to Cart</button>
            </div>
            <img src={item.imgurl} className='chameleonImage'/>
          </div>)
        })
      }
    </div>)
  }
}
let mapStateToProps = (state) => {
  return {item: state.chameleons, cart: state.cart}
}

export default connect(mapStateToProps, {getOne, addItem})(ChameleonView)
