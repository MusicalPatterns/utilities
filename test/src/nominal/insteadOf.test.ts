import { Index, INITIAL, insteadOf, of, Rotation, Scalar, to, Translation } from '../../../src/indexForTest'

describe('instead of', () => {
    it('discards whatever an operation used to be Of and replaces it with what you specify instead', () => {
        expect(insteadOf<Index, Scalar>(INITIAL))
            .toBe(to.Index(of.Scalar(0)))

        expect(insteadOf<Scalar, Rotation>(to.Scalar(of.Translation(1))))
            .toBe(to.Scalar(of.Rotation(1)))

        expect(insteadOf<Translation, Rotation>(to.Translation(of.string(1))))
            .toBe(to.Translation(of.Rotation(1)))
    })
})
