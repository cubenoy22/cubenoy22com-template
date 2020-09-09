import Container from './container'

const Footer = () => {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-12 flex flex-col items-center">
          <div className="flex flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            WIP
          </div>
          <div>
            (c) cubenoy22.com
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
