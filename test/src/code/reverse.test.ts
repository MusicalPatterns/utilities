// tslint:disable no-duplicate-string

import { as, computeReverse, Cycle, Hz } from '../../../src/indexForTest'

describe('reverse', (): void => {
    describe('strings', (): void => {
        it('works', (): void => {
            expect(computeReverse('hello'))
                .toBe('olleh')
        })

        it('does not mutate the original value', (): void => {
            const original: string = 'hello'

            computeReverse(original)

            expect(original)
                .toBe('hello')
        })
    })

    describe('arrays', (): void => {
        it('works', (): void => {
            expect(computeReverse([ 3, 4, 5 ].map(as.Hz)))
                .toEqual([ 5, 4, 3 ].map(as.Hz))
        })

        it('does not mutate the original value', (): void => {
            const original: Hz[] = [ 3, 4, 5 ].map(as.Hz)

            computeReverse(original)

            expect(original)
                .toEqual([ 3, 4, 5 ].map(as.Hz))
        })
    })

    describe('Cycles', (): void => {
        it('works', (): void => {
            // @ts-ignore
            expect(computeReverse(as.Cycle([ 3, 4, 5 ])))
                // @ts-ignore
                .toEqual(as.Cycle([ 5, 4, 3 ]))
        })

        it('does not mutate the original value', (): void => {
            const original: Cycle = as.Cycle([ 3, 4, 5 ])

            computeReverse(original)

            expect(original)
                .toEqual(as.Cycle([ 3, 4, 5 ]))
        })
    })
})
