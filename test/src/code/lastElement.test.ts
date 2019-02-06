import { lastElement, Scalar, to } from '../../../src/indexForTest'

describe('last element', () => {
    it('works', () => {
        const array: Scalar[] = [ 3, 4, 5 ]
            .map(to.Scalar)

        expect(lastElement(array))
            .toBe(to.Scalar(5))
    })
})
