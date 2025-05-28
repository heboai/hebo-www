"use client"

import Head from "next/head"

export function Favicon() {
  return (
    <Head>
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="apple-touch-icon-precomposed" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <meta name="msapplication-TileColor" content="#f9c823" />
      <meta name="theme-color" content="#f9c823" />
    </Head>
  )
} 