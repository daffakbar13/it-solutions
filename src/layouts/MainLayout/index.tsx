import { Box, Divider, Grid, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import { Footer, ITSolutionsLogo, Navbar } from 'src/components'
import { menu } from 'src/data'
import { getPath } from 'src/helpers'

export default function MainLayout(props: React.PropsWithChildren) {
  const { children } = props
  const theme = useTheme()
  const mobile = useMediaQuery(theme.breakpoints.down('md'))
  const companyMenu = [
    { title: 'About', path: getPath('blogMenu1') },
    { title: 'Team', path: getPath('blogMenu1') },
    { title: 'Contact', path: getPath('blogMenu1') },
  ]
  const productMenu = [
    { title: 'Service', path: getPath('blogMenu1') },
    { title: 'Pricing', path: getPath('blogMenu1') },
  ]
  const legalMenu = [
    { title: 'Term & Conditions', path: getPath('blogMenu1') },
    { title: 'Privacy Policy', path: getPath('blogMenu1') },
  ]
  const followUsMenu = [
    { title: 'Facebook', path: getPath('blogMenu1') },
    { title: 'Twitter', path: getPath('blogMenu1') },
    { title: 'Linkedin', path: getPath('blogMenu1') },
  ]

  return (
    <>
      <Navbar Logo={<ITSolutionsLogo />} menu={menu} />
      <Box component="main" marginTop={`${Navbar.height}px`}>
        {children}
      </Box>
      <Footer display="flex" flexDirection="column" gap={5}>
        <Grid container spacing={mobile ? 5 : 14} direction={mobile ? 'column' : 'row'}>
          <Grid item xs="auto">
            <ITSolutionsLogo />
          </Grid>
          <Grid container item xs spacing={2} direction={mobile ? 'column' : 'row'}>
            <Grid item xs>
              <Footer.List title="Company" lists={companyMenu} />
            </Grid>
            <Grid item xs>
              <Footer.List title="Product" lists={productMenu} />
            </Grid>
            <Grid item xs>
              <Footer.List title="Legal" lists={legalMenu} />
            </Grid>
            <Grid item xs>
              <Footer.List title="Follow Us" lists={followUsMenu} />
            </Grid>
          </Grid>
        </Grid>
        <Divider sx={{ borderColor: 'gray' }} />
        <Typography variant="body2">&copy; 2023 IT Solutions. All Rights Reserved.</Typography>
      </Footer>
    </>
  )
}
