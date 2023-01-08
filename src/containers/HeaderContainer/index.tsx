import { Avatar, Box, Typography } from '@mui/material'
import React from 'react'
import { Button, Menu, Navbar } from 'src/components'
import { menu } from 'src/data'

export default function HeaderContainer(props: React.PropsWithChildren) {
  const { children } = props

  return (
    <>
      <Navbar.Wrapper>
        <Navbar.Content xs="auto">
          <Box display="flex" gap={1}>
            <Avatar src="/favicon.ico" sx={{ width: 50, height: 50 }} />
            <Typography variant="h5" margin="auto 0" fontWeight="bold">
              it solutions
            </Typography>
          </Box>
        </Navbar.Content>
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
      </Navbar.Wrapper>
      <Box component="main" marginTop="89.55px" padding="80px 0">
        {children}
      </Box>
    </>
  )
}
