// tslint:disable no-unused-expression no-dead-store

import { Base, Fraction, from, Hz, ONE_HALF, Scalar, to } from '../../../src/indexForTest'

describe('from', () => {
    it('converts back to a plain number', () => {
        const hz: Hz = to.Hz(3)
        const hzNumber: number = from.Hz(hz)

        const scalar: Scalar = to.Scalar(3)
        const scalarNumber: number = from.Scalar(scalar)
    })

    it('should be able to take the correct type and return a plain number without assigning to a plain number', () => {
        const hz: Hz = to.Hz(3)
        from.Hz(hz)
        from.Hz(hz) * 3
        from.Hz(to.Hz(3))

        const scalar: Scalar = to.Scalar(3)
        from.Scalar(scalar)
        from.Scalar(scalar) * 3
        from.Scalar(to.Scalar(3))
    })

    it('can do this', () => {
        from.Scalar(ONE_HALF)
    })

    it('can downgrade units while preserving operation', () => {
        const hzScalar: Scalar<Hz> = to.Scalar(to.Hz(3))

        const scalarFromHzScalar: Scalar = from.Hz(hzScalar)
    })

    it('can downgrade operation while preserving type', () => {
        const hzScalar: Scalar<Hz> = to.Scalar(to.Hz(3))
        const hzFromHzScalar: Hz = from.Scalar(hzScalar)

        const baseScalar: Scalar<Base> = to.Scalar(to.Base(3))
        const baseFromBaseScalar: Base = from.Scalar(baseScalar)
    })

    it('can assign to an object property without needing an intermediate variable', () => {
        const hzScalar: Scalar<Hz> = to.Scalar(to.Hz(3))

        const recipientObject: { hz: Hz } = {
            hz: from.Scalar(hzScalar),
        }
    })

    it('can work as part of a map', () => {
        const scalars: Scalar[] = [ to.Scalar(2) ]
        const numbers: number[] = scalars.map(from.Scalar)

        const hzScalars: Array<Scalar<Hz>> = [ to.Scalar(to.Hz(2)) ]
        const hzs: Hz[] = hzScalars.map<Hz>(from.Scalar)
    })

    describe('special units/operations', () => {
        it('works', () => {
            const fromOrdinal: number = from.Ordinal(to.Ordinal(3))
            from.Ordinal(to.Ordinal(3)) * 3

            const fromCardinal: number = from.Cardinal(to.Cardinal(3))
            from.Cardinal(to.Cardinal(3)) * 3

            const fromNumerator: number = from.Numerator(to.Numerator(3))
            from.Numerator(to.Numerator(3)) * 3

            const fromDenominator: number = from.Denominator(to.Denominator(3))
            from.Denominator(to.Denominator(3)) * 3
        })

        it('converts a fraction into a number', () => {
            const fraction: Fraction = to.Fraction([ to.Numerator(5), to.Denominator(4) ])
            expect(from.Fraction(fraction))
                .toBe(5 / 4)
        })

        it('works for Index', () => {
            const three: number = from.Index(to.Index(3))
            const threeScalar: Scalar = from.Index(to.Index(to.Scalar(3)))
        })
    })
})
