import { ThemeProvider as ThemeProviderMui } from '@mui/material'
import React from 'react'
import theme from './theme'

export default function ThemeProvider(props: React.PropsWithChildren) {
  const { children } = props
  return <ThemeProviderMui theme={theme}>{children}</ThemeProviderMui>
}
