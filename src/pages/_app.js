import style from '../css/style.css'
import Head from "next/head"

export default function Amorosine({ Component, pageProps }) {
  return (
    <>
      <Head>
          <meta charSet="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=, initial-scale=1.0" />
          <title>Amorosine Team</title>
        <link rel="shortcut icon" type="image/x-icon" href="/logo.png" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
