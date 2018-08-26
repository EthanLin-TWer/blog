import React from 'react'
import { shallow } from 'enzyme'

import { BlogDetailOnlyForTesting } from './index'

jest.mock(
  '../../components/GithubFlavoredMarkdown',
  () => 'GithubFlavoredMarkdown'
)

describe('component', () => {
  test.skip('should render title in markdown format when there is a title', () => {
    const component = shallow(
      <BlogDetailOnlyForTesting
        frontMatters={{ title: '我是博客题目' }}
        match={{ params: { id: '2018-03-20-some-article' } }}
      />
    )

    const markdownComponent = component.at(0).find('GithubFlavoredMarkdown')

    expect(markdownComponent).toHaveLength(1)
  })
})

describe('summary getter', () => {
  test('should return empty summary when front matters does not include a summary', () => {
    const component = new BlogDetailOnlyForTesting()
    component.props = {
      frontMatters: {},
    }

    expect(component.summary).toEqual('')
  })

  test('should return wrap summary as markdown reference when front matters contains a summary', () => {
    const component = new BlogDetailOnlyForTesting()
    component.props = {
      frontMatters: {
        summary: ' 这篇文章介绍了如何使用 JUnit 5 对你的应用进行单元测试 ',
      },
    }

    expect(component.summary).toEqual(
      '> 这篇文章介绍了如何使用 JUnit 5 对你的应用进行单元测试'
    )
  })

  test('should return cut summary to maximum 50 characters(character set insensitive) when front matters contains a summary longer than 50 characters', () => {
    const component = new BlogDetailOnlyForTesting()
    component.props = {
      frontMatters: {
        summary:
          '1我每段10个字符 2我每段10个字符 3我每段10个字符 4我每段10个字符 5我每段10个字符 6我每段10个字符 7我每段10个字符 8我每段10个字符 9我每段10个字符 10每段10个字符 11每段10个字符 12每段10个字符 13每段10个字符 14每段10个字符 15每段10个字符 16每段10个字符',
      },
    }

    expect(component.summary).toEqual(
      '> 1我每段10个字符 2我每段10个字符 3我每段10个字符 4我每段10个字符 5我每段10个字符 6我每段10个字符 7我每段10个字符 8我每段10个字符 9我每段10个字符 10每段10个字符 11每段10个字符 12每段10个字符 13每段10个字符 14每段10个字符 15每段10个字符 ...'
    )
  })
})
