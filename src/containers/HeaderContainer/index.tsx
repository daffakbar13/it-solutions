import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Box,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import React from 'react'
import { Button, Menu, Navbar } from 'src/components'
import { menu } from 'src/data'
import MenuIcon from '@mui/icons-material/Menu'
import { MobileNav } from 'src/components/Navbar/MobileNav'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import CloseIcon from '@mui/icons-material/Close'
import Router from 'next/router'

export default function HeaderContainer(props: React.PropsWithChildren) {
  const { children } = props
  const [open, setOpen] = React.useState(false)
  const theme = useTheme()
  const laptop = useMediaQuery(theme.breakpoints.up('lg'))

  return (
    <>
      <Navbar.Wrapper>
        <Navbar.Content xs="auto">
          <Box display="flex" gap={1}>
            <Avatar src="/it-solutions/favicon.ico" sx={{ width: 50, height: 50 }} />
            <Typography variant="h5" margin="auto 0" fontWeight="bold">
              it solutions
            </Typography>
          </Box>
        </Navbar.Content>
        {laptop && (
          <>
            <Navbar.Content xs>
              <Box display="flex" gap={5}>
                {menu.map((m, i) => (
                  <Menu key={i} menu={m} />
                ))}
              </Box>
            </Navbar.Content>
            <Navbar.Content xs="auto">
              <Button variant="contained">
                <Typography variant="body1">Sign Up</Typography>
              </Button>
            </Navbar.Content>
          </>
        )}
        {!laptop && (
          <Navbar.Content xs>
            <Box display="flex" justifyContent="end">
              <IconButton
                sx={{ color: 'black', width: 'max-content' }}
                onClick={() => setOpen((o) => !o)}
              >
                {open ? <CloseIcon /> : <MenuIcon />}
              </IconButton>
            </Box>
          </Navbar.Content>
        )}
        <MobileNav open={open}>
          {/* <Navbar.Content> */}
          {menu.map((m, i) => (
            <Accordion key={i}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`${i}-content`}
                id={`${i}header`}
              >
                <Typography>{m.title}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Box display="flex" flexDirection="column" gap={1}>
                  {m.subMenu.map((sub, idx) => (
                    <Typography
                      key={idx}
                      onClick={() => Router.push(sub.link)}
                      sx={{ ':hover': { color: 'primary.main', cursor: 'pointer' } }}
                    >
                      {sub.title}
                    </Typography>
                  ))}
                </Box>
              </AccordionDetails>
            </Accordion>
          ))}
          {/* </Navbar.Content> */}
        </MobileNav>
      </Navbar.Wrapper>
      <Box component="main" marginTop={`${Navbar.height}px`} padding="80px 0">
        {children}
      </Box>
    </>
  )
}
