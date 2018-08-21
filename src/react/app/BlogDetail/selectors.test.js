import { frontMatters } from './selectors'

describe('frontMatters()', () => {
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

    const result = frontMatters(store, ownProps)

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

    const result = frontMatters(store, ownProps)

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

    const result = frontMatters(store, ownProps)

    expect(result.attributes).toEqual({
      title: 'React 应用单元测试策略',
      summary: '这是一份很好的单元测试策略',
    })
  })
})
