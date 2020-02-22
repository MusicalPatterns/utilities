import { sequence } from '../../../src/indexForTest'

describe('sequence', (): void => {
    it('works for strings', (): void => {
        expect(sequence('hello', 'darkness', 'my', 'old', 'fiend'))
            .toEqual('hellodarknessmyoldfiend')
    })

    it('works for arrays', (): void => {
        expect(sequence([ 1, 2 ], [ 3, 4, 5 ], [ 6 ]))
            .toEqual([ 1, 2, 3, 4, 5, 6 ])
    })
})
