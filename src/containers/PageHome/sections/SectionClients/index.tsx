import { Avatar, Box, Grid, Theme, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import {
  ICCompanies1,
  ICCompanies2,
  ICCompanies3,
  ICCompanies4,
  ICCompanies5,
  ICCompanies6,
} from 'src/assets'
import { Section } from 'src/components'
import { useScrollY } from 'src/hooks'

export default function SectionClients() {
  const { scroll } = useScrollY()
  const [hasBeenHittedContent, setHasBeenHittedContent] = React.useState(false)
  const [projectCount, setProjectCount] = React.useState(0)
  const [clientCount, setClientCount] = React.useState(0)
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.up('sm'))

  React.useEffect(() => {
    const content = document.getElementById('section-content')
    if (content) {
      const isOverContent = scroll > content.offsetTop - window.innerHeight
      setHasBeenHittedContent((curr) => {
        if (curr === false && isOverContent) {
          return true
        }
        return curr
      })
    }
  }, [scroll])

  React.useEffect(() => {
    const interval = setInterval(() => {
      setProjectCount((curr) => {
        if (hasBeenHittedContent && curr < 500) {
          return curr + 500 / 10
        }
        return curr
      })
      setClientCount((curr) => {
        if (hasBeenHittedContent && curr < 150) {
          return curr + 150 / 10
        }
        return curr
      })
    }, 100)
    return () => clearInterval(interval)
  }, [hasBeenHittedContent])

  return (
    <Section id="section-clients" bgcolor={(theme) => theme.palette.grey[200]}>
      <div id="section-content"></div>
      <Grid container columns={2}>
        <Grid item xs={2} md={1}>
          <Box
            display="flex"
            gap={isMobile ? 10 : 0}
            {...(!isMobile && { justifyContent: 'space-between' })}
          >
            <Box color="primary.main">
              <Typography variant="h2">{projectCount}+</Typography>
              <Typography variant="h6">Projects</Typography>
            </Box>
            <Box color="secondary.main">
              <Typography variant="h2">{clientCount}+</Typography>
              <Typography variant="h6">Clients</Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={2} md={1}>
          <Grid
            container
            columns={{ xs: 2, md: 3 }}
            rowSpacing={2}
            sx={{ '& .MuiAvatar-root': { width: 'max-content', height: '25px' } }}
          >
            <Grid item xs={2} md={3}>
              <Typography variant="h5">
                As seen on over {clientCount}+ clients all over the world
              </Typography>
            </Grid>
            <Grid item xs={1}>
              <Avatar variant="square" src={ICCompanies1.src} />
            </Grid>
            <Grid item xs={1}>
              <Avatar variant="square" src={ICCompanies2.src} />
            </Grid>
            <Grid item xs={1}>
              <Avatar variant="square" src={ICCompanies3.src} />
            </Grid>
            <Grid item xs={1}>
              <Avatar variant="square" src={ICCompanies4.src} />
            </Grid>
            <Grid item xs={1}>
              <Avatar variant="square" src={ICCompanies6.src} />
            </Grid>
            <Grid item xs={1}>
              <Avatar variant="square" src={ICCompanies5.src} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Section>
  )
}
