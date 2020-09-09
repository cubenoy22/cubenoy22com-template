import Layout from "../../components/layout"
import Header from "../../components/header"
import { getTagInfos } from "../../lib/tags"
import Container from "../../components/container"
import Link from "next/link"
import { TagInfo } from "../../types/taginfo"
import { CMS_NAME } from "../../lib/constants"
import { SEO } from "../../components/SEO"

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
        <h2 className='text-3xl'>タグ一覧</h2>
        <div className='flex flex-wrap flex-col'>
        {
          tagInfos.map(tagInfo => (
            <Link href={`/tags/${tagInfo.name}`} key={tagInfo.name}>
              <a className='text-blue-600 ml-2'>{`${tagInfo.name} (${tagInfo.numberOfPosts})`}</a>
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