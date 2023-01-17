import { Box, Typography } from '@mui/material'
import Router from 'next/router'
import React from 'react'

interface MenuList {
  title: string
  path: string
}

interface FooterListProps {
  title: string
  lists: MenuList[]
}

export default function FooterList(props: FooterListProps) {
  const { title, lists } = props
  return (
    <Box display="flex" flexDirection="column" gap={2}>
      <Box>
        <Typography variant="h6">{title}</Typography>
      </Box>
      <Box display="flex" flexDirection="column" gap={1}>
        {lists.map((l, i) => (
          <Typography
            key={i}
            variant="body2"
            onClick={() => Router.push(l.path)}
            sx={{ cursor: 'pointer', color: 'gray', ':hover': { color: 'white' } }}
          >
            {l.title}
          </Typography>
        ))}
      </Box>
    </Box>
  )
}
