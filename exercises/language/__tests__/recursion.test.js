const { getLeafNodes } = require('../recursion')

const treeOfAwesome = {
  name: 'Root',
  children: [
    {
      name: 'A',
      children: [
        {
          name: 'B',
          children: []
        },
        {
          name: 'C',
          children: []
        }
      ]
    },
    {
      name: 'D',
      children: [
        {
          name: 'E',
          children: []
        },
        {
          name: 'F',
          children: [
            {
              name: 'G',
              children: []
            },
            {
              name: 'H',
              children: [
                {
                  name: 'I',
                  children: []
                }
              ]
            },
            {
              name: 'J',
              children: []
            }
          ]
        },
        {
          name: 'K',
          children: []
        }
      ]
    },
  ]
}

test('return all leaves from the tree of awesome', () => {
  const leaves = getLeafNodes(treeOfAwesome)

  expect(leaves.sort()).toEqual(['B', 'C', 'E', 'G', 'I', 'J', 'K'])
})