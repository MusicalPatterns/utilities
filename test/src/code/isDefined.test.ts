import { isDefined } from '../../../src/indexForTest'

describe('#isDefined', () => {
    it('returns true if defined', () => {
        expect(isDefined('pants'))
            .toBe(true)
    })

    it('even returns true if it is defined as false; that is the whole point of this thing', () => {
        expect(isDefined(false))
            .toBe(true)
    })

    it('even returns true if it is defined as 0; that is the whole point of this thing', () => {
        expect(isDefined(0))
            .toBe(true)
    })

    it('returns false if it is not defined', () => {
        expect(isDefined(undefined))
            .toBe(false)
    })
})
