// tslint:disable ban-types

import { forEach, indexOfFinalElement, isUndefined, Maybe } from '../code'
import { difference, NEXT } from '../math'
import { apply, Ordinal, to, Translation } from '../nominal'
import { VERY_HIGH_PRECISION } from './constants'

const testConstantDelta: <NumericElementType extends Number = Number>(
    array: NumericElementType[],
    manualExpectedDelta?: Translation,
) => void =
    <NumericElementType extends Number = Number>(
        array: NumericElementType[],
        manualExpectedDelta?: Translation,
    ): void => {
        let expectedDelta: Maybe<Translation> = manualExpectedDelta
        forEach(array, (value: NumericElementType, index: Ordinal, self: NumericElementType[]) => {
            if (index === indexOfFinalElement(array)) {
                return
            }

            const nextIndex: Ordinal = apply.Translation(index, NEXT)
            const nextValue: NumericElementType = apply.Ordinal(self, nextIndex)
            const actualDelta: Translation = to.Translation(difference(nextValue, value))

            if (isUndefined(expectedDelta)) {
                expectedDelta = actualDelta
            }
            else {
                expect(actualDelta)
                    .toBeCloseTo(
                        manualExpectedDelta as unknown as number,
                        VERY_HIGH_PRECISION,
                        `Delta was not constant for array ${array}: delta between index \
${index} and ${nextIndex} was ${actualDelta} instead of ${manualExpectedDelta}.`,
                    )
            }
        })
    }

export {
    testConstantDelta,
}
