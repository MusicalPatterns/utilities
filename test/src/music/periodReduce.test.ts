import {
    as,
    FIVE_HALVES,
    FOUR_THIRDS,
    octaveReduce,
    periodReduce,
    Pitch,
    Scalar,
    THREE_HALVES,
    TWO_THIRDS,
} from '../../../src/indexForTest'

describe('reducing', () => {
    describe('octave reduce', () => {
        it('if the scalar is greater than 2, repeatedly divides the scalar until it is less than 2, thereby wrapping it within the octave period', () => {
            expect(octaveReduce(as.Scalar<Pitch>(3)))
                .toBe(THREE_HALVES)
        })

        it('does nothing if the scalar is already between 1 and 2', () => {
            expect(octaveReduce(THREE_HALVES))
                .toBe(THREE_HALVES)
        })

        it('does nothing if the scalar is already 1', () => {
            expect(octaveReduce(as.Scalar<Pitch>(1)))
                .toBe(as.Scalar<Pitch>(1))
        })

        it('if the scalar is 2, changes it to 1', () => {
            expect(octaveReduce(as.Scalar<Pitch>(2)))
                .toBe(as.Scalar<Pitch>(1))
        })

        it('actually multiplies until it is greater than 1 but less than 2 if it was less than 1', () => {
            expect(octaveReduce(TWO_THIRDS))
                .toBe(FOUR_THIRDS)
        })

        describe('with fractions', () => {
            it('when necessary, increases the denominator', () => {
                expect(octaveReduce(as.Fraction([ as.Numerator(23), as.Denominator(5) ])))
                    .toEqual(as.Fraction([ as.Numerator(23), as.Denominator(20) ]))
            })

            it('when necessary, increases the numerator', () => {
                expect(octaveReduce(as.Fraction([ as.Numerator(1), as.Denominator(9) ])))
                    .toEqual(as.Fraction([ as.Numerator(16), as.Denominator(9) ]))
            })

            it('reduces to lowest terms', () => {
                expect(octaveReduce(as.Fraction([ as.Numerator(12), as.Denominator(9) ])))
                    .toEqual(as.Fraction([ as.Numerator(4), as.Denominator(3) ]))
            })
        })
    })

    describe('general period reduce', () => {
        it('if the scalar is greater than the period, repeatedly divides the scalar until it is less than the period', () => {
            expect(periodReduce(as.Scalar<Pitch>(4), as.Scalar<Scalar<Pitch>>(3)))
                .toBe(FOUR_THIRDS)
        })

        it('does nothing if the scalar is already between 1 and the period', () => {
            expect(periodReduce(FIVE_HALVES, as.Scalar<Scalar<Pitch>>(3)))
                .toBe(FIVE_HALVES)
        })

        it('does nothing if the scalar is already 1', () => {
            expect(periodReduce(as.Scalar<Pitch>(1), as.Scalar<Scalar<Pitch>>(3)))
                .toBe(as.Scalar<Pitch>(1))
        })

        it('if the scalar is the period, changes it to 1', () => {
            expect(periodReduce(as.Scalar<Pitch>(3), as.Scalar<Scalar<Pitch>>(3)))
                .toBe(as.Scalar<Pitch>(1))
        })

        it('actually multiplies until it is greater than 1 but less than the period if it was less than 1', () => {
            expect(periodReduce(TWO_THIRDS, as.Scalar<Scalar<Pitch>>(3)))
                .toBe(as.Scalar<Pitch>(2))
        })

        describe('with fractions', () => {
            it('when necessary, increases the denominator', () => {
                expect(periodReduce(as.Fraction([ as.Numerator(23), as.Denominator(5) ]), as.Multiple(3)))
                    .toEqual(as.Fraction([ as.Numerator(23), as.Denominator(15) ]))
            })

            it('when necessary, increases the numerator', () => {
                expect(periodReduce(as.Fraction([ as.Numerator(1), as.Denominator(10) ]), as.Multiple(3)))
                    .toEqual(as.Fraction([ as.Numerator(27), as.Denominator(10) ]))
            })

            it('reduces to lowest terms', () => {
                expect(periodReduce(as.Fraction([ as.Numerator(16), as.Denominator(8) ]), as.Multiple(3)))
                    .toEqual(as.Fraction([ as.Numerator(2), as.Denominator(1) ]))
            })
        })
    })
})
