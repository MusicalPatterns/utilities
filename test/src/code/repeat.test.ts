import { as, repeat } from '../../../src/indexForTest'

describe('repeat', (): void => {
    it('concats x copies of an array together', (): void => {
        expect(repeat([ 0, 1 ], as.Cardinal<number[]>(3)))
            .toEqual([ 0, 1, 0, 1, 0, 1 ])
    })
})
