// tslint:disable no-duplicate-string

import {
    as,
    goesQuadratically,
    goesQuadraticallyBetweenValueAndValue,
    goesQuadraticallyFromValueToValue,
} from '../../../src/indexForTest'

describe('quadratic', (): void => {
    describe('goes quadratically', (): void => {
        describe('reports true if the array elements are unified in either decreasing or increasing quadratically', (): void => {
            it('increasing by powers of 2 (as an example power)', (): void => {
                expect(goesQuadratically([ 1 / 4, 1 / 2, 1, 2, 4, 8, 16 ].map(as.Point)))
                    .toBeTruthy()
            })

            it('decreasing by powers of 5 (as a demonstration of a different power)', (): void => {
                expect(goesQuadratically([ 250, 50, 10, 2, 2 / 5 ].map(as.Point)))
                    .toBeTruthy()
            })

            it('staying the same - which could qualify for going quadratically by powers of 1', (): void => {
                expect(goesQuadratically([ 3, 3, 3, 3, 3 ].map(as.Point)))
                    .toBeTruthy()
            })
        })

        it('reports false if the array elements are not unified in either decreasing or increasing quadratically', (): void => {
            expect(goesQuadratically([ 1 / 2, 1 / 3, 1 / 6, 1 / 12 ].map(as.Point)))
                .toBeFalsy()
        })

        it('reports false if the array elements are increasing linearly', (): void => {
            expect(goesQuadratically([ 1, 2, 3, 4, 5 ].map(as.Point)))
                .toBeFalsy()
        })

        it('reports false if the array elements are decreasing linearly', (): void => {
            expect(goesQuadratically([ 5, 4, 3, 2, 1 ].map(as.Point)))
                .toBeFalsy()
        })

        it('reports false if the array elements are increasing but not linearly nor quadratically', (): void => {
            expect(goesQuadratically([ 1, 2, 5, 7, 22 ].map(as.Point)))
                .toBeFalsy()
        })

        it('reports false if the array elements are decreasing but not linearly nor quadratically', (): void => {
            expect(goesQuadratically([ 22, 7, 5, 2, 1 ].map(as.Point)))
                .toBeFalsy()
        })

        describe('supports providing a begin value, from which the array must go quadratically', (): void => {
            it('false, because goes quadratically but does not match the begin value', (): void => {
                expect(goesQuadratically([ 1, 2, 4, 8, 16 ].map(as.Point), as.Point(5)))
                    .toBeFalsy()
            })

            it('true, because goes quadratically and matches the begin value', (): void => {
                expect(goesQuadratically([ 5, 10, 20, 40, 80 ].map(as.Point), as.Point(5)))
                    .toBeTruthy()
            })

            it('false, because matches the begin value but does not go quadratically', (): void => {
                expect(goesQuadratically([ 5, 5, 8, 11, 3, 56 ].map(as.Point), as.Point(5)))
                    .toBeFalsy()
            })
        })

        describe('precision affects the begin value', (): void => {
            it('without precision provided, so it must be exact - false because it is not exact', (): void => {
                expect(goesQuadratically([ 5.00001, 10, 20, 40, 80 ].map(as.Point), as.Point(5)))
                    .toBeFalsy()
            })

            it('with precision provided - true because it is within precision', (): void => {
                expect(goesQuadratically([ 5.00001, 10, 20, 40, 80 ].map(as.Point), as.Point(5), 2))
                    .toBeTruthy()
            })

            it('with precision provided - false because it is beyond precision', (): void => {
                expect(goesQuadratically([ 5.1, 10, 20, 40, 80 ].map(as.Point), as.Point(5), 2))
                    .toBeFalsy()
            })
        })

        describe('precision affects the quadratic change check', (): void => {
            it('true, because the deviation from monotonic motion is within the precision', (): void => {
                expect(goesQuadratically([ 1, 2, 4.00001, 8, 16 ].map(as.Point), undefined, 2))
                    .toBeTruthy()
            })

            it('false, because the deviation from monotonic motion is not within the precision', (): void => {
                expect(goesQuadratically([ 1, 2, 4.1, 8, 16 ].map(as.Point), undefined, 2))
                    .toBeFalsy()
            })
        })
    })

    describe('goes quadratically between value and value', (): void => {
        describe('reports true if the array elements are unified in either decreasing or increasing quadratically', (): void => {
            it('increasing by powers of 2 (as an example power)', (): void => {
                expect(goesQuadraticallyBetweenValueAndValue([ 1, 2, 4, 8 ].map(as.Point), as.Point(0), as.Point(10)))
                    .toBeTruthy()
            })

            it('decreasing by powers of 5 (as a demonstration of a different power)', (): void => {
                expect(goesQuadraticallyBetweenValueAndValue([ 125, 25, 5, 1 ].map(as.Point), as.Point(200), as.Point(0)))
                    .toBeTruthy()
            })

            it('staying the same - which could qualify either for increasing or decreasing', (): void => {
                expect(goesQuadraticallyBetweenValueAndValue([ 3, 3, 3, 3, 3 ].map(as.Point), as.Point(0), as.Point(10)))
                    .toBeTruthy()
            })
        })

        it('reports false if the array elements are not unified in either decreasing or increasing quadratically', (): void => {
            expect(goesQuadraticallyBetweenValueAndValue([ 0, 1, 2, 1, 3 ].map(as.Point), as.Point(0), as.Point(10)))
                .toBeFalsy()
        })

        it('reports false if the array elements are increasing linearly', (): void => {
            expect(goesQuadraticallyBetweenValueAndValue([ 1, 2, 3, 4, 5 ].map(as.Point), as.Point(0), as.Point(10)))
                .toBeFalsy()
        })

        it('reports false if the array elements are decreasing linearly', (): void => {
            expect(goesQuadraticallyBetweenValueAndValue([ 5, 4, 3, 2, 1 ].map(as.Point), as.Point(0), as.Point(10)))
                .toBeFalsy()
        })

        describe('the array must go quadratically between the begin and end values', (): void => {
            it('false, because goes quadratically but does not respect begin value', (): void => {
                expect(goesQuadraticallyBetweenValueAndValue([ 1, 2, 4, 8 ].map(as.Point), as.Point(5), as.Point(10)))
                    .toBeFalsy()
            })

            it('false, because goes quadratically, between the values, but in the wrong direction', (): void => {
                expect(goesQuadraticallyBetweenValueAndValue([ 1, 2, 4, 8 ].map(as.Point), as.Point(10), as.Point(0)))
                    .toBeFalsy()
            })

            it('true, because goes quadratically and stays within the begin and end values', (): void => {
                expect(goesQuadraticallyBetweenValueAndValue([ 1, 2, 4, 8 ].map(as.Point), as.Point(0), as.Point(10)))
                    .toBeTruthy()
            })

            it('false, because matches the begin value but does not go quadratically', (): void => {
                expect(goesQuadraticallyBetweenValueAndValue([ 5, 6, 7, 8 ].map(as.Point), as.Point(5), as.Point(10)))
                    .toBeFalsy()
            })
        })

        describe('precision affects the begin and end values', (): void => {
            it('without precision provided, so it must be exact - false because begin value is not exact', (): void => {
                expect(goesQuadraticallyBetweenValueAndValue([ 4.99999, 10, 20, 40 ].map(as.Point), as.Point(5), as.Point(40)))
                    .toBeFalsy()
            })

            it('with precision provided - true because begin value is off but within precision', (): void => {
                expect(goesQuadraticallyBetweenValueAndValue([ 4.99999, 10, 20, 40 ].map(as.Point), as.Point(5), as.Point(40), 2))
                    .toBeTruthy()
            })

            it('with precision provided - false because begin value is beyond precision', (): void => {
                expect(goesQuadraticallyBetweenValueAndValue([ 4.9, 10, 20, 40 ].map(as.Point), as.Point(5), as.Point(40), 2))
                    .toBeFalsy()
            })

            it('without precision provided, so it must be exact - false because end value is not exact', (): void => {
                expect(goesQuadraticallyBetweenValueAndValue([ 5, 10, 20, 40.00001 ].map(as.Point), as.Point(5), as.Point(40)))
                    .toBeFalsy()
            })

            it('with precision provided - true because end value is off but within precision', (): void => {
                expect(goesQuadraticallyBetweenValueAndValue([ 5, 10, 20, 40.00001 ].map(as.Point), as.Point(5), as.Point(40), 2))
                    .toBeTruthy()
            })

            it('with precision provided - false because end value is beyond precision', (): void => {
                expect(goesQuadraticallyBetweenValueAndValue([ 5, 10, 20, 40.1 ].map(as.Point), as.Point(5), as.Point(40), 2))
                    .toBeFalsy()
            })
        })

        describe('precision affects the monotonic change check', (): void => {
            it('true, because the deviation from monotonic motion is within the precision', (): void => {
                expect(goesQuadraticallyBetweenValueAndValue([ 1, 2, 4.00001, 8 ].map(as.Point), as.Point(0), as.Point(10), 2))
                    .toBeTruthy()
            })

            it('false, because the deviation from monotonic motion is not within the precision', (): void => {
                expect(goesQuadraticallyBetweenValueAndValue([ 1, 2, 4.1, 8 ].map(as.Point), as.Point(0), as.Point(10), 2))
                    .toBeFalsy()
            })
        })
    })

    describe('goes quadratically from value to value', (): void => {
        describe('reports true if the array elements are unified in either decreasing or increasing quadratically', (): void => {
            it('increasing', (): void => {
                expect(goesQuadraticallyFromValueToValue([ 1.25, 2.5, 5, 10 ].map(as.Point), as.Point(1.25), as.Point(10)))
                    .toBeTruthy()
            })

            it('decreasing', (): void => {
                expect(goesQuadraticallyFromValueToValue([ 10, 5, 2.5, 1.25 ].map(as.Point), as.Point(10), as.Point(1.25)))
                    .toBeTruthy()
            })

            it('staying the same - which could qualify either for increasing or decreasing', (): void => {
                expect(goesQuadraticallyFromValueToValue([ 3, 3, 3, 3, 3 ].map(as.Point), as.Point(3), as.Point(3)))
                    .toBeTruthy()
            })
        })

        it('reports false if the array elements are not unified in either decreasing or increasing', (): void => {
            expect(goesQuadraticallyFromValueToValue([ 0, 1, 2, 1, 10 ].map(as.Point), as.Point(0), as.Point(10)))
                .toBeFalsy()
        })

        describe('the array must go quadratically from the begin value to the end values', (): void => {
            it('false, because goes quadratically but does not respect begin value', (): void => {
                expect(goesQuadraticallyFromValueToValue([ 2, 4, 8 ].map(as.Point), as.Point(1), as.Point(8)))
                    .toBeFalsy()
            })

            it('false, because goes quadratically from one of the values to the other, but in the wrong direction', (): void => {
                expect(goesQuadraticallyFromValueToValue([ 1, 2, 4, 8 ].map(as.Point), as.Point(8), as.Point(1)))
                    .toBeFalsy()
            })

            it('true, because goes quadratically from the begin value to the end value', (): void => {
                expect(goesQuadraticallyFromValueToValue([ 1, 2, 4, 8 ].map(as.Point), as.Point(1), as.Point(8)))
                    .toBeTruthy()
            })

            it('false, because matches the begin and end values but does not go quadratically', (): void => {
                expect(goesQuadraticallyFromValueToValue([ 1, 2, 3, 4, 5, 6, 7, 8 ].map(as.Point), as.Point(1), as.Point(8)))
                    .toBeFalsy()
            })
        })

        describe('precision affects the begin and end values', (): void => {
            it('without precision provided, so it must be exact - false because begin value is not exact', (): void => {
                expect(goesQuadraticallyFromValueToValue([ 1.00001, 2, 4, 8 ].map(as.Point), as.Point(1), as.Point(8)))
                    .toBeFalsy()
            })

            it('with precision provided - true because begin value is off but within precision', (): void => {
                expect(goesQuadraticallyFromValueToValue([ 1.00001, 2, 4, 8 ].map(as.Point), as.Point(1), as.Point(8), 2))
                    .toBeTruthy()
            })

            it('with precision provided - false because begin value is beyond precision', (): void => {
                expect(goesQuadraticallyFromValueToValue([ 1.1, 2, 4, 8 ].map(as.Point), as.Point(1), as.Point(8), 2))
                    .toBeFalsy()
            })

            it('without precision provided, so it must be exact - false because end value is not exact', (): void => {
                expect(goesQuadraticallyFromValueToValue([ 1, 2, 4, 7.99999 ].map(as.Point), as.Point(1), as.Point(8)))
                    .toBeFalsy()
            })

            it('with precision provided - true because end value is off but within precision', (): void => {
                expect(goesQuadraticallyFromValueToValue([ 1, 2, 4, 7.99999 ].map(as.Point), as.Point(1), as.Point(8), 2))
                    .toBeTruthy()
            })

            it('with precision provided - false because end value is beyond precision', (): void => {
                expect(goesQuadraticallyFromValueToValue([ 1, 2, 4, 7.9 ].map(as.Point), as.Point(1), as.Point(8), 2))
                    .toBeFalsy()
            })
        })

        describe('precision affects the monotonic change check', (): void => {
            it('true, because the deviation from monotonic motion is within the precision', (): void => {
                expect(goesQuadraticallyFromValueToValue([ 1, 2, 4.00001, 8 ].map(as.Point), as.Point(1), as.Point(8), 2))
                    .toBeTruthy()
            })

            it('false, because the deviation from monotonic motion is not within the precision', (): void => {
                expect(goesQuadraticallyFromValueToValue([ 1, 2, 4.1, 8 ].map(as.Point), as.Point(1), as.Point(8), 2))
                    .toBeFalsy()
            })
        })
    })
})
