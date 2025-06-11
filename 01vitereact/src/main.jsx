import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit google</a>
)

const reactElement= React.createElement(
  'a',{href:'https://google.com', target:'_blank'},
  'click me to visite google'
)

ReactDOM.createRoot(document.getElementById('root')).render(
  reactElement
)