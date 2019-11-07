import { noop, throws } from '../../../src/indexForTest'

describe('throws', () => {
    it('returns true if the function throws an error', () => {
        const fn: Function = (): void => {
            throw new Error('yo')
        }

        expect(throws(fn))
            .toBeTruthy()
    })

    it('returns false if the function does not throw an error', () => {
        expect(throws(noop))
            .toBeFalsy()
    })
})
