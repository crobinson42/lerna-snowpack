import React from 'react'
import ReactDOM from 'react-dom'
import { PrimaryButton } from 'lerna-snowpack-demo-react-buttons'

const App = () => (
  <React.StrictMode>
      <h1>Snowpack Rocks! 🤘</h1>

      <PrimaryButton>Click Me</PrimaryButton>
  </React.StrictMode>
)

ReactDOM.render(<App />, document.querySelector('#root'))

if (import.meta.hot) {
  import.meta.hot.accept()
}
