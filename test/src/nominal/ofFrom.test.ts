// tslint:disable no-dead-store

import { Ms, Of, ofOperation, ofUnits, Scalar, to, Translation } from '../../../src/indexForTest'

describe('of from', () => {
    it(`is shorthand for From'ing from a type then Of'ing right back into it`, () => {
        const ofFromOperation: Of<Translation> = ofOperation<Translation>(to.Translation(3))
        const ofFromUnits: Of<Ms> = ofUnits<Ms>(to.Ms(3))

        const ofFromOperationStraightToOperation: Scalar<Translation> = to.Scalar(ofOperation<Translation>(to.Translation(3)))
        const ofFromUnitsStraightToOperation: Scalar<Ms> = to.Scalar(ofUnits<Ms>(to.Ms(3)))
    })
})
