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
  pushShow = (id, title) => {
    /* params方式 */
    // this.props.history.push(`/home/message/detail/${id}/${title}`)

    /* search方式 */
    //this.props.history.push(`/home/message/detail?id=${id}&title=${title}`)

    /* state方式 */
    this.props.history.push('/home/message/detail', {id, title})
  }
  replaceShow = (id, title) => {
    /* params方式 */
    // this.props.history.replace(`/home/message/detail/${id}/${title}`)
    /* search方式 */
    //this.props.history.replace(`/home/message/detail?id=${id}&title=${title}`)

    /* state方式 */
    this.props.history.push('/home/message/detail', {id, title})

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
                {/* <Link to={`/home/message/detail/${item.id}/${item.title}`}>{item.title}</Link>
                <button onClick={()=> {this.pushShow(item.id, item.title)}}>push查看</button>
                <button onClick={()=> {this.replaceShow(item.id, item.title)}}>replace查看</button> */}

                {/* 路由传递参数 search方式 */}
                {/* <Link to={`/home/message/detail?id=${item.id}&title=${item.title}`}>{item.title}</Link>
                <button onClick={()=> {this.pushShow(item.id, item.title)}}>push查看</button>
                <button onClick={()=> {this.replaceShow(item.id, item.title)}}>replace查看</button> */}

                {/* 路由传递参数 state方式  */}
                <Link to={{pathname: "/home/message/detail", state: {id: item.id, title: item.title}}}>{item.title}</Link>
                <button onClick={()=> {this.pushShow(item.id, item.title)}}>push查看</button>
                <button onClick={()=> {this.replaceShow(item.id, item.title)}}>replace查看</button>

              </li>
             )
            })
          }
          
        </ul>
        {/* 内容部分 */}

        {/* 路由注册 params方式 声明接收参数 */}
        {/* <Route path="/home/message/detail/:id/:title" component={Detail}/> */}

        {/* 路由注册 search方式 不需要声明接收 */}
        {/* <Route path="/home/message/detail" component={Detail}/> */}

        {/* 路由注册 state方式 不需要声明接收 */}
        <Route path="/home/message/detail" component={Detail}/>

      </div>
    )
  }
}
