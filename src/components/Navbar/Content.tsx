import { Grid, GridProps, styled } from '@mui/material'

export const Content = styled((props: GridProps) => <Grid item {...props} />)(() => ({}))
