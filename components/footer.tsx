import Container from './container'
import { COPYRIGHT } from '../lib/constants'

const Footer = () => {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-12 flex flex-col items-center">
          <div className="flex flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            WIP
          </div>
          <div>
            {COPYRIGHT}
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
