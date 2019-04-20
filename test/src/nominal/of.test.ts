// tslint:disable no-any no-unused-expression comment-format no-commented-code no-dead-store

import { Hz, of, Of, Rotation, Scalar, to } from '../../../src/indexForTest'

describe('of', () => {
    it('allows assigning an Of to an Of of the right kind', () => {
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
        const scalarOfHz: Scalar<Hz> = to.Scalar(of.Hz(3))
    })

    it('allows creating uses of uses', () => {
        const scalarOfRotation: Scalar<Rotation> = to.Scalar(of.Rotation(3))
    })

    it('allows creating uses of uses of units', () => {
        const scalarOfScalarOfHz: Scalar<Scalar<Hz>> = to.Scalar(of.Scalar<Hz>(3))
    })
})
