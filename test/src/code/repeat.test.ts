import { as, repeat } from '../../../src/indexForTest'

describe('repeat', () => {
    it('concats x copies of an array together', () => {
        expect(repeat([ 0, 1 ], as.Cardinal(3)))
            .toEqual([ 0, 1, 0, 1, 0, 1 ])
    })
})
