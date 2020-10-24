import DateFormater from './date-formater'
import CoverImage from './cover-image'
import PostTitle from './post-title'
import PostType from '../types/post'
import TagFeed from './tag-feed'
import QiitaInfo from './qiita-info'

type Props = {
  post: PostType
}

const PostHeader: React.FC<Props> = ({ post: { title, coverImage, date, tags, qiitaLink }}) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <QiitaInfo qiitaLink={qiitaLink} />
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} src={coverImage} />
      </div>
      <div className="max-w-4xl mx-auto">
        <div className="mb-6 text-lg">
          <DateFormater dateString={date} />
          <TagFeed tags={tags} />
        </div>
      </div>
    </>
  )
}

export default PostHeader
