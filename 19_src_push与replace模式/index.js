import  React from  'react'
import {createRoot} from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
/// import { HashRouter } from 'react-router-dom'
import App from './App'

const root = createRoot(document.getElementById('root'))
// root.render(<HashRouter><App/></HashRouter>)
root.render(<BrowserRouter><App/></BrowserRouter>)
