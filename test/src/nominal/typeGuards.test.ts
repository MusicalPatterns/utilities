import { as, isCycle, isFraction, isInteger } from '../../../src/indexForTest'

describe('type guards', () => {
    it('isCycle', () => {
        expect(isCycle(as.Cycle([])))
            .toBeTruthy()

        expect(isCycle([]))
            .toBeFalsy()
        expect(isCycle(as.unbrandedArray(as.Cycle([]))))
            .toBeFalsy()
    })

    it('isFraction', () => {
        expect(isFraction(as.Fraction([ as.Numerator(4), as.Denominator(5) ])))
            .toBeTruthy()
        expect(isFraction(as.Fraction([ as.Integer(4), as.Integer(5) ])))
            .toBeTruthy()
        expect(isFraction([ as.Numerator(4), as.Denominator(5) ]))
            .toBeTruthy()
        expect(isFraction(as.unbrandedArray(as.Fraction([ as.Numerator(4), as.Denominator(5) ]))))
            .toBeTruthy()
        expect(isFraction([ as.Integer(4), as.Integer(5) ]))
            .toBeTruthy()
        expect(isFraction([ as.Numerator(4), as.Numerator(5) ]))
            .toBeTruthy()
        expect(isFraction([ as.Denominator(4), as.Denominator(5) ]))
            .toBeTruthy()
        expect(isFraction([ 4, 5 ]))
            .toBeTruthy()

        expect(isFraction([ as.Numerator(4), as.Denominator(5), as.Integer(6) ]))
            .toBeFalsy()
    })

    it('isInteger', () => {
        expect(isInteger(as.Integer(1)))
            .toBeTruthy()
        expect(isInteger(1))
            .toBeTruthy()

        expect(isInteger(1.1))
            .toBeFalsy()
    })
})
