// tslint:disable no-duplicate-string

import {
    goesQuadratically,
    goesQuadraticallyBetweenValueAndValue,
    goesQuadraticallyFromValueToValue,
} from '../../../src/indexForTest'

describe('quadratic', () => {
    describe('goes quadratically', () => {
        describe('reports true if the array elements are unified in either decreasing or increasing quadratically', () => {
            it('increasing by powers of 2 (as an example power)', () => {
                expect(goesQuadratically([ 1 / 4, 1 / 2, 1, 2, 4, 8, 16 ]))
                    .toBeTruthy()
            })

            it('decreasing by powers of 5 (as a demonstration of a different power)', () => {
                expect(goesQuadratically([ 250, 50, 10, 2, 2 / 5 ]))
                    .toBeTruthy()
            })

            it('staying the same - which could qualify for going quadratically by powers of 1', () => {
                expect(goesQuadratically([ 3, 3, 3, 3, 3 ]))
                    .toBeTruthy()
            })
        })

        it('reports false if the array elements are not unified in either decreasing or increasing quadratically', () => {
            expect(goesQuadratically([ 1 / 2, 1 / 3, 1 / 6, 1 / 12 ]))
                .toBeFalsy()
        })

        it('reports false if the array elements are increasing linearly', () => {
            expect(goesQuadratically([ 1, 2, 3, 4, 5 ]))
                .toBeFalsy()
        })

        it('reports false if the array elements are decreasing linearly', () => {
            expect(goesQuadratically([ 5, 4, 3, 2, 1 ]))
                .toBeFalsy()
        })

        it('reports false if the array elements are increasing but not linearly nor quadratically', () => {
            expect(goesQuadratically([ 1, 2, 5, 7, 22 ]))
                .toBeFalsy()
        })

        it('reports false if the array elements are decreasing but not linearly nor quadratically', () => {
            expect(goesQuadratically([ 22, 7, 5, 2, 1 ]))
                .toBeFalsy()
        })

        describe('supports providing a begin value, from which the array must go quadratically', () => {
            it('false, because goes quadratically but does not match the begin value', () => {
                expect(goesQuadratically([ 1, 2, 4, 8, 16 ], 5))
                    .toBeFalsy()
            })

            it('true, because goes quadratically and matches the begin value', () => {
                expect(goesQuadratically([ 5, 10, 20, 40, 80 ], 5))
                    .toBeTruthy()
            })

            it('false, because matches the begin value but does not go quadratically', () => {
                expect(goesQuadratically([ 5, 5, 8, 11, 3, 56 ], 5))
                    .toBeFalsy()
            })
        })

        describe('precision affects the begin value', () => {
            it('without precision provided, so it must be exact - false because it is not exact', () => {
                expect(goesQuadratically([ 5.00001, 10, 20, 40, 80 ], 5))
                    .toBeFalsy()
            })

            it('with precision provided - true because it is within precision', () => {
                expect(goesQuadratically([ 5.00001, 10, 20, 40, 80 ], 5, 2))
                    .toBeTruthy()
            })

            it('with precision provided - false because it is beyond precision', () => {
                expect(goesQuadratically([ 5.1, 10, 20, 40, 80 ], 5, 2))
                    .toBeFalsy()
            })
        })

        describe('precision affects the quadratic change check', () => {
            it('true, because the deviation from monotonic motion is within the precision', () => {
                expect(goesQuadratically([ 1, 2, 4.00001, 8, 16 ], undefined, 2))
                    .toBeTruthy()
            })

            it('false, because the deviation from monotonic motion is not within the precision', () => {
                expect(goesQuadratically([ 1, 2, 4.1, 8, 16 ], undefined, 2))
                    .toBeFalsy()
            })
        })
    })

    describe('goes quadratically between value and value', () => {
        describe('reports true if the array elements are unified in either decreasing or increasing quadratically', () => {
            it('increasing by powers of 2 (as an example power)', () => {
                expect(goesQuadraticallyBetweenValueAndValue([ 1, 2, 4, 8 ], 0, 10))
                    .toBeTruthy()
            })

            it('decreasing by powers of 5 (as a demonstration of a different power)', () => {
                expect(goesQuadraticallyBetweenValueAndValue([ 125, 25, 5, 1 ], 200, 0))
                    .toBeTruthy()
            })

            it('staying the same - which could qualify either for increasing or decreasing', () => {
                expect(goesQuadraticallyBetweenValueAndValue([ 3, 3, 3, 3, 3 ], 0, 10))
                    .toBeTruthy()
            })
        })

        it('reports false if the array elements are not unified in either decreasing or increasing quadratically', () => {
            expect(goesQuadraticallyBetweenValueAndValue([ 0, 1, 2, 1, 3 ], 0, 10))
                .toBeFalsy()
        })

        it('reports false if the array elements are increasing linearly', () => {
            expect(goesQuadraticallyBetweenValueAndValue([ 1, 2, 3, 4, 5 ], 0, 10))
                .toBeFalsy()
        })

        it('reports false if the array elements are decreasing linearly', () => {
            expect(goesQuadraticallyBetweenValueAndValue([ 5, 4, 3, 2, 1 ], 0, 10))
                .toBeFalsy()
        })

        describe('the array must go quadratically between the begin and end values', () => {
            it('false, because goes quadratically but does not respect begin value', () => {
                expect(goesQuadraticallyBetweenValueAndValue([ 1, 2, 4, 8 ], 5, 10))
                    .toBeFalsy()
            })

            it('false, because goes quadratically, between the values, but in the wrong direction', () => {
                expect(goesQuadraticallyBetweenValueAndValue([ 1, 2, 4, 8 ], 10, 0))
                    .toBeFalsy()
            })

            it('true, because goes quadratically and stays within the begin and end values', () => {
                expect(goesQuadraticallyBetweenValueAndValue([ 1, 2, 4, 8 ], 0, 10))
                    .toBeTruthy()
            })

            it('false, because matches the begin value but does not go quadratically', () => {
                expect(goesQuadraticallyBetweenValueAndValue([ 5, 6, 7, 8 ], 5, 10))
                    .toBeFalsy()
            })
        })

        describe('precision affects the begin and end values', () => {
            it('without precision provided, so it must be exact - false because begin value is not exact', () => {
                expect(goesQuadraticallyBetweenValueAndValue([ 4.99999, 10, 20, 40 ], 5, 40))
                    .toBeFalsy()
            })

            it('with precision provided - true because begin value is off but within precision', () => {
                expect(goesQuadraticallyBetweenValueAndValue([ 4.99999, 10, 20, 40 ], 5, 40, 2))
                    .toBeTruthy()
            })

            it('with precision provided - false because begin value is beyond precision', () => {
                expect(goesQuadraticallyBetweenValueAndValue([ 4.9, 10, 20, 40 ], 5, 40, 2))
                    .toBeFalsy()
            })

            it('without precision provided, so it must be exact - false because end value is not exact', () => {
                expect(goesQuadraticallyBetweenValueAndValue([ 5, 10, 20, 40.00001 ], 5, 40))
                    .toBeFalsy()
            })

            it('with precision provided - true because end value is off but within precision', () => {
                expect(goesQuadraticallyBetweenValueAndValue([ 5, 10, 20, 40.00001 ], 5, 40, 2))
                    .toBeTruthy()
            })

            it('with precision provided - false because end value is beyond precision', () => {
                expect(goesQuadraticallyBetweenValueAndValue([ 5, 10, 20, 40.1 ], 5, 40, 2))
                    .toBeFalsy()
            })
        })

        describe('precision affects the monotonic change check', () => {
            it('true, because the deviation from monotonic motion is within the precision', () => {
                expect(goesQuadraticallyBetweenValueAndValue([ 1, 2, 4.00001, 8 ], 0, 10, 2))
                    .toBeTruthy()
            })

            it('false, because the deviation from monotonic motion is not within the precision', () => {
                expect(goesQuadraticallyBetweenValueAndValue([ 1, 2, 4.1, 8 ], 0, 10, 2))
                    .toBeFalsy()
            })
        })
    })

    describe('goes quadratically from value to value', () => {
        describe('reports true if the array elements are unified in either decreasing or increasing quadratically', () => {
            it('increasing', () => {
                expect(goesQuadraticallyFromValueToValue([ 1.25, 2.5, 5, 10 ], 1.25, 10))
                    .toBeTruthy()
            })

            it('decreasing', () => {
                expect(goesQuadraticallyFromValueToValue([ 10, 5, 2.5, 1.25 ], 10, 1.25))
                    .toBeTruthy()
            })

            it('staying the same - which could qualify either for increasing or decreasing', () => {
                expect(goesQuadraticallyFromValueToValue([ 3, 3, 3, 3, 3 ], 3, 3))
                    .toBeTruthy()
            })
        })

        it('reports false if the array elements are not unified in either decreasing or increasing', () => {
            expect(goesQuadraticallyFromValueToValue([ 0, 1, 2, 1, 10 ], 0, 10))
                .toBeFalsy()
        })

        describe('the array must go quadratically from the begin value to the end values', () => {
            it('false, because goes quadratically but does not respect begin value', () => {
                expect(goesQuadraticallyFromValueToValue([ 2, 4, 8 ], 1, 8))
                    .toBeFalsy()
            })

            it('false, because goes quadratically from one of the values to the other, but in the wrong direction', () => {
                expect(goesQuadraticallyFromValueToValue([ 1, 2, 4, 8 ], 8, 1))
                    .toBeFalsy()
            })

            it('true, because goes quadratically from the begin value to the end value', () => {
                expect(goesQuadraticallyFromValueToValue([ 1, 2, 4, 8 ], 1, 8))
                    .toBeTruthy()
            })

            it('false, because matches the begin and end values but does not go quadratically', () => {
                expect(goesQuadraticallyFromValueToValue([ 1, 2, 3, 4, 5, 6, 7, 8 ], 1, 8))
                    .toBeFalsy()
            })
        })

        describe('precision affects the begin and end values', () => {
            it('without precision provided, so it must be exact - false because begin value is not exact', () => {
                expect(goesQuadraticallyFromValueToValue([ 1.00001, 2, 4, 8 ], 1, 8))
                    .toBeFalsy()
            })

            it('with precision provided - true because begin value is off but within precision', () => {
                expect(goesQuadraticallyFromValueToValue([ 1.00001, 2, 4, 8 ], 1, 8, 2))
                    .toBeTruthy()
            })

            it('with precision provided - false because begin value is beyond precision', () => {
                expect(goesQuadraticallyFromValueToValue([ 1.1, 2, 4, 8 ], 1, 8, 2))
                    .toBeFalsy()
            })

            it('without precision provided, so it must be exact - false because end value is not exact', () => {
                expect(goesQuadraticallyFromValueToValue([ 1, 2, 4, 7.99999 ], 1, 8))
                    .toBeFalsy()
            })

            it('with precision provided - true because end value is off but within precision', () => {
                expect(goesQuadraticallyFromValueToValue([ 1, 2, 4, 7.99999 ], 1, 8, 2))
                    .toBeTruthy()
            })

            it('with precision provided - false because end value is beyond precision', () => {
                expect(goesQuadraticallyFromValueToValue([ 1, 2, 4, 7.9 ], 1, 8, 2))
                    .toBeFalsy()
            })
        })

        describe('precision affects the monotonic change check', () => {
            it('true, because the deviation from monotonic motion is within the precision', () => {
                expect(goesQuadraticallyFromValueToValue([ 1, 2, 4.00001, 8 ], 1, 8, 2))
                    .toBeTruthy()
            })

            it('false, because the deviation from monotonic motion is not within the precision', () => {
                expect(goesQuadraticallyFromValueToValue([ 1, 2, 4.1, 8 ], 1, 8, 2))
                    .toBeFalsy()
            })
        })
    })
})