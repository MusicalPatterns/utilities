import { Coordinate2d, Coordinate3d, rotate, testArraysAreClose, to, X_AXIS, Y_AXIS } from '../../../src/indexForTest'

describe('rotate', () => {
    describe('in two dimensions', () => {
        it('works', () => {
            const coordinate: Coordinate2d = [ 3, 0 ]
            const actualCoordinate: Coordinate2d = rotate({
                coordinate,
                rotation: to.Radians(Math.PI * -1 / 2),
            }) as Coordinate2d
            const expectedCoordinate: Coordinate2d = [ 0, -3 ]

            testArraysAreClose(actualCoordinate, expectedCoordinate)
        })
    })

    describe('in three dimensions', () => {
        it('works for rotating around the z-axis (the default axis)', () => {
            const coordinate: Coordinate3d = [ 3, 0, 0 ]
            const actualCoordinate: Coordinate3d = rotate({
                coordinate,
                rotation: to.Radians(Math.PI * -1 / 2),
            }) as Coordinate3d
            const expectedCoordinate: Coordinate3d = [ 0, -3, 0 ]

            testArraysAreClose(actualCoordinate, expectedCoordinate)
        })

        it('works for rotating around the y-axis', () => {
            const coordinate: Coordinate3d = [ 3, 0, 0 ]
            const actualCoordinate: Coordinate3d = rotate({
                axis: Y_AXIS,
                coordinate,
                rotation: to.Radians(Math.PI * -1 / 2),
            }) as Coordinate3d
            const expectedCoordinate: Coordinate3d = [ 0, 0, 3 ]

            testArraysAreClose(actualCoordinate, expectedCoordinate)
        })

        it('works for rotating around the x-axis', () => {
            const coordinate: Coordinate3d = [ 0, 3, 0 ]
            const actualCoordinate: Coordinate3d = rotate({
                axis: X_AXIS,
                coordinate,
                rotation: to.Radians(Math.PI * -1 / 2),
            }) as Coordinate3d
            const expectedCoordinate: Coordinate3d = [ 0, 0, -3 ]

            testArraysAreClose(actualCoordinate, expectedCoordinate)
        })
    })
})
