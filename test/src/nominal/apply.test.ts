import { apply, Cycle, negative, to } from '../../../src/indexForTest'

describe('apply', () => {
    describe('Ordinal', () => {
        it('when the index exceeds the length of the array, does not crash', () => {
            apply.Ordinal([], to.Ordinal(1))
        })

        it('when the array is cyclical, wraps the index, whether negative or beyond its length', () => {
            const myCycle: Cycle<string> = to.Cycle([ 'a', 'b', 'c' ])
            const myArray: string[] = [ 'd', 'e', 'f' ]

            expect(apply.Ordinal(myCycle, to.Ordinal(4)))
                .toBe('b')
            expect(apply.Ordinal(myCycle, to.Ordinal(negative(1))))
                .toBe('c')
            expect(apply.Ordinal(myCycle, to.Ordinal(1)))
                .toBe('b')
            expect(apply.Ordinal(myCycle, to.Ordinal(0)))
                .toBe('a')

            expect(apply.Ordinal(myArray, to.Ordinal(4)))
                .toBeUndefined()
            expect(apply.Ordinal(myArray, to.Ordinal(negative(1))))
                .toBeUndefined()
            expect(apply.Ordinal(myArray, to.Ordinal(1)))
                .toBe('e')
            expect(apply.Ordinal(myArray, to.Ordinal(0)))
                .toBe('d')
        })
    })

    describe('Translation', () => {
        it('when applies to a number, translates it (sums)', () => {
            expect(apply.Translation(to.Scalar(4), to.Translation(1)))
                .toBe(to.Scalar(5))
        })

        it('when applies to a cyclical array, cycles it to the left', () => {
            expect(apply.Translation(to.Cycle([ 0, 1, 1, 0, 1 ]), to.Translation(1)))
                .toEqual(to.Cycle([ 1, 1, 0, 1, 0 ]))
            expect(apply.Translation(to.Cycle([ 0, 1, 1, 0, 1 ]), to.Translation(0)))
                .toEqual(to.Cycle([ 0, 1, 1, 0, 1 ]))
            expect(apply.Translation(to.Cycle([ 0, 1, 1, 0, 1 ]), to.Translation(negative(1))))
                .toEqual(to.Cycle([ 1, 0, 1, 1, 0 ]))
        })
    })

    describe('ratios', () => {
        it('applying a numerator to a denominator gives a ratio', () => {
            expect(apply.Numerator(to.Denominator(5), to.Numerator(4)))
                .toEqual(to.Ratio([ 4, 5 ]))
        })

        it('applying a denominator to a numerator gives a ratio', () => {
            expect(apply.Denominator(to.Numerator(5), to.Denominator(4)))
                .toEqual(to.Ratio([ 5, 4 ]))
        })
    })
})
