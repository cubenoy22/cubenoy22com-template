import Container from './container'

const Footer = () => {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-12 flex flex-col lg:flex-row items-center">
          <div className="flex flex-row lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <a
              href="/"
              className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white py-3 duration-200 transition-colors mb-6 lg:mb-0"
            >
              GitHub
            </a>
            <a
              href="/"
              className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white py-3 duration-200 transition-colors mb-6 lg:mb-0"
            >
              SoundCloud
            </a>
            <a
              href="/"
              className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white py-3 duration-200 transition-colors mb-6 lg:mb-0"
            >
              Twitter
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
