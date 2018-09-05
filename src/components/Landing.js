import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getItems } from '../redux/reducers/reducer'

class Landing extends Component{

  componentDidMount(){
    this.props.getItems()
  }

  render(){
    console.log(this.props.match.params.id);
    return(
      <div>
        {this.props.items.map(items => {
          return(
            <div key={items.id} className='chameleonLandingItems'>
              <Link to={`/chameleons/${items.id}`}><h1>{items.species}</h1></Link>
              <p>${items.price}</p>
              <Link to={`/chameleons/${items.id}`}><img src={items.imgurl} alt=''/></Link>
            </div>
          )
        })}
      </div>
    )
  }
}

let mapStateToProps = state => {
  return{
    items: state.chameleons
  }
}

export default connect(mapStateToProps,{getItems})(Landing)
