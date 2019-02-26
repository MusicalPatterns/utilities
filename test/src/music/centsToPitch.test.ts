import { centsToPitch, Frequency, Scalar, testIsCloseTo, THREE_HALVES, to } from '../../../src/indexForTest'

describe('cents to pitch', () => {
    it('gives the pitch ratio equivalent to the cents amount', () => {
        const actual: Scalar<Frequency> = centsToPitch(to.Cents(701.955001))

        expect(testIsCloseTo(actual, to.Frequency(THREE_HALVES)))
            .toBe(true)
    })
})
