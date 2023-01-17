import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'
import { ICLogo } from 'src/assets'

export default function Header() {
  const router = useRouter()
  const [, title] = router.asPath.split('/')

  return (
    <Head>
      <title>{title || 'Home'}</title>
      <meta name="description" content="Generated by IT Solutions" />
      <link rel="icon" href={ICLogo.src} />
    </Head>
  )
}
