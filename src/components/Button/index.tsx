import { Button as ButtonMui, ButtonProps, styled } from '@mui/material'

const Button = styled((props: ButtonProps) => <ButtonMui disableElevation {...props} />)(
  ({ theme, variant }) => ({
    textTransform: 'none',
    ...(variant === 'contained' && {
      backgroundColor: 'black',
      color: 'white',
      ':hover': {
        backgroundColor: theme.palette.primary.main,
      },
    }),
    ...((variant === 'text' || !variant) && {
      color: 'black',
      ':hover': {
        backgroundColor: 'transparent',
        color: theme.palette.primary.main,
      },
    }),
  }),
)

export default Button
