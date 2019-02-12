import { lowestTerms, Ratio, to } from '../../../src/indexForTest'

describe('lowest terms', () => {
    it('reduces a ratio', () => {
        const ratio: Ratio = to.Ratio([ 15, 25 ])
        expect(lowestTerms(ratio))
            .toEqual(to.Ratio([ 3, 5 ]))
    })
})
