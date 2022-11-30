import axios from 'axios'
import React, { Component } from 'react'
// import axios from 'axios'

export default class App extends Component {
  // 获取学生信息
  getStudentsInfo = () => {
    axios.get('http://localhost:3000/api1/students', {}).then(res => {
      console.log(res)
    })
  }
  getCarsInfo = () => {
    axios.get('http://localhost:3000/api2/cars', {}).then(res => {
      console.log(res)
    })
  }
  render() {
    return (
      <div>
        <button onClick={this.getStudentsInfo}>点我获取学生信息</button>
        <button onClick={this.getCarsInfo}>点我获取汽车信息</button>
      </div>
    )
  }
}
