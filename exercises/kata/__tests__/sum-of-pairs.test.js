const sumOfPairs = require('../sum-of-pairs')

describe('Sum of pairs', () => {
  
  test('Pair is at the beginning of the array', () => {
    const pair = sumOfPairs([1, 2, 3, 4], 3)

    // i.e. the earliest pair (from left to right) that adds up to be 
    // 3 is the pair, [1, 2]
    expect(pair).toEqual([1, 2])
  })

  test('Pair is at the end of the array', () => {
    const pair = sumOfPairs([1, 2, 3, 4], 7)

    expect(pair).toEqual([3, 4])
  })

  test('No matching pairs returns undefined', () => {
    const pair = sumOfPairs([0, 0, -2, 3], 2)

    expect(pair).toBeUndefined()
  })

  const cases = [
    [ [4, 3, 2, 3, 4], 6, [4, 2] ],
    [ [10, 5, 2, 3, 7, 5], 10, [3, 7] ]
  ]

  test.each(cases)('Other examples', (data, sum, expectedPair) => {
    const pair = sumOfPairs(data, sum)

    expect(pair).toEqual(expectedPair)
  })
})