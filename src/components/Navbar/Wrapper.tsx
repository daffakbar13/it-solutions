import { Box, BoxProps, styled, SxProps } from '@mui/material'
import { useScrollY } from 'src/hooks'
import { ContentWrapper } from './ContentWrapper'

const hiddenStyles: SxProps = {
  opacity: 0,
  transform: 'translate3d(0,-25px,0)',
  pointerEvents: 'none',
}

export const navbarHeight = 89.55

export const Wrapper = styled((props: BoxProps) => {
  const { children } = props
  const { scroll, scrollDirection } = useScrollY()
  const hiddenRules = scroll > navbarHeight && scrollDirection === 'top'
  return (
    <Box component="nav" sx={{ ...(hiddenRules && hiddenStyles) }} {...props}>
      <ContentWrapper>{children}</ContentWrapper>
    </Box>
  )
})(() => ({
  height: navbarHeight,
  width: '100%',
  zIndex: 500,
  position: 'fixed',
  top: 0,
  transition: 'all 0.4s ease',
  background: 'white',
}))
