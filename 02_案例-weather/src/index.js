import React from "react"
/** 
 * react18.0以后API发生变化
 * 请参考地址：https://reactjs.org/link/switch-to-createroot
*/
import {createRoot } from 'react-dom/client' 
import App from './App.jsx'

// 入口文件中渲染虚拟DOM到浏览器
const root = createRoot(document.getElementById('root'))
root.render(<App/>)
