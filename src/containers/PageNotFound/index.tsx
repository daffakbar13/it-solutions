import { Avatar, Box, Grid, Typography } from '@mui/material'
import Head from 'next/head'
import Router, { useRouter } from 'next/router'
import React from 'react'
import { ICNotFound } from 'src/assets'
import { Button, Navbar, Section } from 'src/components'
import { getPath } from 'src/helpers'

export default function PageNotFound() {
  const [showChild, setShowChild] = React.useState(false)
  const [footerHeight, setFooterHeight] = React.useState(0)
  const router = useRouter()

  React.useEffect(() => {
    const notFoundPath = getPath('notfound')
    const isOnNotFoundPath = router.asPath === notFoundPath
    if (!isOnNotFoundPath) {
      router.replace(notFoundPath)
    } else {
      setShowChild(true)
    }
  }, [router])

  React.useEffect(() => {
    const footer = document.querySelector('footer')
    setFooterHeight(footer?.clientHeight || 0)
  }, [])

  if (!showChild) {
    return <Box sx={{ height: `calc(100vh - ${Navbar.height}px - ${footerHeight}px)` }} />
  }

  return (
    <>
      <Head>
        <title>Page Not Found</title>
      </Head>
      <Section position="sticky" bottom={0}>
        <Grid container direction="column" spacing={2}>
          <Grid item xs>
            <center>
              <Avatar src={ICNotFound.src} variant="square" sx={{ width: 300, height: 'auto' }} />
            </center>
          </Grid>
          <Grid item xs>
            <center>
              <Typography variant="h4">
                <b>Page Not Found</b>
              </Typography>
            </center>
          </Grid>
          <Grid item xs>
            <center>
              <Button variant="contained" onClick={() => Router.push(getPath('home'))}>
                Back To Home
              </Button>
            </center>
          </Grid>
        </Grid>
      </Section>
    </>
  )
}
