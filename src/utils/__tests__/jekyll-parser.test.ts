import { parse } from '../jekyll-parser'

describe('parse()', () => {
  describe('empty / invalid input', () => {
    it('returns empty frontMatter and content for null', () => {
      expect(parse(null)).toEqual({
        frontMatter: {},
        content: { summary: '', detail: '' },
      })
    })

    it('returns empty frontMatter and content when front matter is empty', () => {
      expect(parse('\n---\n---\n')).toEqual({
        frontMatter: {},
        content: { summary: '', detail: '' },
      })
    })
  })

  describe('frontMatter parsing', () => {
    it('parses a single field', () => {
      const post = `
---
title: React 应用单元测试策略
---
`
      expect(parse(post).frontMatter).toEqual({ title: 'React 应用单元测试策略' })
    })

    it('parses multiple fields', () => {
      const post = `
---
title: React 应用单元测试策略
category: frontend
tags: react tdd
---
`
      expect(parse(post).frontMatter).toEqual({
        title: 'React 应用单元测试策略',
        category: 'frontend',
        tags: 'react tdd',
      })
    })
  })

  describe('content splitting', () => {
    it('treats the first line as summary and the rest as detail', () => {
      const post = `
---
title: React 应用单元测试策略
---

家人们，第一行默认是summary。

后面的。

全部。

都是内容。
`
      const { content } = parse(post)
      expect(content.summary).toBe('家人们，第一行默认是summary。')
      expect(content.detail).toContain('后面的。')
      expect(content.detail).toContain('全部。')
      expect(content.detail).toContain('都是内容。')
    })

    it('returns empty detail when body has only one line', () => {
      const post = `
---
title: Single line
---

just one line
`
      const { content } = parse(post)
      expect(content.summary).toBe('just one line')
      expect(content.detail).toBe('')
    })

    it('preserves --- horizontal rules inside the body', () => {
      const post = `
---
title: React 应用单元测试策略
---

我是正文

我还有分段

---

[一些引用]: https://wip.com
`
      expect(parse(post).content.detail).toContain(
        '我还有分段\n\n---\n\n[一些引用]: https://wip.com'
      )
    })
  })
})
