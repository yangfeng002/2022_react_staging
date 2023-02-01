import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {
  // 清除全部任务
  clearAllTodo = () => {
    this.props.clearAllTodo()
  }
  // 全部勾选或者取消勾选
  checkAll = (event) => {
    this.props.checkAll(event.target.checked)
  }
  render() {
    const {todos} = this.props

    const doneCount = todos.reduce((preValue,current) => {
      return preValue + (current.done === true ? 1: 0) 
    }, 0)
    const total = todos.length
    return (
      <div className="todo-footer">
        <label>
          <input type="checkbox" checked={doneCount === total && total > 0} onChange={this.checkAll}/>
        </label>
        <span>
          <span>已完成 {doneCount}</span> / 全部 {total}
        </span>
        <button className="btn btn-danger" onClick={this.clearAllTodo}>清除已完成任务</button>
      </div>
    )
  }
}
