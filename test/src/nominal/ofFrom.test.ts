// tslint:disable no-dead-store

import { Ms, Of, ofOperation, ofUnits, to, Translation } from '../../../src/indexForTest'

describe('of from', () => {
    it(`is shorthand for From'ing from a type then Of'ing right back into it`, () => {
        const ofFromOperation: Of<Translation> = ofOperation(to.Translation(3))

        const ofFromUnits: Of<Ms> = ofUnits(to.Ms(3))
    })
})
