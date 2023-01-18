import { Box, styled } from '@mui/material'

const MessageIcon1 = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: '21%',
  right: '20%',
  width: 'max-content',
  padding: '3%',
  borderRadius: '4px',
  backgroundColor: theme.palette.secondary.main,
  '& .MuiSvgIcon-root': {
    width: 25,
    height: 25,
    color: 'white',
  },
}))

export default MessageIcon1
