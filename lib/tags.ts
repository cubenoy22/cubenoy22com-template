import fs from 'fs'
import { join } from 'path'
import { TagInfo } from '../types/taginfo'
import PostType from '../types/post'

const basePath = join(process.cwd(), 'gen')

export function getTagInfos(): TagInfo[] {
  return JSON.parse(fs.readFileSync(join(basePath, 'taginfo.json')).toString())
}

export function getCachedPostsForTag(tag: string): Pick<PostType, 'slug' | 'title'>[] {
  return JSON.parse(fs.readFileSync(join(basePath, `tags/${tag}.json`)).toString())
}
