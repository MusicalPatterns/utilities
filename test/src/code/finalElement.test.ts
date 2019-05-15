import { as, finalElement, indexOfFinalElement, Scalar } from '../../../src/indexForTest'

describe('final element', () => {
    it('works for arrays', () => {
        const array: Scalar[] = [ 3, 4, 5 ]
            .map(as.Scalar)

        const actual: Scalar = finalElement(array)
        expect(actual)
            .toBe(as.Scalar(5))
        expect(indexOfFinalElement(array))
            .toBe(as.Ordinal<Scalar[]>(2))
    })
})
