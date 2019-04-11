import { everyNthElement, Hz, to } from '../../../src/indexForTest'

describe('regular samplings', () => {
    describe('every nth element', () => {
        let array: Hz[]
        beforeEach(() => {
            array = [ 9, 8, 7, 6, 5, 4, 3, 2, 1, 0 ].map(to.Hz)
        })

        it('filters the array properly', () => {
            expect(everyNthElement(array, to.Multiple(3)))
                .toEqual([ 9, 6, 3, 0 ].map(to.Hz))
        })

        it('can take an optional starting with parameter', () => {
            expect(everyNthElement(array, to.Multiple(2), to.Ordinal(5)))
                .toEqual([ 4, 2, 0 ].map(to.Hz))
        })
    })
})
