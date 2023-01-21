import type { AppProps } from 'next/app'
import MyApp from 'src/app'

function App(props: AppProps) {
  return <MyApp {...props} />
}

export default App
