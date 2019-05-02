// tslint:disable no-duplicate-string

import { as, Cycle, Hz, reverse } from '../../../src/indexForTest'

describe('reverse', () => {
    describe('strings', () => {
        it('works', () => {
            expect(reverse('hello'))
                .toBe('olleh')
        })

        it('does not mutate the original value', () => {
            const original: string = 'hello'

            reverse(original)

            expect(original)
                .toBe('hello')
        })
    })

    describe('arrays', () => {
        it('works', () => {
            expect(reverse([ 3, 4, 5 ].map(as.Hz)))
                .toEqual([ 5, 4, 3 ].map(as.Hz))
        })

        it('does not mutate the original value', () => {
            const original: Hz[] = [ 3, 4, 5 ].map(as.Hz)

            reverse(original)

            expect(original)
                .toEqual([ 3, 4, 5 ].map(as.Hz))
        })
    })

    describe('Cycles', () => {
        it('works', () => {
            expect(reverse(as.Cycle([ 3, 4, 5 ])))
                .toEqual(as.Cycle([ 5, 4, 3 ]))
        })

        it('does not mutate the original value', () => {
            const original: Cycle = as.Cycle([ 3, 4, 5 ])

            reverse(original)

            expect(original)
                .toEqual(as.Cycle([ 3, 4, 5 ]))
        })
    })
})
