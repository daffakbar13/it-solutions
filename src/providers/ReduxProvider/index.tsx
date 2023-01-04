import React from 'react'
import { Provider } from 'react-redux'
import { store } from 'src/stores'

export default function ReduxProvider(props: React.PropsWithChildren) {
  const { children } = props

  return <Provider store={store}>{children}</Provider>
}
