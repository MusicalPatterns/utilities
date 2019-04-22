// tslint:disable no-duplicate-string

import {
    as,
    goesMonotonically,
    goesMonotonicallyBetweenValueAndValue,
    goesMonotonicallyFromValueToValue,
} from '../../../src/indexForTest'

describe('monotonic', () => {
    describe('goes monotonically', () => {
        describe('reports true if the array elements are unified in either weakly decreasing or weakly increasing', () => {
            it('weakly increasing - including one step where it stays the same to prove the support for weak', () => {
                expect(goesMonotonically([ 0, 1, 2, 5, 5, 8 ].map(as.Point)))
                    .toBeTruthy()
            })

            it('weakly decreasing - including one step where it stays the same to prove the support for weak', () => {
                expect(goesMonotonically([ 8, 5, 5, 2, 1, 0 ].map(as.Point)))
                    .toBeTruthy()
            })

            it('staying the same - which could qualify either for weakly increasing or weakly decreasing', () => {
                expect(goesMonotonically([ 3, 3, 3, 3, 3 ].map(as.Point)))
                    .toBeTruthy()
            })
        })

        it('reports false if the array elements are not unified in either weakly decreasing or weakly increasing', () => {
            expect(goesMonotonically([ 0, 1, 2, 1, 3 ].map(as.Point)))
                .toBeFalsy()
        })

        describe('supports providing a begin value, from which the array must go monotonically', () => {
            it('false, because goes monotonically but does not match the begin value', () => {
                expect(goesMonotonically([ 0, 1, 2, 5, 5, 8 ].map(as.Point), as.Point(5)))
                    .toBeFalsy()
            })

            it('true, because goes monotonically and matches the begin value', () => {
                expect(goesMonotonically([ 5, 8, 8, 9, 11, 183 ].map(as.Point), as.Point(5)))
                    .toBeTruthy()
            })

            it('false, because matches the begin value but does not go monotonically', () => {
                expect(goesMonotonically([ 5, 5, 8, 11, 3, 56 ].map(as.Point), as.Point(5)))
                    .toBeFalsy()
            })
        })

        describe('precision affects the begin value', () => {
            it('without precision provided, so it must be exact - false because it is not exact', () => {
                expect(goesMonotonically([ 5.00001, 8, 8, 9, 11, 183 ].map(as.Point), as.Point(5)))
                    .toBeFalsy()
            })

            it('with precision provided - true because it is within precision', () => {
                expect(goesMonotonically([ 5.00001, 8, 8, 9, 11, 183 ].map(as.Point), as.Point(5), undefined, 2))
                    .toBeTruthy()
            })

            it('with precision provided - false because it is beyond precision', () => {
                expect(goesMonotonically([ 5.1, 8, 8, 9, 11, 183 ].map(as.Point), as.Point(5), undefined, 2))
                    .toBeFalsy()
            })
        })

        describe('precision affects the monotonic change check', () => {
            it('true, because the deviation from monotonic motion is within the precision', () => {
                expect(goesMonotonically([ 0, 1, 2, 5.00001, 5, 8 ].map(as.Point), undefined, undefined, 2))
                    .toBeTruthy()
            })

            it('false, because the deviation from monotonic motion is not within the precision', () => {
                expect(goesMonotonically([ 0, 1, 2, 5.1, 5, 8 ].map(as.Point), undefined, undefined, 2))
                    .toBeFalsy()
            })
        })
    })

    describe('goes monotonically between value and value', () => {
        describe('reports true if the array elements are unified in either weakly decreasing or weakly increasing', () => {
            it('weakly increasing - including one step where it stays the same to prove the support for weak', () => {
                expect(goesMonotonicallyBetweenValueAndValue([ 0, 1, 2, 5, 5, 8 ].map(as.Point), as.Point(0), as.Point(10)))
                    .toBeTruthy()
            })

            it('weakly decreasing - including one step where it stays the same to prove the support for weak', () => {
                expect(goesMonotonicallyBetweenValueAndValue([ 8, 5, 5, 2, 1, 0 ].map(as.Point), as.Point(10), as.Point(0)))
                    .toBeTruthy()
            })

            it('staying the same - which could qualify either for weakly increasing or weakly decreasing', () => {
                expect(goesMonotonicallyBetweenValueAndValue([ 3, 3, 3, 3, 3 ].map(as.Point), as.Point(0), as.Point(10)))
                    .toBeTruthy()
            })
        })

        it('reports false if the array elements are not unified in either weakly decreasing or weakly increasing', () => {
            expect(goesMonotonicallyBetweenValueAndValue([ 0, 1, 2, 1, 3 ].map(as.Point), as.Point(0), as.Point(10)))
                .toBeFalsy()
        })

        describe('the array must go monotonically between the begin and end values', () => {
            it('false, because goes monotonically but does not respect begin value', () => {
                expect(goesMonotonicallyBetweenValueAndValue([ 0, 1, 2, 5, 5, 8 ].map(as.Point), as.Point(5), as.Point(10)))
                    .toBeFalsy()
            })

            it('false, because goes monotonically, between the values, but in the wrong direction', () => {
                expect(goesMonotonicallyBetweenValueAndValue([ 5, 5, 8, 9 ].map(as.Point), as.Point(10), as.Point(5)))
                    .toBeFalsy()
            })

            it('true, because goes monotonically and stays within the begin and end values', () => {
                expect(goesMonotonicallyBetweenValueAndValue([ 5, 8, 8, 9, 9.5 ].map(as.Point), as.Point(0), as.Point(10)))
                    .toBeTruthy()
            })

            it('false, because matches the begin value but does not go monotonically', () => {
                expect(goesMonotonicallyBetweenValueAndValue([ 5, 5, 8, 9, 3, 6 ].map(as.Point), as.Point(0), as.Point(10)))
                    .toBeFalsy()
            })
        })

        describe('precision affects the begin and end values', () => {
            it('without precision provided, so it must be exact - false because begin value is not exact', () => {
                expect(goesMonotonicallyBetweenValueAndValue([ 4.99999, 8, 8, 9, 11, 183 ].map(as.Point), as.Point(5), as.Point(200)))
                    .toBeFalsy()
            })

            it('with precision provided - true because begin value is off but within precision', () => {
                expect(goesMonotonicallyBetweenValueAndValue([ 4.99999, 8, 8, 9, 11, 183 ].map(as.Point), as.Point(5), as.Point(200), 2))
                    .toBeTruthy()
            })

            it('with precision provided - false because begin value is beyond precision', () => {
                expect(goesMonotonicallyBetweenValueAndValue([ 4.9, 8, 8, 9, 11, 183 ].map(as.Point), as.Point(5), as.Point(200), 2))
                    .toBeFalsy()
            })

            it('without precision provided, so it must be exact - false because end value is not exact', () => {
                expect(goesMonotonicallyBetweenValueAndValue([ 5, 8, 8, 9, 11, 200.00001 ].map(as.Point), as.Point(5), as.Point(200)))
                    .toBeFalsy()
            })

            it('with precision provided - true because end value is off but within precision', () => {
                expect(goesMonotonicallyBetweenValueAndValue([ 5, 8, 8, 9, 11, 200.00001 ].map(as.Point), as.Point(5), as.Point(200), 2))
                    .toBeTruthy()
            })

            it('with precision provided - false because end value is beyond precision', () => {
                expect(goesMonotonicallyBetweenValueAndValue([ 5, 8, 8, 9, 11, 200.1 ].map(as.Point), as.Point(5), as.Point(200), 2))
                    .toBeFalsy()
            })
        })

        describe('precision affects the monotonic change check', () => {
            it('true, because the deviation from monotonic motion is within the precision', () => {
                expect(goesMonotonicallyBetweenValueAndValue([ 0, 1, 2, 5.00001, 5, 8 ].map(as.Point), as.Point(0), as.Point(10), 2))
                    .toBeTruthy()
            })

            it('false, because the deviation from monotonic motion is not within the precision', () => {
                expect(goesMonotonicallyBetweenValueAndValue([ 0, 1, 2, 5.1, 5, 8 ].map(as.Point), as.Point(0), as.Point(10), 2))
                    .toBeFalsy()
            })
        })
    })

    describe('goes monotonically from value to value', () => {
        describe('reports true if the array elements are unified in either weakly decreasing or weakly increasing', () => {
            it('weakly increasing - including one step where it stays the same to prove the support for weak', () => {
                expect(goesMonotonicallyFromValueToValue([ 0, 1, 2, 5, 5, 10 ].map(as.Point), as.Point(0), as.Point(10)))
                    .toBeTruthy()
            })

            it('weakly decreasing - including one step where it stays the same to prove the support for weak', () => {
                expect(goesMonotonicallyFromValueToValue([ 10, 5, 5, 2, 1, 0 ].map(as.Point), as.Point(10), as.Point(0)))
                    .toBeTruthy()
            })

            it('staying the same - which could qualify either for weakly increasing or weakly decreasing', () => {
                expect(goesMonotonicallyFromValueToValue([ 3, 3, 3, 3, 3 ].map(as.Point), as.Point(3), as.Point(3)))
                    .toBeTruthy()
            })
        })

        it('reports false if the array elements are not unified in either weakly decreasing or weakly increasing', () => {
            expect(goesMonotonicallyFromValueToValue([ 0, 1, 2, 1, 10 ].map(as.Point), as.Point(0), as.Point(10)))
                .toBeFalsy()
        })

        describe('the array must go monotonically from the begin value to the end values', () => {
            it('false, because goes monotonically but does not respect begin value', () => {
                expect(goesMonotonicallyFromValueToValue([ 1, 2, 5, 5, 10 ].map(as.Point), as.Point(0), as.Point(10)))
                    .toBeFalsy()
            })

            it('false, because goes monotonically from one of the values to the other, but in the wrong direction', () => {
                expect(goesMonotonicallyFromValueToValue([ 5, 5, 8, 10 ].map(as.Point), as.Point(10), as.Point(5)))
                    .toBeFalsy()
            })

            it('true, because goes monotonically from the begin value to the end value', () => {
                expect(goesMonotonicallyFromValueToValue([ 0, 8, 8, 9, 10 ].map(as.Point), as.Point(0), as.Point(10)))
                    .toBeTruthy()
            })

            it('false, because matches the begin and end values but does not go monotonically', () => {
                expect(goesMonotonicallyFromValueToValue([ 0, 5, 8, 9, 3, 10 ].map(as.Point), as.Point(0), as.Point(10)))
                    .toBeFalsy()
            })
        })

        describe('precision affects the begin and end values', () => {
            it('without precision provided, so it must be exact - false because begin value is not exact', () => {
                expect(goesMonotonicallyFromValueToValue([ 5.00001, 8, 8, 9, 11, 200 ].map(as.Point), as.Point(5), as.Point(200)))
                    .toBeFalsy()
            })

            it('with precision provided - true because begin value is off but within precision', () => {
                expect(goesMonotonicallyFromValueToValue([ 5.00001, 8, 8, 9, 11, 200 ].map(as.Point), as.Point(5), as.Point(200), 2))
                    .toBeTruthy()
            })

            it('with precision provided - false because begin value is beyond precision', () => {
                expect(goesMonotonicallyFromValueToValue([ 5.1, 8, 8, 9, 11, 200 ].map(as.Point), as.Point(5), as.Point(200), 2))
                    .toBeFalsy()
            })

            it('without precision provided, so it must be exact - false because end value is not exact', () => {
                expect(goesMonotonicallyFromValueToValue([ 5, 8, 8, 9, 11, 199.99999 ].map(as.Point), as.Point(5), as.Point(200)))
                    .toBeFalsy()
            })

            it('with precision provided - true because end value is off but within precision', () => {
                expect(goesMonotonicallyFromValueToValue([ 5, 8, 8, 9, 11, 199.99999 ].map(as.Point), as.Point(5), as.Point(200), 2))
                    .toBeTruthy()
            })

            it('with precision provided - false because end value is beyond precision', () => {
                expect(goesMonotonicallyFromValueToValue([ 5, 8, 8, 9, 11, 199.9 ].map(as.Point), as.Point(5), as.Point(200), 2))
                    .toBeFalsy()
            })
        })

        describe('precision affects the monotonic change check', () => {
            it('true, because the deviation from monotonic motion is within the precision', () => {
                expect(goesMonotonicallyFromValueToValue([ 0, 1, 2, 5.00001, 5, 10 ].map(as.Point), as.Point(0), as.Point(10), 2))
                    .toBeTruthy()
            })

            it('false, because the deviation from monotonic motion is not within the precision', () => {
                expect(goesMonotonicallyFromValueToValue([ 0, 1, 2, 5.1, 5, 10 ].map(as.Point), as.Point(0), as.Point(10), 2))
                    .toBeFalsy()
            })
        })
    })
})
