import { Coordinate, rotate, testArraysAreClose, to, X_AXIS, Y_AXIS } from '../../../src/indexForTest'

describe('rotate', () => {
    describe('in two dimensions', () => {
        it('works', () => {
            const actualCoordinate: Coordinate = rotate({
                coordinate: to.Coordinate([ 3, 0 ]),
                rotation: to.Radian(Math.PI * -1 / 2),
            })
            const expectedCoordinate: Coordinate = to.Coordinate([ 0, -3 ])

            testArraysAreClose(actualCoordinate, expectedCoordinate)
        })
    })

    describe('in three dimensions', () => {
        it('works for rotating around the z-axis (the default axis)', () => {
            const actualCoordinate: Coordinate = rotate({
                coordinate: to.Coordinate([ 3, 0, 0 ]),
                rotation: to.Radian(Math.PI * -1 / 2),
            })
            const expectedCoordinate: Coordinate = to.Coordinate([ 0, -3, 0 ])

            testArraysAreClose(actualCoordinate, expectedCoordinate)
        })

        it('works for rotating around the y-axis', () => {
            const actualCoordinate: Coordinate = rotate({
                axis: Y_AXIS,
                coordinate: to.Coordinate([ 3, 0, 0 ]),
                rotation: to.Radian(Math.PI * -1 / 2),
            })
            const expectedCoordinate: Coordinate = to.Coordinate([ 0, 0, 3 ])

            testArraysAreClose(actualCoordinate, expectedCoordinate)
        })

        it('works for rotating around the x-axis', () => {
            const actualCoordinate: Coordinate = rotate({
                axis: X_AXIS,
                coordinate: to.Coordinate([ 0, 3, 0 ]),
                rotation: to.Radian(Math.PI * -1 / 2),
            })
            const expectedCoordinate: Coordinate = to.Coordinate([ 0, 0, -3 ])

            testArraysAreClose(actualCoordinate, expectedCoordinate)
        })
    })
})
