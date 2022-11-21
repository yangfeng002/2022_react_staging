import React, { Component } from 'react'
import {v4 as uuidv4} from 'uuid'
import './index.css'

export default class Add extends Component {
  // 添加一个todo的回调
  handleKeyUp = (event) => {
    if(event.keyCode !== 13) return
    if(event.target.value.trim() === '') return alert('输入的内容不能为空')
    // console.log('输入的名字为：',event.target.value)
    const todoObj = {id: uuidv4(), name: event.target.value, done: false}
    // 将todoObj传递给App
    this.props.addTodo(todoObj)

  }
  render() {
    return (
      <div className="todo-header">
        <input type="text" onKeyUp={this.handleKeyUp} placeholder="请输入你的任务名称，按回车键确认"/>
      </div>
    )
  }
}
