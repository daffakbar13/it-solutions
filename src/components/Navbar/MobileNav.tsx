import { BoxProps, styled } from '@mui/material'
import { navbarHeight, Wrapper } from './Wrapper'

interface MobileNavProps extends BoxProps {
  open: boolean
}

const MobileNav = styled((props: MobileNavProps) => <Wrapper {...props}></Wrapper>)(() => ({
  top: `${navbarHeight}px`,
  height: `calc(100vh-${navbarHeight})`,
}))
