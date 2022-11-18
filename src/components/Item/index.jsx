import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {
  changeItem = () => {
      
  }
  
  render() {
    const {name, id, done} = this.props
    
    return (
      <li>
        <label>
          <input type="checkbox" checked={done} onChange={this.changeItem}/>
          <span>{name}</span>
        </label>
        <button className="btn btn-danger" style={{display: 'none'}}>删除</button>
      </li>
    )
  }
}
