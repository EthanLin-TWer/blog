import { parse } from './jekyll-parser'

describe('parseJekyllPost()', () => {
  test('should return empty object when post is empty', () => {
    const expected = {
      frontMatters: {},
      content: '',
    }

    const result = parse(null)

    expect(result).toEqual(expected)
  })

  test('should return empty object when front matters is empty', () => {
    const post = `
---
---
    `
    const expected = {
      frontMatters: {},
      content: '',
    }

    const result = parse(post)

    expect(result).toEqual(expected)
  })

  test('should return object with title when front matters contains a title', () => {
    const post = `
---
title: React 应用单元测试策略
---
    `
    const expected = {
      frontMatters: {
        title: 'React 应用单元测试策略',
      },
      content: '',
    }

    const result = parse(post)

    expect(result).toEqual(expected)
  })

  test('should return object with front matters key/values when front matters contains multiple values', () => {
    const post = `
---
title: React 应用单元测试策略
summary: 这是一份很好的单元测试策略
---
    `
    const expected = {
      frontMatters: {
        title: 'React 应用单元测试策略',
        summary: '这是一份很好的单元测试策略',
      },
      content: '',
    }
    const result = parse(post)

    expect(result).toEqual(expected)
  })

  test('should return object with front matters key/values when front matters contains multiple values', () => {
    const post = `
---
title: React 应用单元测试策略
summary: 这是一份很好的单元测试策略
---
          
我是正文

我还有分段
    `
    const expected = {
      frontMatters: {
        title: 'React 应用单元测试策略',
        summary: '这是一份很好的单元测试策略',
      },
      content: expect.stringContaining('我是正文\n\n我还有分段'),
    }

    const result = parse(post)

    expect(result).toEqual(expected)
  })
})
