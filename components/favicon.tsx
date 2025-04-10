"use client"

import Head from "next/head"

export function Favicon() {
  return (
    <Head>
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <meta name="msapplication-TileColor" content="#f9c823" />
      <meta name="theme-color" content="#f9c823" />
    </Head>
  )
} 