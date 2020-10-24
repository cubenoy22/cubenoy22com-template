import DateFormater from './date-formater'
import CoverImage from './cover-image'
import Link from 'next/link'
import Post from '../types/post'

type Props = {
  post: Post
}

const HeroPost = ({
  post: { title, coverImage, slug, date, excerpt, tags }
}: Props) => {
  return (
    <section className="mb-8 md:flex md:items-center">
      <div className="mb-8 md:mb-0 md:mr-8 md:w-1/2">
        <CoverImage title={title} src={coverImage} slug={slug} />
      </div>
      <div className="md:grid md:w-1/2 md:row-gap-2 lg:row-gap-4 mb-20 md:mb-0">
        <div>
          <h3 className="mb-4 text-3xl lg:text-6xl leading-tight">
            <Link as={`/posts/${slug}`} href="/posts/[slug]">
              <a className="hover:underline">{title}</a>
            </Link>
          </h3>
          <div className="mb-4 md:mb-0 text-lg">
            <DateFormater dateString={date} />
          </div>
          <div className="flex flex-wrap">{
            tags.map(t => (
              <Link href={`/tags/${t}`} key={t}>
                <a className="hover:underline text-blue-600 pr-2">{t}</a>
              </Link>
            ))
          }</div>
        </div>
        <div>
          <p className="text-lg mb-4">{excerpt}</p>
        </div>
      </div>
    </section>
  )
}

export default HeroPost
