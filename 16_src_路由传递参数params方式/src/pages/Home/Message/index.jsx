import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import Detail from './Detail'

export default class Message extends Component {
 state = {
    messageArr: [
      {id: '001', title: '消息1'},
      {id: '002', title: '消息2'},
      {id: '003', title: '消息3'}
    ]
  }
  render() {
    const {messageArr} = this.state
    return (
      <div>
        <ul>
          {
            messageArr.map(item => {
             return (
              <li key={item.id}>
                <Link to={`/home/message/detail/${item.id}/${item.title}`}>{item.title}</Link>
              </li>
             )
            })
          }
          
        </ul>
        {/* 内容部分 */}
        <Route path="/home/message/detail/:id/:title" component={Detail}/>
      </div>
    )
  }
}
