import Footer from './footer'
import Meta from './meta'
import FontLoader from './font-loader'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <FontLoader />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

export default Layout
