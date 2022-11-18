import React, { Component } from 'react'
import './App.css'
import Add from './components/Add'
import List from './components/List'
import Footer from './components/Footer'

export default class App extends Component {
  // 初始化状态，因为Add组件需要使用todos, List组件需要展示
  state = {
    todos: [
      {id: '001', name: '跑步', done: true},
      {id: '002', name: '唱歌', done: false},
      {id: '003', name: '打羽毛球', done: true},
    ]
  }
  render() {
    return (
      <div className="todo-container">
      <div className="todo-wrap">
        <Add/>
        <List todos={this.state.todos}/>
        <Footer/>
      </div>
    </div>
    )
  }
}
