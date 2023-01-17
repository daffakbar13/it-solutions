import { Box, BoxProps, styled } from '@mui/material'

export const navbarHeight = 89.55

export const NavbarWrapper = styled((props: BoxProps) => {
  return <Box component="header" {...props} />
})(() => ({
  height: navbarHeight,
  width: '100%',
  zIndex: 500,
  position: 'fixed',
  top: 0,
  transition: 'all 0.4s ease',
  background: 'white',
}))
