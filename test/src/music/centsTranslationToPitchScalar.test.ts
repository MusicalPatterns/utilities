// tslint:disable-next-line no-reference
/// <reference path="../../types/index.d.ts" />

import { centsTranslationToPitchScalar, Frequency, Scalar, THREE_HALVES, to } from '../../../src/indexForTest'

describe('cents translation to pitch scalar', () => {
    it('gives the pitch ratio equivalent to the cents amount', () => {
        const actual: Scalar<Frequency> = centsTranslationToPitchScalar(to.Translation(to.Cents(701.955001)))

        expect(actual)
            .toBeCloseToTyped(to.Frequency(THREE_HALVES))
    })
})
