import React, { Component } from 'react'
import './index.css'

export default class List extends Component {
  render() {
    const {users, isFirst, isLoading,errorMsg} = this.props
    console.log(users)
    return (
      <div className="row">
        {
           isFirst? <h1>欢迎使用！</h1>: 
           isLoading ? <h1>加载中...</h1>: 
           errorMsg? <h1>{errorMsg}</h1>: 
           users.map(userObj => {
            return (
              <div className="card" key={userObj.id}>
                <a href={userObj.html_url} target="_blank" rel="noreferrer">
                  <img src={userObj.avatar_url} alt='' style={{width: '100px'}}/>
                </a>
                <p className="card-text">{userObj.login}</p>
              </div>
            )
          })
        }
      </div>
    )
  }
}
