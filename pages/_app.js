import Head from 'next/head'
import '../styles/base.css'
import '../styles/tailwind.css'


export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Chris's Digital Garden</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}
