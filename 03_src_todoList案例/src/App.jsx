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
  updateTodo = (id, doneState) => {
    // 更新状态
     const {todos} = this.state
     if(todos.length > 0) {
      const newTodoObj = todos.map(item => {
        if(item.id === id)  item.done = doneState
        return item
      })
      // 更新状态值
      this.setState({todos: newTodoObj})
     }
  }
  addTodo = (todoObj) => {
    // 获取原素据
    const {todos} = this.state
    // 更新状态
    this.setState({todos: [todoObj, ...todos]})
  }
  deleteTodo = (id) => {
    // 根据id删除指定的某一项
    const {todos} = this.state
    const newTodos = todos.filter((item, index) => {
      return item.id !== id
    })
    this.setState({todos: newTodos})
  }
  // 全选或者全不选
  checkAll = (done) => {
    const{todos} = this.state
    let tempTodos = todos.map(todoObj => ({...todoObj, done}))
    this.setState({todos: tempTodos})
  }
  // 清除已选中
  clearAllTodo = () => {
    const {todos} = this.state
    const newObj = todos.filter(todoObj  => {
      return !todoObj.done
    })
    this.setState({todos: newObj})
  }

  render() {
    const {todos} = this.state
    return (
      <div className="todo-container">
      <div className="todo-wrap">
        <Add addTodo={this.addTodo}/>
        <List todos={todos} deleteTodo={this.deleteTodo} updateTodo={this.updateTodo}/>
        <Footer todos={todos} checkAll={this.checkAll} clearAllTodo={this.clearAllTodo}/>
      </div>
    </div>
    )
  }
}
