import fs from 'fs'
import { join } from 'path'
import { TagInfo } from '../types/taginfo'

const basePath = join(process.cwd(), 'gen')

export function getTagInfos(): TagInfo[] {
  return JSON.parse(fs.readFileSync(join(basePath, 'taginfo.json')).toString())
}

export function getSlugsForTag(tag: string): string[] {
  return JSON.parse(fs.readFileSync(join(basePath, `tags/${tag}.json`)).toString())
}
