import React, { Component } from 'react';
import Navbar from './components/Navbar'
import Cart from './components/Cart'
import ChameleonView from './components/ChameleonView'
import Footer from './components/Footer'
import Landing from './components/Landing'
import {HashRouter, Route, Switch} from 'react-router-dom'
import {connect} from 'react-redux'
import {getUser} from './redux/reducers/reducer'

import './App.css';

class App extends Component {
  componentDidMount(){
    this.props.getUser()
  }
  render() {
    return (
      <HashRouter>
        <div className="App">
            <div>
              <Navbar/>
              <Switch>
                <Route exact path = '/' component={Landing}/>
                <Route path = '/cart' component={Cart}/>
                <Route path = '/chameleons/:id' component={ChameleonView}/>
              </Switch>
            </div>
          <Footer/>
        </div>
      </HashRouter>
    );
  }
}

export default connect(null,{getUser})(App)
