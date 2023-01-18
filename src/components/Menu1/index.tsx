import React from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { Box, Popover, SxProps, Typography } from '@mui/material'
import { createMenu } from 'src/helpers'
import Router from 'next/router'
import Button from '../Button'

const paperStyles: SxProps = {
  display: 'flex',
  flexDirection: 'column',
  gap: 2,
  p: 3,
  backgroundColor: 'black',
  '& h6': {
    color: 'white',
    fontWeight: '500',
    ':hover': { color: 'primary.main', cursor: 'pointer' },
  },
}

interface Menu1Props {
  menu: ReturnType<typeof createMenu>
}

export default function Menu1(props: Menu1Props) {
  const { menu } = props
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : undefined

  return (
    <Box>
      <Button
        aria-describedby={id}
        variant="text"
        onClick={handleClick}
        endIcon={
          <KeyboardArrowDownIcon
            sx={{
              transition: 'all .3s',
              ...(open && { transform: 'rotate(180deg)' }),
            }}
          />
        }
        sx={{ color: open ? 'primary.main' : 'black' }}
      >
        <Typography variant="body1">{menu.title}</Typography>
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        PaperProps={{ sx: paperStyles }}
      >
        {menu.subMenu.map((m, i) => (
          <Typography key={i} variant="subtitle2" onClick={() => Router.push(m.path)}>
            {m.name}
          </Typography>
        ))}
      </Popover>
    </Box>
  )
}
