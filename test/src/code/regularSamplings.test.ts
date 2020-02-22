import { as, everyNthElement, Hz } from '../../../src/indexForTest'

describe('regular samplings', (): void => {
    describe('every nth element', (): void => {
        let array: Hz[]
        beforeEach((): void => {
            array = [ 9, 8, 7, 6, 5, 4, 3, 2, 1, 0 ].map(as.Hz)
        })

        it('filters the array properly', (): void => {
            expect(everyNthElement(array, as.Multiple(3)))
                .toEqual([ 9, 6, 3, 0 ].map(as.Hz))
        })

        it('can take an optional starting with parameter', (): void => {
            expect(everyNthElement(array, as.Multiple(2), as.Ordinal<Hz[]>(5)))
                .toEqual([ 4, 2, 0 ].map(as.Hz))
        })
    })
})
