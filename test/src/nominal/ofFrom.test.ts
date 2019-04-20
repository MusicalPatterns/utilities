// tslint:disable no-dead-store

import { as, Ms, Of, ofNotAs, Rotation, Scalar, Translation } from '../../../src/indexForTest'

describe('of notAs', () => {
    it(`is shorthand for NotAs'ing out of a type then Of'ing right back into it`, () => {
        const ofFromUse: Of<Translation> = ofNotAs(as.Translation(3))
        const ofFromUnits: Of<Ms> = ofNotAs(as.Ms(3))

        const ofFromUseStraightToUse: Scalar<Translation> = as.Scalar(ofNotAs(as.Translation(3)))
        const ofFromUnitsStraightToUse: Scalar<Ms> = as.Scalar(ofNotAs(as.Ms(3)))

        const ofFromUseOfUse: Of<Scalar<Translation>> = ofNotAs(as.Scalar<Translation>(3))
        const ofFromUseOfUnits: Of<Scalar<Ms>> = ofNotAs(as.Scalar<Ms>(3))

        const ofFromUseOfUseStraightToUse: Rotation<Scalar<Translation>> = as.Rotation(ofNotAs(as.Scalar<Translation>(3)))
        const ofFromUseOfUnitsStraightToUse: Rotation<Scalar<Ms>> = as.Rotation(ofNotAs(as.Scalar<Ms>(3)))
    })
})
