import { apply, to } from '../../../src/indexForTest'

describe('apply', () => {
    describe('Ordinal', () => {
        it('when the index exceeds the length of the array, does not crash', () => {
            apply.Ordinal([], to.Ordinal(1))
        })
    })
})
