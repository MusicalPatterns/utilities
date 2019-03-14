import { indexOfLastElement, lastElement, Scalar, to } from '../../../src/indexForTest'

describe('last element', () => {
    it('works for arrays', () => {
        const array: Scalar[] = [ 3, 4, 5 ]
            .map(to.Scalar)

        expect(lastElement<Scalar[], Scalar>(array))
            .toBe(to.Scalar(5))
        expect(indexOfLastElement(array))
            .toBe(to.Ordinal(2))
    })

    it('works for strings', () => {
        const str: string = '345'

        expect(lastElement(str))
            .toBe('5')
        expect(indexOfLastElement(str))
            .toBe(to.Ordinal(2))
    })
})
