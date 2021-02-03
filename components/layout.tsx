import Footer from '../components/footer'
import HeaderMeta from '../components/headerMeta'
import AppBar from '../components/appBar';

export default function Layout({children}) {
  return (
    <>
      <HeaderMeta />
      <AppBar />
      <div>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}
