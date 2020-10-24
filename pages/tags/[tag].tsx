import Layout from '../../components/layout'
import Header from '../../components/header'
import { getTagInfos, getCachedPostsForTag } from '../../lib/tags'
import Container from '../../components/container'
import Link from 'next/link'
import PostType from '../../types/post'
import { CMS_NAME } from '../../lib/constants'
import { SEO } from '../../components/SEO'
import PostPreview from '../../components/post-preview'
import PostTitle from '../../components/post-title'

interface Props {
  tag: string
  posts: PostType[]
}

const PostsByTag: React.FC<Props> = ({ tag, posts }) => {
  return (
    <Layout>
      <Container>
        <SEO 
          title={`${tag} | ${CMS_NAME}`}
          description={`posts with tag: ${tag}`}
        />
        <Header />
        <PostTitle>タグ: {tag}</PostTitle>
        <div className='flex flex-col'>
        {
          posts.map((post) => (
            <PostPreview post={post} />
          ))
        }
        </div>
        <div className='mt-4'>
          <Link href='/tags'>
            <a className='text-xl hover:underline'>すべてのタグ</a>
          </Link>
        </div>
      </Container>
    </Layout>
  )
}

export default PostsByTag

interface Params {
  params: {
    tag: string
  }
}

export async function getStaticProps({ params: { tag } }: Params): Promise<{ props: Props }> {
  return {
    props: {
      tag,
      posts: getCachedPostsForTag(tag)
    }
  }
}

export async function getStaticPaths() {
  return {
    paths: getTagInfos().map(({ name }) => ({
      params: {
        tag: name,
      }
    })),
    fallback: false,
  }
}
