import Layout from '../../components/layout'
import Header from '../../components/header'
import { getTagInfos, getCachedPostsForTag } from '../../lib/tags'
import Container from '../../components/container'
import Link from 'next/link'
import PostType from '../../types/post'
import Head from 'next/head'
import { CMS_NAME } from '../../lib/constants'

interface Props {
  tag: string
  posts: Pick<PostType, 'slug' | 'title'>[]
}

const PostsByTag: React.FC<Props> = ({ tag, posts }) => {
  return (
    <Layout>
      <Container>
        <Header />
        <Head>
          <title>
            {tag} | {CMS_NAME}
          </title>
        </Head>
        <h2 className='text-3xl'>タグ: {tag}</h2>
        <div className='flex flex-col'>
        {
          posts.map(({ slug, title }) => (
            <Link key={slug} href={`/posts/${slug}`}><a className='text-blue-600'>{title}</a></Link>
          ))
        }
        </div>
        <div className='mt-4'>
          <Link href='/tags'><a className='text-blue-600 text-xl'>すべてのタグ</a></Link>
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
