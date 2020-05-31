import * as React from 'react'
import { render } from 'react-dom'
import App from './App'
import './css/bootstrap4.css'

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
document.addEventListener('keypress', function (event) {
  const KEY = String.fromCharCode(event.keyCode).toLocaleUpperCase()
  const Element = document.getElementById(KEY)
  if (Element) {
    if (Element.parentElement) Element.parentElement.click()
  }
})
