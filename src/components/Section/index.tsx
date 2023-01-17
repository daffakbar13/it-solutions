import { Box, BoxProps, styled } from '@mui/material'
import Navbar from '../Navbar'

const Section = styled((props: BoxProps) => <Box component="section" {...props} />)(() => ({
  padding: `${Navbar.height}px  7%`,
}))

export default Section
