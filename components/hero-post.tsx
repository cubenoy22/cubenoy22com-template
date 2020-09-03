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
    <section>
      <div className="mb-8">
        <CoverImage title={title} src={coverImage} slug={slug} />
      </div>
      <div className="md:grid md:grid-cols-2 md:col-gap-16 lg:col-gap-8 mb-20 md:mb-28">
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
          <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
        </div>
      </div>
    </section>
  )
}

export default HeroPost
