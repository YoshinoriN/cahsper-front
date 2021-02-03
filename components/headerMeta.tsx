import Head from 'next/head';

export default function HeaderMeta() {
  return (
    <Head>
      <meta name="robots" content="noindex, noarchive, noimageindex, nofollow"></meta>
      {/* TODO: add title,  */}
    </Head>
  )
}
