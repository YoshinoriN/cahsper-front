import Layout from '../components/layout'
import HeaderMeta from '../components/headerMeta'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <HeaderMeta />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
