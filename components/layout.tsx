import Footer from './footer'
import Meta from './meta'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Meta />
      <div className="flex-grow">
        <main>{children}</main>
      </div>
      <div className="flex-grow-0">
        <Footer />
      </div>
    </div>
  )
}

export default Layout
