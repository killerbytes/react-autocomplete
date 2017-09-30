import React, { Component } from 'react'
import { connect } from 'react-redux'

import SearchBox from '../components/SearchBox'

class App extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <SearchBox {...this.props}/>
        </div>
      </div>
    )
  }
}

export default connect((state)=>{ 
  return {
  ...state,
  entities: state.entities,
}})(App)
