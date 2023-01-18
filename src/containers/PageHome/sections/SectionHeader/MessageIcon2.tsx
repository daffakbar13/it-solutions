import { styled } from '@mui/material'
import MessageIcon1 from './MessageIcon1'

const MessageIcon2 = styled(MessageIcon1)(({ theme }) => ({
  bottom: '6%',
  right: '75%',
  backgroundColor: theme.palette.primary.main,
}))

export default MessageIcon2
