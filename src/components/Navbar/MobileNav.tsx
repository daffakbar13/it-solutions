import { Box, styled } from '@mui/material'
import { menu } from 'src/data'
import Menu2 from '../Menu2'
import { navbarHeight } from './NavbarWrapper'

const Component = styled(Box)(() => ({
  position: 'absolute',
  height: '100vh',
  top: `${navbarHeight}px`,
  bottom: 0,
  left: 0,
  right: 0,
  zIndex: 500,
  transition: 'all 0.4s ease',
  backgroundColor: 'white',
}))
interface MobileNavProps {
  open: boolean
  menu: typeof menu
}

export function MobileNav(props: MobileNavProps) {
  const { open, menu } = props

  return (
    <Component component="nav" sx={{ ...(!open && { opacity: 0, pointerEvents: 'none' }) }}>
      <Box padding="0 7%" height="100%" overflow="scroll">
        {menu.map((m, i) => (
          <Menu2 key={i} menu={m} />
        ))}
      </Box>
    </Component>
  )
}
