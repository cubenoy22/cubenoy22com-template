import cn from 'classnames'
import Link from 'next/link'

type Props = {
  title: string
  src: string
  slug?: string
}

const CoverImage = ({ title, src, slug }: Props) => {
  const responsiveImage = require(`../public${src}?resize&sizes[]=375&sizes[]=768&sizes[]=1000`)
  const image = (
    <picture>
      <img
        src={responsiveImage.src}
        srcSet={responsiveImage.srcSet}
        alt={`Cover Image for ${title}`}
        className={cn('shadow-small', {
          'hover:shadow-medium transition-shadow duration-200': slug,
        })}
        loading='lazy'
      />
    </picture>
  )
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  )
}

export default CoverImage
