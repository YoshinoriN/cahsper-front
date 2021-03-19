import "../styles/global.scss";
import Layout from '../components/layout'
import HeaderMeta from '../components/headerMeta'
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from '../config';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <HeaderMeta />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
