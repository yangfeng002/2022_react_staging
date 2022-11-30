import React, { Component } from 'react'

export default class Search extends Component {
  create
  search = () => {
    // 搜索功能
  }
  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Github用户搜索</h3>
        <div>
          <input type="text" placeholder="请输入用户关键字进行搜索"/>&nbsp;
          <button onClick={this.search}>搜索</button>
        </div>
      </section>
    )
  }
}
