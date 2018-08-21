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

describe('title getter', () => {
  test('should return empty title when front matters does not include a title', () => {
    const component = new BlogDetailOnlyForTesting()
    component.props = {
      frontMatters: {},
    }

    expect(component.title).toEqual('')
  })

  test('should return title as markdown first level header when front matters contains a header', () => {
    const component = new BlogDetailOnlyForTesting()
    component.props = {
      frontMatters: {
        title: ' React 测试策略',
      },
    }

    expect(component.title).toEqual('# React 测试策略')
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
})
