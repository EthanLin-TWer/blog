import React from 'react'
import { render } from '@testing-library/react'

import { BlogSummary } from './index'

jest.mock('../../../components/GithubFlavoredMarkdown')

test.skip('should not render summary section when summary is empty', () => {
  const component = render(<BlogSummary summary="" path="" />)
  expect(component).not.toBeNull()
})

test.skip('should render summary section when summary is not empty', () => {
  const component = render(<BlogSummary summary="这是一篇好文章" path="" />)
  expect(component).not.toBeNull()
})
