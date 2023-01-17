import { Avatar, Box, Typography } from '@mui/material'
import Router from 'next/router'
import React from 'react'
import { ICLogo } from 'src/assets'
import { getPath } from 'src/helpers'

export default function ITSolutionsLogo() {
  return (
    <Box
      display="flex"
      gap={1}
      sx={{ cursor: 'pointer' }}
      onClick={() => Router.push(getPath('home'))}
    >
      <Avatar src={ICLogo.src} sx={{ width: 50, height: 50 }} />
      <Typography variant="h5" margin="auto 0" fontWeight="bold">
        it solutions
      </Typography>
    </Box>
  )
}
