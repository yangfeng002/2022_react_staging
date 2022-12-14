import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {
  
  state =  {mouseIsEnter: false }
  checkTodo = (id) => {
    // 函数柯里化
      return (e) => {
        // 像App组件传值
        this.props.updateTodo(id, e.target.checked)
      }
  }
  delTodo = (id) => {
    return () => {
      // 根据id删除指定的项， 不建议根据index（使用index会改变原数据）
      if(window.confirm('确认删除当前项吗？')) {
        // 确定删除
        this.props.deleteTodo(id)
      }
    }
  }

  handleMouse = (mouseIsEnter) => {
    return () => {
      this.setState({mouseIsEnter: mouseIsEnter})
    }
  }
  render() {
    const {id, name,done} = this.props
    const {mouseIsEnter} = this.state
    return (
      <li onMouseLeave={this.handleMouse(false)} onMouseEnter={this.handleMouse(true)}
          className={mouseIsEnter ? 'active' : ''}
      >
        <label>
          <input type="checkbox" checked={done} onChange={this.checkTodo(id)}/>
          <span>{name}</span>
        </label>
        <button className="btn btn-danger" style={{display: mouseIsEnter ? 'block' : 'none'}} onClick={this.delTodo(id)}>删除</button>
      </li>
    )
  }
}
