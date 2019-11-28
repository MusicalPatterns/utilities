import { as, integerDivide } from '../../../src/indexForTest'

describe('divides evenly', () => {
    describe('integer divide', () => {
        it('returns the whole version of the type passed to it', () => {
            expect(integerDivide(as.Scalar(5), 2))
                .toEqual(as.Multiple(2))
        })
    })
})
