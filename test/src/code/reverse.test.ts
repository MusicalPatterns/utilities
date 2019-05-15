// tslint:disable no-duplicate-string

import { as, computeReverse, Cycle, Hz } from '../../../src/indexForTest'

describe('reverse', () => {
    describe('strings', () => {
        it('works', () => {
            expect(computeReverse('hello'))
                .toBe('olleh')
        })

        it('does not mutate the original value', () => {
            const original: string = 'hello'

            computeReverse(original)

            expect(original)
                .toBe('hello')
        })
    })

    describe('arrays', () => {
        it('works', () => {
            expect(computeReverse([ 3, 4, 5 ].map(as.Hz)))
                .toEqual([ 5, 4, 3 ].map(as.Hz))
        })

        it('does not mutate the original value', () => {
            const original: Hz[] = [ 3, 4, 5 ].map(as.Hz)

            computeReverse(original)

            expect(original)
                .toEqual([ 3, 4, 5 ].map(as.Hz))
        })
    })

    describe('Cycles', () => {
        it('works', () => {
            // @ts-ignore
            expect(computeReverse(as.Cycle([ 3, 4, 5 ])))
                .toEqual(as.Cycle([ 5, 4, 3 ]))
        })

        it('does not mutate the original value', () => {
            const original: Cycle = as.Cycle([ 3, 4, 5 ])

            computeReverse(original)

            expect(original)
                .toEqual(as.Cycle([ 3, 4, 5 ]))
        })
    })
})
