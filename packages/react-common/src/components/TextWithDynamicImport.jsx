import React from 'react'

const Text = React.lazy( () => import('./Text'))

const TextWithDynamicImport = ({ children }) => {
  return (
    <React.Suspense fallback={<span>TextWithDynamicImport - loading...</span>}>
      TextWithDynamicImport: <Text>{children}</Text>
    </React.Suspense>
  )
}

export {TextWithDynamicImport}
