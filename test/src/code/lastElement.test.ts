import {
    indexOfLastCharacter,
    indexOfLastElement,
    lastCharacter,
    lastElement,
    Scalar,
    to,
} from '../../../src/indexForTest'

describe('last element', () => {
    it('works for arrays', () => {
        const array: Scalar[] = [ 3, 4, 5 ]
            .map(to.Scalar)

        expect(lastElement(array))
            .toBe(to.Scalar(5))
        expect(indexOfLastElement(array))
            .toBe(to.Ordinal(2))
    })

    it('works for strings', () => {
        const str: string = '345'

        expect(lastCharacter(str))
            .toBe('5')
        expect(indexOfLastCharacter(str))
            .toBe(to.Ordinal(2))
    })
})
