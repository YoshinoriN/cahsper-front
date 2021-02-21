import Head from 'next/head';

export default function HeaderMeta() {
  return (
    <Head>
      <meta name="robots" content="noindex, noarchive, noimageindex, nofollow"></meta>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      {/* TODO: add title,  */}
    </Head>
  )
}
