import { GlobalStyles } from '@mui/material'
import type { AppProps } from 'next/app'
import { HeaderContainer } from 'src/containers'
import { ReduxProvider, ThemeProvider } from 'src/providers'
import { globalStyles } from 'src/styles/globalStyles'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ReduxProvider>
      <ThemeProvider>
        <GlobalStyles styles={globalStyles} />
        <HeaderContainer>
          <Component {...pageProps} />
        </HeaderContainer>
      </ThemeProvider>
    </ReduxProvider>
  )
}
