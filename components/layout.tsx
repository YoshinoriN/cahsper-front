import Footer from '../components/footer'
import AppBar from '../components/appBar';

export default function Layout({children}) {
  return (
    <>
      <AppBar />
        <main>{children}</main>
      <Footer />
    </>
  )
}
