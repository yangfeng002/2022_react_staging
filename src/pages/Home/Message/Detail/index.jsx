import React, { Component } from 'react'

export default class Detail extends Component {
  render() {
    const {id, title} = this.props.match.params
    const contentArr = [
      {id: '001', content: '你好，尚硅谷'},
      {id: '002', content: '你好，未来世界'},
      {id: '003', content: '计算机世界'}
    ]
    const conObj = contentArr.find(item => item.id === id)
    return (
      <div>
        <ul>
          <li>id:{id}</li>
          <li>标题： {title}</li>
          <li>内容： {conObj['content']}</li>
        </ul>
      </div>
    )
  }
}
