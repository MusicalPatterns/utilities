import { as, Cents, centsTranslationToPitchScalar, Pitch, Scalar, THREE_HALVES } from '../../../src/indexForTest'

describe('cents translation to pitch scalar', () => {
    it('gives the pitch ratio equivalent to the cents amount', () => {
        const actual: Scalar<Pitch> = centsTranslationToPitchScalar(as.Translation<Cents>(701.955001))

        expect(actual)
            .toBeCloseToTyped(THREE_HALVES)
    })
})
