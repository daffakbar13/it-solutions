import { Box, styled } from '@mui/material'

const MessageIcon1 = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: '21%',
  right: '20%',
  width: '13%',
  height: 'auto',
  padding: '3%',
  borderRadius: '4px',
  backgroundColor: theme.palette.secondary.main,
  '& .MuiSvgIcon-root': {
    width: '100%',
    height: '100%',
    color: 'white',
  },
}))

export default MessageIcon1
