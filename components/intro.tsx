import { CMS_NAME } from '../lib/constants'

const Intro = () => {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-12 mb-12 md:mb-16">
      <h1 className="text-6xl md:text-7xl tracking-tighter leading-tight">
        {CMS_NAME}
      </h1>
    </section>
  )
}

export default Intro
