import { parseJekyllPost } from './selectors'

describe('parseJekyllPost()', () => {
  const postContent = `
---
title: React 应用单元测试策略
---

家人们，第一行默认是summary。

后面的。

全部。

都是。

内容。

> 默认Markdown都是支持的。
  `

  it('should parse post title', () => {
    const post = parseJekyllPost(postContent)
    expect(post.title).toBe('React 应用单元测试策略')
  })

  it('should parse first paragraph in the post as summary', () => {
    const post = parseJekyllPost(postContent)
    expect(post.summary).toBe('家人们，第一行默认是summary。')
  })

  it('should parse remaining as post content', () => {
    const post = parseJekyllPost(postContent)
    expect(post.content).toEqual(`后面的。

全部。

都是。

内容。

> 默认Markdown都是支持的。`)
  })
})
