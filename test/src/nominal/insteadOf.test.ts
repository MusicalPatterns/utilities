import { Index, INITIAL, insteadOf, of, Rotation, Scalar, to, Translation } from '../../../src/indexForTest'

describe('instead of', () => {
    it('discards whatever an operation used to be Of and replaces it with what you specify instead', () => {
        expect(insteadOf<Scalar, number, 'Index'>(INITIAL))
            .toBe(to.Index(of.Scalar(0)))

        expect(insteadOf<Rotation, Translation, 'Scalar'>(to.Scalar(of.Translation(1))))
            .toBe(to.Scalar(of.Rotation(1)))
    })
})
