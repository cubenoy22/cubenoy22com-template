import DateFormater from './date-formater'
import CoverImage from './cover-image'
import Link from 'next/link'
import Post from '../types/post'
import TagFeed from './tag-feed'

type Props = {
  post: Pick<Post, 'title' | 'coverImage' | 'date' | 'excerpt' | 'slug' | 'tags'>
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
        <TagFeed tags={tags} />
        <p className="mt-4 mb-4">{excerpt}</p>
      </div>
    </div>
  )
}

export default PostPreview
