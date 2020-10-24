import PostPreview from './post-preview'
import Post from '../types/post'

type Props = {
  posts: Post[]
}

const MoreStories = ({ posts }: Props) => {
  return (
    <section>
      <h2 className="mb-8 text-4xl md:text-6xl tracking-tighter leading-tight">
        他の投稿
      </h2>
      <div className="grid grid-cols-1 row-gap-8 mb-32">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            post={post}
          />
        ))}
      </div>
    </section>
  )
}

export default MoreStories
