import catchy from 'catchy-image'
import { getAllPosts } from '../lib/api'

async function genImage(slug: string, title: string, coverImage: string | undefined) {
  const options = {
    output: {
      directory: '../public/ogimages/',
      fileName: `${slug}.png`,
    },
    image: {
      width: 1200,
      height: 630,
      backgroundColor: '#222639',
      backgroundImage: coverImage && require.resolve(`../public${coverImage}`),
    },
    style: {
      title: {
        fontFamily: 'Noto Sans JP',
        fontColor: '#000',
        fontWeight: '300',
        fontSize: 64,
        paddingTop: 100,
        paddingBottom: 200,
        paddingLeft: 150,
        paddingRight: 150,
      },
      author: {
        fontFamily: 'Noto Sans JP',
        fontColor: '#000',
        fontWeight: '300',
        fontSize: 48,
      },
    },
    meta: {
      title,
      author: 'cubenoy22.com',
    },
    fontFile: [
      {
        path: require.resolve('./assets/fonts/NotoSansJP-Thin.otf'),
        family: 'Noto Sans JP',
        weight: '100',
      },
      {
        path: require.resolve('./assets/fonts/NotoSansJP-Light.otf'),
        family: 'Noto Sans JP',
        weight: '300',
      },
    ],
    iconFile: require.resolve('./assets/avatar.png'),
    timeout: 10000,
  }
  try {
    await catchy.generate(options)
  } catch (error) {
    console.error(error)
  }
}

(async () => {
  const posts = getAllPosts(['slug', 'title', 'coverImage'])
  await Promise.all(posts.map(post => {
    const { slug, title, coverImage } = post
    return genImage(slug!, title!, coverImage)
  }))
})()
