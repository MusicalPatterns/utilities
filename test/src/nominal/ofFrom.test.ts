// tslint:disable no-dead-store

import { Ms, Of, ofFrom, Rotation, Scalar, to, Translation } from '../../../src/indexForTest'

describe('of from', () => {
    it(`is shorthand for From'ing from a type then Of'ing right back into it`, () => {
        const ofFromOperation: Of<Translation> = ofFrom(to.Translation(3))
        const ofFromUnits: Of<Ms> = ofFrom(to.Ms(3))

        const ofFromOperationStraightToOperation: Scalar<Translation> = to.Scalar(ofFrom(to.Translation(3)))
        const ofFromUnitsStraightToOperation: Scalar<Ms> = to.Scalar(ofFrom(to.Ms(3)))

        const ofFromOperationOfOperation: Of<Scalar<Translation>> = ofFrom(to.Scalar<Translation>(3))
        const ofFromOperationOfUnits: Of<Scalar<Ms>> = ofFrom(to.Scalar<Ms>(3))

        const ofFromOperationOfOperationStraightToOperation: Rotation<Scalar<Translation>> = to.Rotation(ofFrom(to.Scalar<Translation>(3)))
        const ofFromOperationOfUnitsStraightToOperation: Rotation<Scalar<Ms>> = to.Rotation(ofFrom(to.Scalar<Ms>(3)))
    })
})
