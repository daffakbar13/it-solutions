import { GlobalStyles } from '@mui/material'
import type { AppProps } from 'next/app'
import { MainLayout } from 'src/layouts'
import { ReduxProvider, ThemeProvider } from 'src/providers'
import { globalStyles } from 'src/styles/globalStyles'
import Header from './Header'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ReduxProvider>
      <ThemeProvider>
        <Header />
        <GlobalStyles styles={globalStyles} />
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </ThemeProvider>
    </ReduxProvider>
  )
}
