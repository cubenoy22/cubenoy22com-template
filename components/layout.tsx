import Footer from './footer'
import Meta from './meta'
import FontLoader from './font-loader'

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Layout = ({ preview, children }: Props) => {
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
