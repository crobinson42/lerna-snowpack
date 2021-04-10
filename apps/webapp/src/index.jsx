import React from 'react'
import ReactDOM from 'react-dom'
import { PrimaryButton } from 'lerna-snowpack-demo-react-buttons'
import { Text, TextWithDynamicImport } from 'lerna-snowpack-demo-react-common'

const App = () => (
  <React.StrictMode>
      <h1>Snowpack Rocks! 🤘</h1>

      <div className="border-2 pb-5 mb-5">
        <h2>Imports from "react-buttons" lib</h2>
        <PrimaryButton>Click Me</PrimaryButton>
      </div>

    <div className="border-2 pb-5 mb-5">
      <h2>Imports from "react-common" lib</h2>

      <div>
        <Text>some text...</Text>
      </div>

      <div>
        <TextWithDynamicImport>
          some more text...
        </TextWithDynamicImport>
      </div>
    </div>
  </React.StrictMode>
)

ReactDOM.render(<App />, document.querySelector('#root'))

if (import.meta.hot) {
  import.meta.hot.accept()
}
