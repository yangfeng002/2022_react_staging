import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import Detail from './Detail'

export default class Message extends Component {
 state = {
    messageArr: [
      {id: '001', title: '消息1'},
      {id: '002', title: '消息2'},
      {id: '003', title: '消息3'}
    ]
  }
  render() {
    const {messageArr} = this.state
    return (
      <div>
        <ul>
          {
            messageArr.map(item => {
             return (
              <li key={item.id}>
                {/* 路由传递参数params方式 */}
                {/* <Link to={`/home/message/detail/${item.id}/${item.title}`}>{item.title}</Link> */}

                {/* 路由传递参数 search方式 */}
                <Link to={`/home/message/detail?id=${item.id}&title=${item.title}`}>{item.title}</Link>

                {/* 路由传递参数 state方式  */}
                {/* <Link to={{pathname: "/home/message/detail", state: {id: item.id, title: item.title}}}>{item.title}</Link> */}

              </li>
             )
            })
          }
          
        </ul>
        {/* 内容部分 */}

        {/* 路由注册 params方式 声明接收参数 */}
        {/* <Route path="/home/message/detail/:id/:title" component={Detail}/> */}

        {/* 路由注册 search方式 不需要声明接收 */}
        <Route path="/home/message/detail" component={Detail}/>

        {/* 路由注册 state方式 不需要声明接收 */}
        {/* <Route path="/home/message/detail" component={Detail}/> */}

      </div>
    )
  }
}
