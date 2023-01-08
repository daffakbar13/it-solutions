import { Box, BoxProps, styled } from '@mui/material'
import { ContentWrapper } from './ContentWrapper'
import { navbarHeight, Wrapper } from './Wrapper'

interface MobileNavProps extends BoxProps {
  open: boolean
}

export const MobileNav = styled((props: MobileNavProps) => {
  const { open, children } = props
  return (
    <Box sx={{ ...(!open && { opacity: 0 }) }} {...props}>
      <Box padding="0 7%">{children}</Box>
    </Box>
  )
})(() => ({
  position: 'fixed',
  top: `${navbarHeight}px`,
  bottom: 0,
  left: 0,
  right: 0,
  transition: 'all 0.4s ease',
  background: 'white',
}))
