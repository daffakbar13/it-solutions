import type { AppProps } from 'next/app'
import MyApp from 'src/app'
import 'src/styles/globals.css'

function App(props: AppProps) {
  return <MyApp {...props} />
}

export default App
