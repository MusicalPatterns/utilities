import { as, isCycle, isInteger, isRational } from '../../../src/indexForTest'

describe('type guards', (): void => {
    it('isCycle', (): void => {
        expect(isCycle(as.Cycle([])))
            .toBeTruthy()

        expect(isCycle([]))
            .toBeFalsy()
        expect(isCycle(as.unbrandedArray(as.Cycle([]))))
            .toBeFalsy()
    })

    it('isRational', (): void => {
        expect(isRational(as.Rational([ as.Numerator(4), as.Denominator(5) ])))
            .toBeTruthy()
        expect(isRational(as.Rational([ as.Integer(4), as.Integer(5) ])))
            .toBeTruthy()
        expect(isRational([ as.Numerator(4), as.Denominator(5) ]))
            .toBeTruthy()
        expect(isRational(as.unbrandedArray(as.Rational([ as.Numerator(4), as.Denominator(5) ]))))
            .toBeTruthy()
        expect(isRational([ as.Integer(4), as.Integer(5) ]))
            .toBeTruthy()
        expect(isRational([ as.Numerator(4), as.Numerator(5) ]))
            .toBeTruthy()
        expect(isRational([ as.Denominator(4), as.Denominator(5) ]))
            .toBeTruthy()
        expect(isRational([ 4, 5 ]))
            .toBeTruthy()

        expect(isRational([ as.Numerator(4), as.Denominator(5), as.Integer(6) ]))
            .toBeFalsy()
    })

    it('isInteger', (): void => {
        expect(isInteger(as.Integer(1)))
            .toBeTruthy()
        expect(isInteger(1))
            .toBeTruthy()

        expect(isInteger(1.1))
            .toBeFalsy()
    })
})
