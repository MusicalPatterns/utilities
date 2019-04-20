import { as, finalElement, indexOfFinalElement, Scalar } from '../../../src/indexForTest'

describe('final element', () => {
    it('works for arrays', () => {
        const array: Scalar[] = [ 3, 4, 5 ]
            .map(as.Scalar)

        expect(finalElement(array))
            .toBe(as.Scalar(5))
        expect(indexOfFinalElement(array))
            .toBe(as.Ordinal<Scalar>(2))
    })
})
