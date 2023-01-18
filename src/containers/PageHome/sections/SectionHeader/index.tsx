import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import {
  ICHeroElement1,
  ICHeroElement2,
  ICHeroElement3,
  ICHeroElement4,
  ICHeroImage1,
  ICHeroImage4,
} from 'src/assets'
import { Button, Section } from 'src/components'
import EmailIcon from '@mui/icons-material/Email'
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import HeroElement3 from './HeroElement3'
import HeroElement4 from './HeroElement4'
import HeroImage1 from './HeroImage1'
import HeroImage4 from './HeroImage4'
import MessageIcon1 from './MessageIcon1'
import MessageIcon2 from './MessageIcon2'
import HeroElement1 from './HeroElement1'
import HeroElement2 from './HeroElement2'

export default function SectionHeader() {
  return (
    <Section>
      <Grid container columns={2} spacing={3}>
        <Grid item xs={2} md={1}>
          <Box display="flex" flexDirection="column" gap={2}>
            <Typography variant="h2">Move Your Bussiness To Digital Platform</Typography>
            <Typography variant="body1" color="GrayText">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui excepturi sit rerum
              architecto officiis consectetur alias inventore nesciunt ab ipsa accusantium
            </Typography>
            <Box display="flex" gap={2}>
              <Button variant="contained">Get Started - {"It's"} free</Button>
              <Button variant="text" endIcon={<ArrowForwardIcon />}>
                How it works
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid item container xs={2} md={1} columns={2}>
          <Grid item xs={1} position="relative">
            <HeroImage1 variant="rounded" src={ICHeroImage1.src} />
            <HeroElement1 variant="square" src={ICHeroElement1.src} />
            <HeroElement2 variant="square" src={ICHeroElement2.src} />
            <HeroElement3 variant="square" src={ICHeroElement3.src} />
            <HeroElement4 variant="square" src={ICHeroElement4.src} />
            <MessageIcon1>
              <EmailIcon />
            </MessageIcon1>
            <MessageIcon2>
              <QuestionAnswerIcon />
            </MessageIcon2>
          </Grid>
          <Grid item xs={1}>
            <HeroImage4 variant="rounded" src={ICHeroImage4.src} />
          </Grid>
        </Grid>
      </Grid>
    </Section>
  )
}
