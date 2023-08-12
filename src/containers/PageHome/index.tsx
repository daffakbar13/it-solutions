import axios from 'axios'
import React from 'react'
import { SectionClients, SectionHeader } from './sections'

export default function PageHome() {
  const [data, setData] = React.useState()

  React.useEffect(() => {
    axios.post('/it-solutions/api/hello').then((res) => console.log(res))
  }, [])
  return (
    <>
      <SectionHeader />
      <SectionClients />
    </>
  )
}
