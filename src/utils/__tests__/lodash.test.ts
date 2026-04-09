import { sample } from '../lodash'

describe('sample()', () => {
  it('returns an element that exists in the array', () => {
    const arr = ['a', 'b', 'c']
    expect(arr).toContain(sample(arr))
  })

  it('returns the only element from a single-element array', () => {
    expect(sample([42])).toBe(42)
  })

  it('returns undefined for an empty array', () => {
    expect(sample([])).toBeUndefined()
  })
})
