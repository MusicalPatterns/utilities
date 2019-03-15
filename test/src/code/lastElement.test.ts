import { indexOfLastElement, lastElement, Scalar, to } from '../../../src/indexForTest'

describe('last element', () => {
    it('works for arrays', () => {
        const array: Scalar[] = [ 3, 4, 5 ]
            .map(to.Scalar)

        expect(lastElement(array))
            .toBe(to.Scalar(5))
        expect(indexOfLastElement(array))
            .toBe(to.Ordinal(2))
    })
})
