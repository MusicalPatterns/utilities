import { allValuesAreTheSame } from '../../../src/indexForTest'

describe('goes', (): void => {
    describe('all values are the same', (): void => {
        it('returns true if all values are the same', (): void => {
            expect(allValuesAreTheSame([ 6, 6, 6, 6, 6, 6, 6, 6, 6 ]))
                .toBeTruthy()
        })

        it('returns false if any value is not the same', (): void => {
            expect(allValuesAreTheSame([ 6, 6, 6.000001, 6, 6, 6, 6, 6, 6 ]))
                .toBeFalsy()
        })

        it('supports being the same to a certain precision', (): void => {
            expect(allValuesAreTheSame([ 6, 6, 6.000001, 6, 6, 6, 6, 6, 6 ], undefined, 2))
                .toBeTruthy()
        })

        it('it does not return true if a value is off by more than the precision', (): void => {
            expect(allValuesAreTheSame([ 6, 6, 6.1, 6, 6, 6, 6, 6, 6 ], undefined, 2))
                .toBeFalsy()
        })

        it('supports specifying which value all the values are the same to, and returns false even if they are all the same to each other but not to it', (): void => {
            expect(allValuesAreTheSame([ 6, 6, 6, 6, 6, 6, 6, 6, 6 ], 5))
                .toBeFalsy()
        })

        it('returns true there are no values', (): void => {
            expect(allValuesAreTheSame([]))
                .toBeTruthy()
        })
    })
})
