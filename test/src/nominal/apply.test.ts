import { apply, Cycle, negative, to } from '../../../src/indexForTest'

describe('apply', () => {
    describe('Index', () => {
        it('when the array is cyclical, wraps the index, whether negative or beyond its length', () => {
            const myCycle: Cycle<string> = to.Cycle([ 'a', 'b', 'c' ])
            const myArray: string[] = [ 'd', 'e', 'f' ]

            expect(apply.Index(myCycle, to.Index(4)))
                .toBe('b')
            expect(apply.Index(myCycle, to.Index(negative(1))))
                .toBe('c')
            expect(apply.Index(myCycle, to.Index(1)))
                .toBe('b')
            expect(apply.Index(myCycle, to.Index(0)))
                .toBe('a')

            expect(() => apply.Index(myArray, to.Index(4)))
                .toThrowError(`Index 4 exceeds available indices of array of length 3`)
            expect(apply.Index(myArray, to.Index(negative(1))))
                .toBeUndefined()
            expect(apply.Index(myArray, to.Index(1)))
                .toBe('e')
            expect(apply.Index(myArray, to.Index(0)))
                .toBe('d')
        })
    })

    describe('Translation', () => {
        it('when applies to a number, translates it (sums)', () => {
            expect(apply.Translation(to.Scalar(4), to.Translation(1)))
                .toBe(to.Scalar(5))
        })

        it('when applies to a cyclical array, cycles it to the right', () => {
            expect(apply.Translation(to.Cycle([ 0, 1, 1, 0, 1 ]), to.Translation(negative(1))))
                .toEqual(to.Cycle([ 1, 1, 0, 1, 0 ]))
            expect(apply.Translation(to.Cycle([ 0, 1, 1, 0, 1 ]), to.Translation(0)))
                .toEqual(to.Cycle([ 0, 1, 1, 0, 1 ]))
            expect(apply.Translation(to.Cycle([ 0, 1, 1, 0, 1 ]), to.Translation(1)))
                .toEqual(to.Cycle([ 1, 0, 1, 1, 0 ]))
        })
    })

    describe('Fractions, Numerators, and Denominators', () => {
        it('applying a Numerator to a Denominator gives a Fraction', () => {
            expect(apply.Numerator(to.Denominator(5), to.Numerator(4)))
                .toEqual(to.Fraction([ to.Numerator(4), to.Denominator(5) ]))
        })

        it('applying a Denominator to a Numerator gives a Fraction', () => {
            expect(apply.Denominator(to.Numerator(5), to.Denominator(4)))
                .toEqual(to.Fraction([ to.Numerator(5), to.Denominator(4) ]))
        })
    })

    describe('Modulus', () => {
        it('addresses the bug in JavaScript where negative numbers give negative results', () => {
            expect(-3 % 5)
                .toBe(-3)
            expect(apply.Modulus(-3, to.Modulus(5)) as number)
                .toBe(2)
        })
    })
})
