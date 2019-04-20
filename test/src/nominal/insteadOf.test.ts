import {
    as,
    Cardinal,
    INITIAL,
    insteadOf,
    Multiple,
    Ordinal,
    Rotation,
    Scalar,
    Translation,
} from '../../../src/indexForTest'

describe('instead of', () => {
    it('discards whatever a use used to be Of and replaces it with what you specify instead', () => {
        expect(insteadOf<Ordinal, Scalar>(INITIAL))
            .toBe(as.Ordinal<Scalar>(0))

        expect(insteadOf<Scalar, Rotation>(as.Scalar<Translation>(1)))
            .toBe(as.Scalar<Rotation>(1))

        expect(insteadOf<Translation, Rotation>(as.Translation<string>(1)))
            .toBe(as.Translation<Rotation>(1))

        expect(insteadOf<Translation>(as.Translation<string>(1)))
            .toBe(as.Translation(1))
    })

    it('should work for special uses that enforce being integers', () => {
        expect(insteadOf<Multiple>(as.Multiple<Cardinal>(3)))
            .toBe(as.Multiple(3))
    })
})
