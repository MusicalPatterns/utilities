import { allElementsEqual } from '../../../src/indexForTest'

describe('all elements equal', () => {
    it('should return whether or not every element in the array is the same', () => {
        expect(allElementsEqual([ 4, 4, 4 ]))
            .toBe(true)

        expect(allElementsEqual([ { a: 3 }, { a: 3 }, { a: 3 }, { a: 3 } ]))
            .toBe(true)

        expect(allElementsEqual([ 'heyo', 'heyo' ]))
            .toBe(true)

        expect(allElementsEqual([ 1, 1, 1, 2, 1, 1 ]))
            .toBe(false)
    })
})
