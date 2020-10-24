import Layout from "../../components/layout"
import Header from "../../components/header"
import { getTagInfos } from "../../lib/tags"
import Container from "../../components/container"
import Link from "next/link"
import { TagInfo } from "../../types/taginfo"
import { CMS_NAME } from "../../lib/constants"
import { SEO } from "../../components/SEO"
import PostTitle from '../../components/post-title'
import Tag from "../../components/tag"

interface Props {
  tagInfos: TagInfo[]
}

const Tags: React.FC<Props> = ({ tagInfos }) => {
  return (
    <Layout>
      <Container>
        <Header />
        <SEO
          title={`タグ一覧 | ${CMS_NAME}`}
        />
        <PostTitle>タグ一覧</PostTitle>
        <div className='flex flex-wrap flex-col mb-8'>
        {
          tagInfos.map(tagInfo => (
            <Link href={`/tags/${tagInfo.name}`} key={tagInfo.name}>
              <a className='hover:underline text-lg'><Tag tag={tagInfo.name} />&nbsp;{`(${tagInfo.numberOfPosts})`}</a>
            </Link>
          ))
        }
        </div>
      </Container>
    </Layout>
  )
}

export default Tags

export async function getStaticProps() {
  return {
    props: {
      tagInfos: getTagInfos()
    },
  }
}