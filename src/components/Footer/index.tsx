import { Box, BoxProps, styled } from '@mui/material'
import FooterList from './FooterList'

const MyFooter = styled((props: BoxProps) => <Box component="footer" {...props} />)(() => ({
  bottom: 0,
  right: 0,
  left: 0,
  padding: '40px 7%',
  backgroundColor: 'black',
  color: 'white',
}))

export default function Footer(props: BoxProps) {
  return <MyFooter {...props} />
}

Footer.List = FooterList
