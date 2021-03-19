import Footer from '../components/footer'
import AppBar from '../components/appBar';

export default function Layout({children}) {
  return (
    <>
      <AppBar />
      <div>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}
