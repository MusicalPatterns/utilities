// tslint:disable no-any no-unused-expression comment-format no-commented-code no-dead-store

import { from, Hz, Ratio, Scalar, to } from '../../../src/indexForTest'

// tslint:disable-next-line:no-type-definitions-outside-types-modules
describe('from', () => {
    it('converts back to a plain number', () => {
        const hz: Hz = to.Hz(3)
        const hzNumber: number = from.Hz(hz)

        const scalar: Scalar = to.Scalar(3)
        const scalarNumber: number = from.Scalar(scalar)
    })

    it('should be able to take the right type and return a plain number without assigning to a plain number', () => {
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

    it('works for special units & operation', () => {
        const fromOrdinal: number = from.Ordinal(to.Ordinal(3))
        from.Ordinal(to.Ordinal(3)) * 3

        const fromCardinal: number = from.Cardinal(to.Cardinal(3))
        from.Cardinal(to.Cardinal(3)) * 3
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

    describe('ratio', () => {
        it('converts a ratio tuple into a number', () => {
            const ratio: Ratio = to.Ratio([ 5, 4 ])
            expect(from.Ratio(ratio))
                .toBe(5 / 4)
        })
    })
})
