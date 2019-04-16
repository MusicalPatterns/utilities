import {
    centsTranslationToPitchScalar,
    Frequency,
    insteadOf,
    of,
    Scalar,
    THREE_HALVES,
    to,
} from '../../../src/indexForTest'

describe('cents translation to pitch scalar', () => {
    it('gives the pitch ratio equivalent to the cents amount', () => {
        const actual: Scalar<Frequency> = centsTranslationToPitchScalar(to.Translation(of.Cents(701.955001)))

        expect(actual)
            .toBeCloseToTyped(insteadOf<Frequency, number, 'Scalar'>(THREE_HALVES))
    })
})
