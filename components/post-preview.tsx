import DateFormater from './date-formater'
import CoverImage from './cover-image'
import Link from 'next/link'
import Post from '../types/post'

type Props = {
  post: Post
}

const PostPreview = ({
  post: { title, coverImage, date, excerpt, slug, tags }
}: Props) => {
  return (
    <div className="md:flex md:items-center">
      <div className="mb-5 md:w-1/3 md:mr-8">
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>
      <div className="md:w-2/3">
        <h3 className="text-3xl mb-3 leading-tight">
          <Link as={`/posts/${slug}`} href="/posts/[slug]">
            <a className="hover:underline">{title}</a>
          </Link>
        </h3>
        <div className="text-lg">
          <DateFormater dateString={date} />
        </div>
        <div className="flex flex-wrap mb-4">{
          tags.map(t => (
            <Link href={`/tags/${t}`} key={t}>
              <a className="hover:underline text-blue-600 pr-2">{t}</a>
            </Link>
          ))
        }</div>
        <p className="text-md mb-4">{excerpt}</p>
      </div>
    </div>
  )
}

export default PostPreview
