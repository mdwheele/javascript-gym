const { person, inventory } = require('../objects')

test('Create a person object with a name, age, city and a method that returns a statement from the user', () => {
  expect(person.name).toBe('Sam')
  expect(person.age).toBe(33)
  expect(person.city).toBe('San Jose')
  expect(person.greeting()).toBe(`Hello! I'm Sam. I'm 33 years old and I am from San Jose.`)
})

test('Merge two inventories into a single inventory where veggie oyster counts override the meat count', () => {
  expect(inventory).toEqual({
    bacon: 2,
    sausage: 3,
    oyster: 10,
    lettuce: 5,
    tomatoes: 3,
    oyster: 15,
  })
})