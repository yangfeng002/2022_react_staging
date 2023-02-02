import React, { Component } from 'react'
import { Route} from 'react-router-dom'
import Home from './pages/Home' // Home是路由组件
import About from './pages/About' // About是路由组件
import Header from './components/Header' // 一般组件
import MyNavLink from './components/MyNavLink'
export default class App extends Component {
  render() {
    return (
      <div className="container">
         <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            {/* 一般组件 */}
            <Header a={1}/>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/* 原生html中，靠<a>跳转不同的页面 */}
              {/* <a className="list-group-item active" href="./about.html">About</a>
              <a className="list-group-item" href="./home.html">Home</a> */}

              {/* 在react中靠路由链接实现切换组件 */}
              {/* <Link className="list-group-item" to="/about">About</Link>
              <Link className="list-group-item" to="/home">Home</Link> */}
              {/* NavLink用于导航，activeClassName属性值为active，可以省略不写 */}
              {/* <NavLink activeClassName="currNav" className="list-group-item" to="/about">About</NavLink>
              <NavLink activeClassName="currNav" className="list-group-item" to="/home">Home</NavLink> */}

              {/* 封装NavLink组件，MyNavLink为一般组件 */}
              <MyNavLink to="/about">About</MyNavLink>
              <MyNavLink to="/home">Home</MyNavLink>

            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* Route 注册路由 */}
                <Route path="/about" component={About}></Route>
                <Route path="/home" component={Home}></Route>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    )
  }
}
