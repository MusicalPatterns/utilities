import { distanceBetween, to } from '../../../src/indexForTest'

describe('distance between', () => {
    it('works for one-dimensional distances', () => {
        expect(distanceBetween(to.Coordinate([ 0 ]), to.Coordinate([ 3 ])))
            .toBe(to.Length(3))
    })

    it('works for two-dimensional distances', () => {
        expect(distanceBetween(to.Coordinate([ 0, 0 ]), to.Coordinate([ 3, 4 ])))
            .toBe(to.Length(5))
    })

    it('works for three-dimensional distances', () => {
        expect(distanceBetween(to.Coordinate([ 0, 0, 0 ]), to.Coordinate([ 3, 4, 12 ])))
            .toBe(to.Length(13))
    })
})
