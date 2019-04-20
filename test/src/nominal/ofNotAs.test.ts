// tslint:disable no-any no-unused-expression comment-format no-commented-code no-dead-store

import { as, Hz, Of, of, Rotation, Scalar } from '../../../src/indexForTest'

describe('of not as', () => {
    it('allows assigning an Of as an Of of the right kind', () => {
        const ofAsOfUnits: Of<Hz> = of.Hz(3)
        const ofAsOfUse: Of<Scalar> = of.Scalar(3)
    })

    it('assumes number', () => {
        const example: Of<Scalar<Number>> = 3 as unknown as Of<Scalar>
        const otherWayExample: Of<Scalar> = 3 as unknown as Of<Scalar>
    })

    it('allows Of types that are uses of units', () => {
        const nestedOf: Of<Scalar<Hz>> = of.Scalar<Hz>(3)
    })

    it('allows Of types that are uses of uses', () => {
        const nestedOf: Of<Scalar<Rotation>> = of.Scalar<Rotation>(3)
    })

    it('allows creating uses of units', () => {
        const scalarOfHz: Scalar<Hz> = as.Scalar(of.Hz(3))
    })

    it('allows creating uses of uses', () => {
        const scalarOfRotation: Scalar<Rotation> = as.Scalar(of.Rotation(3))
    })

    it('allows creating uses of uses of units', () => {
        const scalarOfScalarOfHz: Scalar<Scalar<Hz>> = as.Scalar(of.Scalar<Hz>(3))
    })
})
