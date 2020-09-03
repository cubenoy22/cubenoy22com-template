import Layout from '../../components/layout'
import Header from '../../components/header'
import { getTagInfos, getSlugsForTag } from '../../lib/tags'
import Container from '../../components/container'
import Link from 'next/link'

interface Props {
  tag: string
  slugs: string[]
}

const PostsByTag: React.FC<Props> = ({ tag, slugs }) => {
  return (
    <Layout>
      <Container>
        <Header />
        <h2 className='text-3xl'>{tag}</h2>
        <div className='flex flex-col'>
        {
          slugs.map(slug => (
            <Link key={slug} href={`/posts/${slug}`}><a className='text-blue-600'>{slug}</a></Link>
          ))
        }
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
      slugs: getSlugsForTag(tag)
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
