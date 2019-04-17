import { finalElement, indexOfFinalElement, Scalar, to } from '../../../src/indexForTest'

describe('final element', () => {
    it('works for arrays', () => {
        const array: Scalar[] = [ 3, 4, 5 ]
            .map(to.Scalar)

        expect(finalElement(array))
            .toBe(to.Scalar(5))
        expect(indexOfFinalElement(array))
            .toBe(to.Index<Scalar>(2))
    })
})
