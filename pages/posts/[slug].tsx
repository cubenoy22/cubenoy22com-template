import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from '../../components/container'
import PostBody from '../../components/post-body'
import Header from '../../components/header'
import PostHeader from '../../components/post-header'
import Layout from '../../components/layout'
import { getPostBySlug, getAllPosts } from '../../lib/api'
import PostTitle from '../../components/post-title'
import { CMS_NAME, SITE_BASE_URL } from '../../lib/constants'
import markdownToHtml from '../../lib/markdownToHtml'
import PostType from '../../types/post'
import { getCachedPostsForTag } from '../../lib/tags'
import { SEO } from '../../components/SEO'
import PostPreview from '../../components/post-preview'

type Props = {
  post: PostType,
  otherPosts?: PostType[]
}

const Post = ({ post, otherPosts }: Props) => {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <Layout>
      <Container>
        <Header />
        <SEO
          title={`${post.title} | ${CMS_NAME}`}
          ogImage={post.ogImage?.url || `${SITE_BASE_URL}ogimages/${post.slug}.png`}
          description={post.excerpt}
        />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article className="mb-8">
              <PostHeader post={post} />
              <PostBody content={post.content} />
            </article>
            {
              otherPosts && otherPosts.length > 0 ? (
                <div className="max-w-4xl mx-auto mb-24">
                  <h3 className='text-3xl mb-4'>{`他の ${post.tags[0]} タグの記事`}</h3>
                  <div className='flex flex-col'>
                  {
                    otherPosts.map((post) => (
                      <PostPreview post={post} />
                    ))
                  }
                  </div>
                </div>
              ) : (
                <div className='mb-24' />
              )
            }
          </>
        )}
      </Container>
    </Layout>
  )
}

export default Post

type Params = {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'content',
    'ogImage',
    'coverImage',
    'tags',
    'excerpt'
  ])
  const content = await markdownToHtml(post.content || '')
  const otherPosts = post?.tags?.[0] && 
    getCachedPostsForTag(post.tags[0])
    .filter(({ slug }) => slug !== post.slug)
    .slice(0, 10) // Up to 10 articles

  return {
    props: {
      post: {
        ...post,
        content,
      },
      otherPosts
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((posts) => {
      return {
        params: {
          slug: posts.slug,
        },
      }
    }),
    fallback: false,
  }
}
