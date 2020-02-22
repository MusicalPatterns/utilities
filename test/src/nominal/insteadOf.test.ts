// tslint:disable no-unused-variable no-dead-store

import {
    as,
    Cardinal,
    insteadOf,
    Multiple,
    NO_SHIFT,
    Ordinal,
    Rotation,
    Scalar,
    Translation,
} from '../../../src/indexForTest'

describe('instead of', (): void => {
    it('discards whatever a use used to be Of and replaces it with what you specify instead', (): void => {
        expect(insteadOf<Translation, Scalar>(NO_SHIFT))
            .toBe(as.Translation<Scalar>(0))

        expect(insteadOf<Scalar, Rotation>(as.Scalar<Translation>(1)))
            .toBe(as.Scalar<Rotation>(1))

        expect(insteadOf<Translation, Rotation>(as.Translation<Scalar>(1)))
            .toBe(as.Translation<Rotation>(1))

        expect(insteadOf<Translation>(as.Translation<Scalar>(1)))
            .toBe(as.Translation(1))
    })

    it('should work for special uses that enforce being integers', (): void => {
        const multiple: Multiple = insteadOf<Multiple>(as.Multiple<Cardinal>(3))
        const ordinalMultiple: Multiple<Ordinal> = insteadOf<Multiple, Ordinal>(as.Multiple<Cardinal>(3))
    })
})
