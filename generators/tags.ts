import fs from 'fs'
import { getAllPosts } from '../lib/api'
import { resolve } from 'path'
import { TagInfo } from '../types/taginfo'

(async () => {
  const posts = getAllPosts(['slug', 'tags'])
  const tags: { [key: string]: string[] } = {}
  
  posts.forEach(post => {
    post.tags!.forEach(tag => {
      if (tag.length === 0) {
        return
      }
      if (!tags[tag]) {
        tags[tag] = []
      }
      tags[tag].push(post.slug!)
    })
  })
  
  const promises: Promise<any>[] = []
  promises.push(new Promise((res, rej) => {
    const result: TagInfo[] = Object.keys(tags).map(tag => ({
      name: tag,
      numberOfPosts: tags[tag].length
    }))
    fs.writeFile(resolve(`../gen/taginfo.json`), JSON.stringify(result), (error) => {
      error ? rej(error) : res()
    })
  }))
  Object.keys(tags).forEach(tag => {
    promises.push(
      new Promise((res, rej) => {
        fs.writeFile(resolve(`../gen/tags/${tag}.json`), JSON.stringify(tags[tag]), (error) => {
          error ? rej(error) : res()
        })
      })
    )
  })

  await Promise.all(promises)
})()
