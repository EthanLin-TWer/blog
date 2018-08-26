import {
  getSummaryAsMarkdown,
  getTitleAsMarkdown,
  parseJekyllPost,
} from './selectors'

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

describe('summary getter', () => {
  test('should return empty summary when front matters does not include a summary', () => {
    const frontMatters = {}
    const summary = getSummaryAsMarkdown(frontMatters)

    expect(summary).toEqual('')
  })

  test('should wrap summary as markdown reference when front matters contains a summary', () => {
    const frontMatters = {
      summary: ' 这篇文章介绍了如何使用 JUnit 5 对你的应用进行单元测试 ',
    }
    const summary = getSummaryAsMarkdown(frontMatters)

    expect(summary).toEqual(
      '> 这篇文章介绍了如何使用 JUnit 5 对你的应用进行单元测试'
    )
  })

  test('should cut summary to maximum 150 characters(character set insensitive) when front matters contains a summary longer than 50 characters', () => {
    const frontMatters = {
      summary:
        '1我每段10个字符 2我每段10个字符 3我每段10个字符 4我每段10个字符 5我每段10个字符 6我每段10个字符 7我每段10个字符 8我每段10个字符 9我每段10个字符 10每段10个字符 11每段10个字符 12每段10个字符 13每段10个字符 14每段10个字符 15每段10个字符 16每段10个字符',
    }
    const summary = getSummaryAsMarkdown(frontMatters)

    expect(summary).toEqual(
      '> 1我每段10个字符 2我每段10个字符 3我每段10个字符 4我每段10个字符 5我每段10个字符 6我每段10个字符 7我每段10个字符 8我每段10个字符 9我每段10个字符 10每段10个字符 11每段10个字符 12每段10个字符 13每段10个字符 14每段10个字符 15每段10个字符 ...'
    )
  })

  test('should parse summary that contains two paragraphs separated with \n\n', () => {
    const frontMatters = {
      summary:
        '敏捷正逐渐变成开发日常的空气和水，然而身处其中的我们，有时会渐渐忘记一些实践背后的目的，为实践而实践，把敏捷变成了另一种流程。然后反过来骂敏捷。这个系列，尝试通过不断追问一些实践的动因，不仅要回答正确的实践是什么样，而且要回答错误的实践为什么错。\\n\\n主干开发是持续集成的基石。',
    }
    const summary = getSummaryAsMarkdown(frontMatters)

    expect(summary).toEqual(`
> 敏捷正逐渐变成开发日常的空气和水，然而身处其中的我们，有时会渐渐忘记一些实践背后的目的，为实践而实践，把敏捷变成了另一种流程。然后反过来骂敏捷。这个系列，尝试通过不断追问一些实践的动因，不仅要回答正确的实践是什么样，而且要回答错误的实践为什么错。
> 
> 主干开发是持续集成的基石。
`)
  })
})
