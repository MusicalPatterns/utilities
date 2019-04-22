// tslint:disable no-unused-variable no-dead-store

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

        expect(insteadOf<Ordinal, Rotation>(as.Ordinal<string>(1)))
            .toBe(as.Ordinal<Rotation>(1))

        expect(insteadOf<Ordinal>(as.Ordinal<string>(1)))
            .toBe(as.Ordinal(1))
    })

    it('should work for special uses that enforce being integers', () => {
        const multiple: Multiple = insteadOf<Multiple>(as.Multiple<Cardinal>(3))
        const ordinalMultiple: Multiple<Ordinal> = insteadOf<Multiple, Ordinal>(as.Multiple<Cardinal>(3))
    })
})
