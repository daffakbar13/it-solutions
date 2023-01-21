import { Box, BoxProps, IconButton, SxProps, useMediaQuery, useTheme } from '@mui/material'
import { menu } from 'src/data'
import { useScrollY } from 'src/hooks'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import React from 'react'
import Menu from '../Menu1'
import { NavbarContainer } from './NavbarContainer'
import { NavbarContent } from './NavbarContent'
import { MobileNav } from './MobileNav'
import { navbarHeight, NavbarWrapper } from './NavbarWrapper'

const hiddenStyles: SxProps = {
  opacity: 0,
  transform: 'translate3d(0,-25px,0)',
  pointerEvents: 'none',
}

interface NavbarProps extends BoxProps {
  Logo: React.ReactNode
  menu: typeof menu
}

export default function Navbar(props: NavbarProps) {
  const { Logo, menu } = props
  const [open, setOpen] = React.useState(false)
  const { scroll, scrollDirection } = useScrollY()
  const theme = useTheme()
  const laptop = useMediaQuery(theme.breakpoints.up('lg'))

  const hiddenRules = scroll > navbarHeight && scrollDirection === 'top'
  return (
    <NavbarWrapper sx={{ ...(hiddenRules && hiddenStyles) }}>
      <NavbarContainer>
        <NavbarContent>{Logo}</NavbarContent>
        {laptop && (
          <NavbarContent xs>
            <Box component="nav" display="flex" gap={5}>
              {menu.map((m, i) => (
                <Menu key={i} menu={m} />
              ))}
            </Box>
          </NavbarContent>
        )}
        {!laptop && (
          <NavbarContent xs>
            <Box display="flex" justifyContent="end">
              <IconButton
                sx={{ color: 'black', width: 'max-content' }}
                onClick={() => setOpen((e) => !e)}
              >
                {open ? <CloseIcon /> : <MenuIcon />}
              </IconButton>
            </Box>
          </NavbarContent>
        )}
      </NavbarContainer>
      {!laptop && <MobileNav open={open} menu={menu} />}
    </NavbarWrapper>
  )
}

Navbar.height = navbarHeight
