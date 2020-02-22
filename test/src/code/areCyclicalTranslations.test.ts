// tslint:disable no-duplicate-string

import { areCyclicalTranslations } from '../../../src/indexForTest'

describe('are cyclical translations', (): void => {
    it('returns true when the two arrays are cyclical translations of each other', (): void => {
        expect(areCyclicalTranslations([ 3, 4, 5, 6 ], [ 5, 6, 3, 4 ]))
            .toBeTruthy()
    })

    it('returns false otherwise', (): void => {
        expect(areCyclicalTranslations([ 3, 4, 5, 6 ], [ 6, 5, 4, 3 ]))
            .toBeFalsy()
    })

    describe('for more than two arguments', (): void => {
        it('returns true when the all arrays are cyclical translations of each other', (): void => {
            expect(areCyclicalTranslations([ 3, 4, 5, 6 ], [ 5, 6, 3, 4 ], [ 6, 3, 4, 5 ]))
                .toBeTruthy()
        })

        it('returns false when some arrays are cyclical translations of each other but not all are', (): void => {
            expect(areCyclicalTranslations([ 3, 4, 5, 6 ], [ 6, 5, 4, 3 ], [ 6, 3, 4, 5 ]))
                .toBeFalsy()
        })

        it('returns false when none of the arrays are cyclical translations of each other', (): void => {
            expect(areCyclicalTranslations([ 3, 4, 5, 6 ], [ 6, 5, 4, 3 ], [ 6, 3, 5, 4 ]))
                .toBeFalsy()
        })
    })

    describe('for strings', (): void => {
        it('returns true when the two strings are cyclical translations of each other', (): void => {
            expect(areCyclicalTranslations('hello', 'llohe'))
                .toBeTruthy()
        })

        it('returns false otherwise', (): void => {
            expect(areCyclicalTranslations('hello', 'ehllo'))
                .toBeFalsy()
        })

        describe('for more than two arguments', (): void => {
            it('returns true when the all arrays are cyclical translations of each other', (): void => {
                expect(areCyclicalTranslations('hello', 'llohe', 'lohel'))
                    .toBeTruthy()
            })

            it('returns false when some arrays are cyclical translations of each other but not all are', (): void => {
                expect(areCyclicalTranslations('hello', 'llohe', 'lohle'))
                    .toBeFalsy()
            })

            it('returns false when none of the arrays are cyclical translations of each other', (): void => {
                expect(areCyclicalTranslations('hello', 'lolhe', 'lohle'))
                    .toBeFalsy()
            })
        })
    })
})
