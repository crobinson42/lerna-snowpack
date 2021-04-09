import React from 'react'

import { styles } from 'lerna-snowpack-demo-react-common'

const PrimaryButton = ({children}) => {
  return (
    <button
      style={styles.button}>
      {children}
    </button>
  )
}

export {PrimaryButton}
