import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material'
import React from 'react'
import { createMenu } from 'src/helpers'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Router from 'next/router'

interface Menu2Props {
  menu: ReturnType<typeof createMenu>
}

export default function Menu2(props: Menu2Props) {
  const { menu } = props

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={menu.title.concat('-content')}
        id={menu.title.concat('-header')}
      >
        <Typography>{menu.title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Box display="flex" flexDirection="column" gap={1}>
          {menu.subMenu.map((sub, idx) => (
            <Typography
              key={idx}
              onClick={() => Router.push(sub.path)}
              sx={{ ':hover': { color: 'primary.main', cursor: 'pointer' } }}
            >
              {sub.name}
            </Typography>
          ))}
        </Box>
      </AccordionDetails>
    </Accordion>
  )
}
