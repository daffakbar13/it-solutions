import { GlobalStylesProps } from '@mui/material'

export const globalStyles: GlobalStylesProps['styles'] = {
  '& html, body': {
    minHeight: '100vh',
    minWidth: '100vw',
    padding: 0,
    margin: 0,
    overflow: 'scroll',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      'Segoe UI',
      'Roboto',
      'Oxygen',
      'Ubuntu',
      'Cantarell',
      'Fira Sans',
      'Droid Sans',
      'Helvetica Neue',
      'sans-serif',
    ].join(', '),
  },
  '& a': {
    color: 'inherit',
    textDecoration: 'none',
  },
  '::-webkit-scrollbar': {
    width: 0,
    height: 0,
    background: 'transparent',
  },
  boxSizing: 'border-box',
  fontFamily: 'Roboto',
}
