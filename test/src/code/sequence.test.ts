import { sequence } from '../../../src/indexForTest'

describe('sequence', () => {
    it('works for strings', () => {
        expect(sequence('hello', 'darkness', 'my', 'old', 'fiend'))
            .toEqual('hellodarknessmyoldfiend')
    })

    it('works for arrays', () => {
        expect(sequence([ 1, 2 ], [ 3, 4, 5 ], [ 6 ]))
            .toEqual([ 1, 2, 3, 4, 5, 6 ])
    })
})
