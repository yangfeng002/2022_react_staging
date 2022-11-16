import React from 'react'
export default class Weather extends React.Component{
  state = {isHot: true}
  changeWeather = () => {
    this.setState({isHot: !this.state.isHot}) 
  }
  render() {
    return (
      <div>
        <h2>今天天气很{this.state.isHot ? '炎热': '凉爽'}</h2>
        <button onClick={this.changeWeather}>切换天气</button>
      </div>
    )
  }
}