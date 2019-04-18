import {
    Cardinal,
    INITIAL,
    insteadOf,
    Multiple,
    Ordinal,
    Rotation,
    Scalar,
    to,
    Translation,
} from '../../../src/indexForTest'

describe('instead of', () => {
    it('discards whatever an operation used to be Of and replaces it with what you specify instead', () => {
        expect(insteadOf<Ordinal, Scalar>(INITIAL))
            .toBe(to.Ordinal<Scalar>(0))

        expect(insteadOf<Scalar, Rotation>(to.Scalar<Translation>(1)))
            .toBe(to.Scalar<Rotation>(1))

        expect(insteadOf<Translation, Rotation>(to.Translation<string>(1)))
            .toBe(to.Translation<Rotation>(1))

        expect(insteadOf<Translation>(to.Translation<string>(1)))
            .toBe(to.Translation(1))
    })

    it('should work for special operations that enforce being integers', () => {
        expect(insteadOf<Multiple>(to.Multiple<Cardinal>(3)))
            .toBe(to.Multiple(3))
    })
})
