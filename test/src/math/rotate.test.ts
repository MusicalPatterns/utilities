import {
    apply,
    Coordinate,
    negative,
    ONE_HALF,
    PI,
    rotate,
    X_AXIS,
    Y_AXIS,
} from '../../../src/indexForTest'

describe('rotate', () => {
    describe('in two dimensions', () => {
        it('works', () => {
            const coordinate: Coordinate<number, 2> = [ 3, 0 ]
            const actualCoordinate: Coordinate<number, 2> = rotate<number, 2>({
                coordinate,
                rotation: apply.Scalar(PI, negative(ONE_HALF)),
            })
            const expectedCoordinate: Coordinate<number, 2> = [ 0, -3 ]

            expect(actualCoordinate)
                .toBeCloseToArray(expectedCoordinate)
        })
    })

    describe('in three dimensions', () => {
        it('works for rotating around the z-axis (the default axis)', () => {
            const coordinate: Coordinate<number, 3> = [ 3, 0, 0 ]
            const actualCoordinate: Coordinate<number, 3> = rotate<number, 3>({
                coordinate,
                rotation: apply.Scalar(PI, negative(ONE_HALF)),
            })
            const expectedCoordinate: Coordinate<number, 3> = [ 0, -3, 0 ]

            expect(actualCoordinate)
                .toBeCloseToArray(expectedCoordinate)
        })

        it('works for rotating around the y-axis', () => {
            const coordinate: Coordinate<number, 3> = [ 3, 0, 0 ]
            const actualCoordinate: Coordinate<number, 3> = rotate<number, 3>({
                axis: Y_AXIS,
                coordinate,
                rotation: apply.Scalar(PI, negative(ONE_HALF)),
            })
            const expectedCoordinate: Coordinate<number, 3> = [ 0, 0, 3 ]

            expect(actualCoordinate)
                .toBeCloseToArray(expectedCoordinate)
        })

        it('works for rotating around the x-axis', () => {
            const coordinate: Coordinate<number, 3> = [ 0, 3, 0 ]
            const actualCoordinate: Coordinate<number, 3> = rotate<number, 3>({
                axis: X_AXIS,
                coordinate,
                rotation: apply.Scalar(PI, negative(ONE_HALF)),
            })
            const expectedCoordinate: Coordinate<number, 3> = [ 0, 0, -3 ]

            expect(actualCoordinate)
                .toBeCloseToArray(expectedCoordinate)
        })
    })
})
