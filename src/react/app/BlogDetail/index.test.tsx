jest.mock(
  '../../components/GithubFlavoredMarkdown',
  () => 'GithubFlavoredMarkdown'
)

describe('component', () => {
  test.skip('should render title in markdown format when there is a title', () => {
    expect(1).toBe(1)
  })
})
