import {
  Avatar,
  Box,
  Breakpoint,
  Breakpoints,
  Grid,
  Theme,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
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
  const media = useMediaQuery<Theme>
  const downMd = media((t) => t.breakpoints.down('md'))
  const downSm = media((t) => t.breakpoints.down('sm'))

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
    <Section id="section-clients" bgcolor="grey.50">
      <div id="section-content"></div>
      <Grid container columns={2} rowSpacing={2}>
        <Grid item xs={2} sm={1}>
          <Grid container columns={2}>
            <Grid item xs={1} color="primary.main">
              <Typography variant={downSm ? 'h3' : 'h2'}>{projectCount}+</Typography>
              <Typography variant="h6">Projects</Typography>
            </Grid>
            <Grid item xs={1} color="secondary.main">
              <Typography variant={downSm ? 'h3' : 'h2'}>{clientCount}+</Typography>
              <Typography variant="h6">Clients</Typography>
            </Grid>
          </Grid>
          {/* <Box
            display="flex"
            gap={downMd ? 2 : 10}
            {...(downSm && { justifyContent: 'space-between' })}
          >
            <Box color="primary.main">
              <Typography variant={downMd ? 'h4' : 'h2'}>{projectCount}+</Typography>
              <Typography variant="h6">Projects</Typography>
            </Box>
            <Box color="secondary.main">
              <Typography variant={downMd ? 'h4' : 'h2'}>{clientCount}+</Typography>
              <Typography variant="h6">Clients</Typography>
            </Box>
          </Box> */}
        </Grid>
        <Grid item xs={2} sm={1}>
          <Grid
            container
            columns={3}
            rowSpacing={2}
            sx={{
              '& .MuiAvatar-root': {
                width: 'max-content',
                height: downMd ? '18px' : '25px',
                opacity: 0.5,
              },
            }}
          >
            <Grid item xs={3} md={3}>
              <Typography variant="h5" {...(downSm && { variant: 'h6', align: 'center' })}>
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
