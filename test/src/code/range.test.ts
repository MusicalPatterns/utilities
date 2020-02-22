import { as, range } from '../../../src/indexForTest'

describe('range', (): void => {
    it('when given a single number, gives the set of integers from 0 to that number, excluding the number', (): void => {
        expect(range(as.Integer(3)))
            .toEqual(
                [ 0, 1, 2 ]
                    .map(as.Integer),
            )
    })

    it('when given two numbers, gives the set of integers from the first number to the second number', (): void => {
        expect(range(as.Integer(3), as.Integer(7)))
            .toEqual(
                [ 3, 4, 5, 6 ]
                    .map(as.Integer),
            )
    })

    it('can take any mix of types as arguments as long as they are whole numbers, and it will still always return integers', (): void => {
        expect(range(as.Cardinal(1), as.Ordinal(6)))
            .toEqual(
                [ 1, 2, 3, 4, 5 ]
                    .map(as.Integer),
            )
    })
})
