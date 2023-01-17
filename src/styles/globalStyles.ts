import { GlobalStylesProps } from '@mui/material'

export const globalStyles: GlobalStylesProps['styles'] = {
  body: {
    height: '100vh',
    width: '100vw',
    overflow: 'scroll',
  },
  '::-webkit-scrollbar': {
    width: 0,
    height: 0,
    background: 'transparent',
  },
  fontFamily: 'Roboto',
}
