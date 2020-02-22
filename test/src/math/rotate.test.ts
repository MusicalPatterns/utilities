import { Coordinate, negative, ONE_HALF, PI, rotate, use, X_AXIS, Y_AXIS } from '../../../src/indexForTest'

describe('rotate', (): void => {
    describe('in two dimensions', (): void => {
        it('works', (): void => {
            const coordinate: Coordinate<number, 2> = [ 3, 0 ]
            const actualCoordinate: Coordinate<number, 2> = rotate<number, 2>({
                coordinate,
                rotation: use.Scalar(PI, negative(ONE_HALF)),
            })
            const expectedCoordinate: Coordinate<number, 2> = [ 0, -3 ]

            expect(actualCoordinate)
                .toBeCloseToArray(expectedCoordinate)
        })
    })

    describe('in three dimensions', (): void => {
        it('works for rotating around the z-axis (the default axis)', (): void => {
            const coordinate: Coordinate<number, 3> = [ 3, 0, 0 ]
            const actualCoordinate: Coordinate<number, 3> = rotate<number, 3>({
                coordinate,
                rotation: use.Scalar(PI, negative(ONE_HALF)),
            })
            const expectedCoordinate: Coordinate<number, 3> = [ 0, -3, 0 ]

            expect(actualCoordinate)
                .toBeCloseToArray(expectedCoordinate)
        })

        it('works for rotating around the y-axis', (): void => {
            const coordinate: Coordinate<number, 3> = [ 3, 0, 0 ]
            const actualCoordinate: Coordinate<number, 3> = rotate<number, 3>({
                axis: Y_AXIS,
                coordinate,
                rotation: use.Scalar(PI, negative(ONE_HALF)),
            })
            const expectedCoordinate: Coordinate<number, 3> = [ 0, 0, 3 ]

            expect(actualCoordinate)
                .toBeCloseToArray(expectedCoordinate)
        })

        it('works for rotating around the x-axis', (): void => {
            const coordinate: Coordinate<number, 3> = [ 0, 3, 0 ]
            const actualCoordinate: Coordinate<number, 3> = rotate<number, 3>({
                axis: X_AXIS,
                coordinate,
                rotation: use.Scalar(PI, negative(ONE_HALF)),
            })
            const expectedCoordinate: Coordinate<number, 3> = [ 0, 0, -3 ]

            expect(actualCoordinate)
                .toBeCloseToArray(expectedCoordinate)
        })
    })
})
