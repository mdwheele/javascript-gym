const { arrayToUppercase, wordsLongerThan, arrayContains } = require('../array-functions')

test('Convert an array of lower-case strings to upper-case', () => {
  const fruit = ['apple', 'banana', 'orange']

  const upperCasedFruit = arrayToUppercase(fruit)

  expect(upperCasedFruit).toEqual(['APPLE', 'BANANA', 'ORANGE'])
})

describe('Filtering a list of words', () => {
  const words = [
    'zebra',
    'hippopotamus',
    'lion',
    'monkey',
    'gorilla',
    'polar bear'
  ]

  test('Find all words longer than 5 characters in a word list', () => {
    const longWords = wordsLongerThan(words, 5)
  
    expect(longWords).toEqual(['hippopotamus', 'monkey', 'gorilla', 'polar bear'])
  })

  test('If length is not provided, the original word list is returned.', () => {
    const longWords = wordsLongerThan(words)

    expect(longWords).toEqual(words)
  })
})

test('Determine if an array contains a string', () => {
  const technologies = ['javascript', 'node', 'vue']

  expect(arrayContains(technologies, 'javascript')).toBe(true)
  expect(arrayContains(technologies, 'node')).toBe(true)
  expect(arrayContains(technologies, 'vue')).toBe(true)

  expect(arrayContains(technologies, 'php')).toBe(false)

  expect(arrayContains(technologies)).toBe(false)
})