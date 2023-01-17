import { Grid, GridProps, styled } from '@mui/material'

export const NavbarContainer = styled((props: GridProps) => (
  <Grid container columnSpacing={5} {...props} />
))(() => ({
  padding: '0 7%',
  height: '100%',
  '& .MuiGrid-item': {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100%',
  },
}))