import { apply, to } from '../../../src/indexForTest'

describe('apply', () => {
    describe('Index', () => {
        it('when the index exceeds the length of the array, does not crash', () => {
            apply.Index([], to.Index(1))
        })
    })
})
