import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


function MyApp(){
  return(
    <div>
      <h1>Custom App | cahi</h1>
    </div>
  )
}

const ReactElement = {
  type: 'a',
  props: {
    href:'https://www.google.com',
    target:'_blank'
  },
  children: 'Click me to visit google'
}

const anotherElement  = (
  <a href='https://www.google.com' target='_blank' rel="noreferrer">Visit Google</a>
)

const anotheruser = ' chai or code'

const reactElement = React.createElement(
  'a',
  {href:'https://www.google.com', target:'_blank'},
  'click me to visit google',
  anotheruser
)

ReactDOM.createRoot(document.getElementById('root')).render(
  reactElement 
)
