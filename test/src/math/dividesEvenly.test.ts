import { as, integerDivide } from '../../../src/indexForTest'

describe('divides evenly', (): void => {
    describe('integer divide', (): void => {
        it('returns the whole version of the type passed to it', (): void => {
            expect(integerDivide(as.Scalar(5), 2))
                .toEqual(as.Multiple(2))
        })
    })
})
