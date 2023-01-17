import { Avatar, Grid, Typography } from '@mui/material'
import Head from 'next/head'
import Router from 'next/router'
import React from 'react'
import { ICNotFound } from 'src/assets'
import { Button, Section } from 'src/components'
import { getPath } from 'src/helpers'

export default function PageNotFound() {
  return (
    <>
      <Head>
        <title>Page Not Found</title>
      </Head>
      <Section>
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
