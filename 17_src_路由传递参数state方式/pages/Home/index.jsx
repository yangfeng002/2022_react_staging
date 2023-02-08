import React, { Component } from 'react'
import MyNavLink from '../../components/MyNavLink'
import { Redirect, Route, Switch } from 'react-router-dom'
import News from './News'
import Message from './Message'

export default class index extends Component {
  render() {
    return (
      <div>
         <div>
            Home内容
          </div>
          {/* 二级路由 */}
          <ul className="nav nav-tabs">
            <li>
            <MyNavLink to="/home/news">News</MyNavLink>
            </li>
            <li>
            <MyNavLink to="/home/message">Message</MyNavLink>
            </li>
          </ul>
          {/* 注册路由 */}
          <Switch>
             <Route path="/home/news" component={News}></Route>
             <Route path="/home/message" component={Message}></Route>
             <Redirect to="/home/news"></Redirect>
          </Switch>
      </div>
    )
  }
}
