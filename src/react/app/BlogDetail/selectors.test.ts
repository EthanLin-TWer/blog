import { getTitleAsMarkdown, parseContent, parseJekyllPost } from './selectors'

describe('parseJekyllPost()', () => {
  test('simple test to test integration with parser util', () => {
    const store = {
      detail: {
        posts: {
          1: `
---
title: React 应用单元测试策略
---
          `,
        },
      },
    }

    const result = parseJekyllPost(store.detail.posts['1'])

    expect(result.frontMatters).toEqual({
      title: 'React 应用单元测试策略',
    })
  })
})

describe('getTitleAsMarkdown', () => {
  test('should return title as markdown level 1 header when title is not empty', () => {
    const frontMatters = {
      title: ' React 单元测试策略',
    }
    const title = getTitleAsMarkdown(frontMatters)

    expect(title).toEqual('# React 单元测试策略')
  })

  test('should return empty string when title is empty', () => {
    const frontMatters = {}
    const title = getTitleAsMarkdown(frontMatters)

    expect(title).toEqual('')
  })
})

describe('parseContent', () => {
  test('should get first paragraph as blog summary', () => {
    const content = `
    这是第一段内容，默认作为 summary。
    
    其他。
    
    第二段。
    
    > 一些其他的语法
    `
    const expected = {
      summary: '这是第一段内容，默认作为 summary。',
      detail: expect.stringContaining(`其他。
    
    第二段。
    
    > 一些其他的语法`),
    }

    const result = parseContent(content)

    expect(result).toEqual(expected)
  })
})
