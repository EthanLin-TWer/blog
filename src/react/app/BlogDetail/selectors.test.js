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

    expect(result).toEqual({})
  })
})
