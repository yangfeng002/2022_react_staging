import React, { Component } from 'react'
import Add from './components/Add'
import List from './components/List'
import Footer from './components/Footer'
import './App.css'

export default class App extends Component {
  // 初始化状态，因为Add组件需要使用todos, List组件需要展示
  state = {
    todos: [
      {id: '001', name: '跑步', done: true},
      {id: '002', name: '唱歌', done: false},
      {id: '003', name: '打羽毛球', done: true},
    ]
  }
  addTodo = (todoObj) => {
    const {todos} = this.state
    this.setState({todos: [todoObj, ...todos]})
  }
  render() {
    return (
      <div className="todo-container">
      <div className="todo-wrap">
        <Add addTodo={this.addTodo}/>
        <List todos={this.state.todos}/>
        <Footer/>
      </div>
    </div>
    )
  }
}
