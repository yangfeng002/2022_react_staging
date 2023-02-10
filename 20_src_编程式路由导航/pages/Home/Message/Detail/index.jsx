import React, { Component } from 'react'
// import qs from "qs"

export default class Detail extends Component {
  render() {
    console.log(this.props)
    /* parms方式接收参数 */
    // const {id, title} = this.props.match.params

    /* search方式接收参数 借助querystring库来解析参数 */
    // const {id, title} = qs.parse(this.props.location.search.slice(1))

    /* state方式接收参数 */
    const {id, title} = this.props.location.state

    const contentArr = [
      {id: '001', content: '你好，中国'},
      {id: '002', content: '你好，尚硅谷'},
      {id: '003', content: '你好，未来的自己'}
    ]
    const conObj = contentArr.find(item => item.id === id)

    return (
      <div>
        <ul>
          <li>id: {id}</li>
          <li>标题： {title}</li>
          <li>内容： {conObj['content']}</li>
        </ul>
      </div>
    )
  }
}
