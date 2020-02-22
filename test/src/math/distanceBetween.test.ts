import { distanceBetween } from '../../../src/indexForTest'

describe('distance between', (): void => {
    it('works for one-dimensional distances', (): void => {
        expect(distanceBetween([ 0 ], [ 3 ]))
            .toBe(3)
    })

    it('works for two-dimensional distances', (): void => {
        expect(distanceBetween([ 0, 0 ], [ 3, 4 ]))
            .toBe(5)
    })

    it('works for three-dimensional distances', (): void => {
        expect(distanceBetween([ 0, 0, 0 ], [ 3, 4, 12 ]))
            .toBe(13)
    })
})
