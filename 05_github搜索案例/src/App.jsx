import React, { Component } from 'react'
import Search from './components/Search'
import List from './components/List'
export default class App extends Component {
  state = {
    users: [],
    isFirst: true, // 是否为初始展示
    isLoading: false, // 标识是否为加载中
    errorMsg: '' // 错误信息存储
  }
  // saveUsers = (users) => {
  //   this.setState({
  //     users: users
  //   })
  // }
  updateAppState = (obj) => {
    this.setState(obj)
  }
  render() {
    return (
      <div className="container">
       <Search updateAppState={this.updateAppState}/>
       <List {...this.state}/>
    </div>
    )
  }
}
