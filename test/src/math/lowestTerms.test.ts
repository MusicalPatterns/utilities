import { Fraction, lowestTerms, to } from '../../../src/indexForTest'

describe('lowest terms', () => {
    it('reduces a fraction', () => {
        const fraction: Fraction = to.Fraction([ 15, 25 ])
        expect(lowestTerms(fraction))
            .toEqual(to.Fraction([ 3, 5 ]))
    })
})
