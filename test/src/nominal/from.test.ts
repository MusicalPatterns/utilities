// tslint:disable no-any no-unused-expression comment-format no-commented-code no-dead-store

import { Fraction, from, Hz, Scalar, Time, to } from '../../../src/indexForTest'

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

        const scalar: Scalar = to.Scalar(3)
        from.Scalar(scalar)
        from.Scalar(scalar) * 3
    })

    it('can downgrade units while preserving operation', () => {
        const hzScalar: Scalar<Hz> = to.Scalar(to.Hz(3))
        const scalarHz: Hz<Scalar> = to.Hz(to.Scalar(3))

        const scalarFromHzScalar: Scalar = from.Hz(hzScalar)
        const scalarFromScalarHz: Scalar = from.Hz(scalarHz)
    })

    it('can downgrade operation while preserving type', () => {
        const hzScalar: Scalar<Hz> = to.Scalar(to.Hz(3))
        const scalarHz: Hz<Scalar> = to.Hz(to.Scalar(3))

        const hzFromHzScalar: Hz = from.Scalar(hzScalar)
        const hzFromScalarHz: Hz = from.Scalar(scalarHz)
    })

    it('can assign to an object property without needing an intermediate variable', () => {
        const hzScalar: Scalar<Hz> = to.Scalar(to.Hz(3))
        const scalarHz: Hz<Scalar> = to.Hz(to.Scalar(3))

        const recipientObject: { hz: Hz, scalar: Scalar } = {
            hz: from.Scalar(hzScalar),
            scalar: from.Hz(scalarHz),
        }
    })

    it('can work as part of a map', () => {
        const scalars: Scalar[] = [ to.Scalar(2) ]
        const numbers: number[] = scalars.map(from.Scalar)

        const hzScalars: Array<Scalar<Hz>> = [ to.Scalar(to.Hz(2)) ]
        const hzs: Hz[] = hzScalars.map<Hz>(from.Scalar)
    })

    // it('DOES NOT ALLOW taking a plain number', () => {
    //     from.Hz(3)
    //     from.Scalar(3)
    // })
    //
    // it('DOES NOT ALLOW taking the wrong units or operation', () => {
    //     from.Hz(to.Ms(3))
    //     from.Scalar(to.Translation(3))
    // })
    //
    // it('DOES NOT ALLOW taking the wrong type of nominal', () => {
    //     from.Hz(to.Scalar(3))
    //     from.Scalar(to.Hz(3))
    // })

    describe('special units and operation', () => {
        it('works for special units & operation', () => {
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
            const fraction: Fraction = to.Fraction([ 5, 4 ])
            expect(from.Fraction(fraction))
                .toBe(5 / 4)
        })

        // it('DOES NOT ALLOW taking plain numbers', () => {
        //     from.Cardinal(3)
        //     from.Ordinal(3)
        //     from.Numerator(3)
        //     from.Denominator(3)
        // })
    })
})
