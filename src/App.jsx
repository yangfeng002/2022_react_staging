import React, { Component } from 'react'
import Home from './components/Home'
import Abpout from './components/About'
export default class App extends Component {
  state = {
  }
  render() {
    return (
      <div className="container">
        <Home></Home>
        <Abpout></Abpout>
      </div>
    )
  }
}
