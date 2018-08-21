import { parseJekyllPost } from './selectors'

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
      attributes: {},
      body: '',
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

    expect(result.attributes).toEqual({})
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

    expect(result.attributes).toEqual({
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

    expect(result.attributes).toEqual({
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
          
# 标题

我还有内容呢
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
      attributes: {
        title: 'React 应用单元测试策略',
        summary: '这是一份很好的单元测试策略',
      },
      body: `# 标题\n\n我还有内容呢`,
    }

    const result = parseJekyllPost(store, ownProps)

    expect(result).toMatchObject(expected)
  })
})
