import { Avatar, styled } from '@mui/material'

const HeroImage4 = styled(Avatar)(({ theme }) => ({
  marginTop: '30px',
  width: '100%',
  height: 'auto',
  borderColor: theme.palette.primary.light,
  borderWidth: 0.1,
  borderStyle: 'solid',
}))

export default HeroImage4
