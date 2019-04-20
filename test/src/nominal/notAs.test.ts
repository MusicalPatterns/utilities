// tslint:disable no-unused-expression no-dead-store

import { as, Fraction, Hz, Logarithm, notAs, Of, ONE_HALF, Scalar } from '../../../src/indexForTest'

describe('notAs', () => {
    it('converts back as a plain number', () => {
        const hz: Hz = as.Hz(3)
        const hzNumber: number = notAs.Hz(hz)

        const scalar: Scalar = as.Scalar(3)
        const scalarNumber: number = notAs.Scalar(scalar)
    })

    it('should be able as take the correct type and return a plain number without assigning as a plain number', () => {
        const hz: Hz = as.Hz(3)
        notAs.Hz(hz)
        notAs.Hz(hz) * 3
        notAs.Hz(as.Hz(3))

        const scalar: Scalar = as.Scalar(3)
        notAs.Scalar(scalar)
        notAs.Scalar(scalar) * 3
        notAs.Scalar(as.Scalar(3))
    })

    it('can do this', () => {
        notAs.Scalar(ONE_HALF)
    })

    it('can downgrade use while preserving type', () => {
        const hzScalar: Scalar<Hz> = as.Scalar<Hz>(3)
        const ofHzFromHzScalar: Of<Hz> = notAs.Scalar(hzScalar)

        const logarithmScalar: Scalar<Logarithm> = as.Scalar<Logarithm>(3)
        const ofLogarithmFromLogarithmScalar: Of<Logarithm> = notAs.Scalar(logarithmScalar)
    })

    it('can assign as an object property without needing an intermediate variable', () => {
        const hzScalar: Scalar<Hz> = as.Scalar<Hz>(3)

        const recipientObject: { ofHz: Of<Hz> } = {
            ofHz: notAs.Scalar(hzScalar),
        }
    })

    it('allows as and notAs into a plain use', () => {
        const num: Scalar = as.Scalar(notAs.Translation(as.Translation(3)))
    })

    it('can work as part of a map', () => {
        const scalars: Scalar[] = [ as.Scalar(2) ]
        const numbers: number[] = scalars.map(notAs.Scalar)

        const hzScalars: Array<Scalar<Hz>> = [ as.Scalar<Hz>(2) ]
        const ofHzs: Array<Of<Hz>> = hzScalars.map((hzScalar: Scalar<Hz>) => notAs.Scalar(hzScalar))
    })

    describe('special units/uses', () => {
        it('works', () => {
            const fromCardinal: number = notAs.Cardinal(as.Cardinal(3))
            notAs.Cardinal(as.Cardinal(3)) * 3

            const fromNumerator: number = notAs.Numerator(as.Numerator(3))
            notAs.Numerator(as.Numerator(3)) * 3

            const fromDenominator: number = notAs.Denominator(as.Denominator(3))
            notAs.Denominator(as.Denominator(3)) * 3
        })

        it('converts a fraction into a number', () => {
            const fraction: Fraction = as.Fraction([ as.Numerator(5), as.Denominator(4) ])
            expect(notAs.Fraction(fraction))
                .toBe(5 / 4)
        })

        it('works for Ordinal', () => {
            const three: number = notAs.Ordinal(as.Ordinal(3))
            const threeScalar: Of<Scalar> = notAs.Ordinal(as.Ordinal<Scalar>(3))
        })
    })
})
