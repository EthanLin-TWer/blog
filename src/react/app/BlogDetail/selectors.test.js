import { getTitleAsMarkdown, parseJekyllPost } from './selectors'

describe('parseJekyllPost()', () => {
  test('should return empty object when post is empty', () => {
    const store = {
      detail: {
        posts: {},
      },
    }
    const ownProps = {
      match: {
        params: {
          id: 1,
        },
      },
    }
    const expected = {
      frontMatters: {},
      content: '',
    }

    const result = parseJekyllPost(store, ownProps)

    expect(result).toEqual(expected)
  })

  test('should return empty object when front matters is empty', () => {
    const store = {
      detail: {
        posts: {
          1: `
---
---
          `,
        },
      },
    }
    const ownProps = {
      match: {
        params: {
          id: 1,
        },
      },
    }

    const result = parseJekyllPost(store, ownProps)

    expect(result.frontMatters).toEqual({})
  })

  test('should return object with title when front matters contains a title', () => {
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
    const ownProps = {
      match: {
        params: {
          id: 1,
        },
      },
    }

    const result = parseJekyllPost(store, ownProps)

    expect(result.frontMatters).toEqual({
      title: 'React 应用单元测试策略',
    })
  })

  test('should return object with front matters key/values when front matters contains multiple values', () => {
    const store = {
      detail: {
        posts: {
          1: `
---
title: React 应用单元测试策略
summary: 这是一份很好的单元测试策略
---
          `,
        },
      },
    }
    const ownProps = {
      match: {
        params: {
          id: 1,
        },
      },
    }

    const result = parseJekyllPost(store, ownProps)

    expect(result.frontMatters).toEqual({
      title: 'React 应用单元测试策略',
      summary: '这是一份很好的单元测试策略',
    })
  })

  test('should return object with front matters key/values when front matters contains multiple values', () => {
    const store = {
      detail: {
        posts: {
          1: `
---
title: React 应用单元测试策略
summary: 这是一份很好的单元测试策略
---
          
我是正文

我还有分段
          `,
        },
      },
    }
    const ownProps = {
      match: {
        params: {
          id: 1,
        },
      },
    }
    const expected = {
      frontMatters: {
        title: 'React 应用单元测试策略',
        summary: '这是一份很好的单元测试策略',
      },
      content: expect.stringContaining('我是正文\n\n我还有分段'),
    }

    const result = parseJekyllPost(store, ownProps)

    expect(result).toMatchObject(expected)
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
