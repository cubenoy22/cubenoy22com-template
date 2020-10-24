
import Link from 'next/link'
import Tag from './tag'

const TagFeed = (props: { tags: string[] }) => {
  const { tags } = props;
  if (tags.length < 1) {
    return null;
  }
  return (
    <div className="flex flex-wrap text-sm">{
      tags.map(t => (
        <Link href={`/tags/${t}`} key={t}>
          <a className="underline pr-2"><Tag tag={t} /></a>
        </Link>
      ))
    }</div>
  )
}

export default TagFeed
