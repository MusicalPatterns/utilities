import { as, flatten, Hz } from '../../../src/indexForTest'

describe('flatten', () => {
    it('takes an array of arrays and concats them into one array', () => {
        const arrayFirst: Hz[] = [ 1, 3, 5 ].map(as.Hz)
        const arraySecond: Hz[] = [ 2, 6, 8 ].map(as.Hz)

        expect(flatten([ arrayFirst, arraySecond ]))
            .toEqual([ 1, 3, 5, 2, 6, 8 ].map(as.Hz))
    })
})
