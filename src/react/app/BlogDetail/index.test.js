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
