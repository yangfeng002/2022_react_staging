import React, { Component } from 'react'
import axios from 'axios'
export default class Search extends Component {
 keyWordContainer = React.createRef()
  search = () => {
    // 搜索功能
    const {value} = this.keyWordContainer.current
    if(!value.trim()) return alert('输入不能为空')
    // axios接口调用 https://api.github.com/search/users?q=xxx (全网通用)

    // 请求之前，通知App更新状态: isFirst: false, isLoading: true
    this.props.updateAppState({isFirst: false, isLoading: true})
    axios.get(`/search/users2?q=${value}`).then(
      res => {
        // 请求成功后，通知App存储用户信息,isLoading:false
        this.props.updateAppState({users: res.data.items, isLoading: false})
      },
      error => {
        // 请求失败，通知App更新状态
        this.props.updateAppState({errorMsg: error.message, isLoading: false})
      }
    )
  }
  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Github用户搜索</h3>
        <div>
          <input type="text" ref={this.keyWordContainer} placeholder="请输入用户关键字进行搜索"/>&nbsp;
          <button onClick={this.search}>搜索</button>
        </div>
      </section>
    )
  }
}
