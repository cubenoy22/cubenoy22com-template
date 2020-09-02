import Link from 'next/link'

const Header = () => {
  return (
    <h2 className="text-2xl md:text-4xl tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
      <Link href="/">
        <a className="hover:underline">ブログ</a>
      </Link>
    </h2>
  )
}

export default Header
