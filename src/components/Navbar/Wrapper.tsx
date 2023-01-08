import { Box, BoxProps, styled, SxProps } from '@mui/material'
import { useScrollY } from 'src/hooks'
import { Content } from './Content'
import { ContentWrapper } from './ContentWrapper'

const hiddenStyles: SxProps = {
  opacity: 0,
  transform: 'translate3d(0,-25px,0)',
  pointerEvents: 'none',
}

const navbarHeight = 89.55

export const Wrapper = styled((props: BoxProps) => {
  const { children } = props
  const { scroll, scrollDirection } = useScrollY()
  const hiddenRules = scroll > navbarHeight && scrollDirection === 'top'
  return (
    <Box component="header" sx={{ ...(hiddenRules && hiddenStyles) }} {...props}>
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
