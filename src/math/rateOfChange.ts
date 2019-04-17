import { finalElement, initialElement, map, Maybe } from '../code'
import { indexOfFinalElement, INITIAL, insteadOf, Ordinal, Scalar, slice, Translation } from '../indexForTest'
import { apply, isCycle, NEXT } from '../nominal'
import { delta, interval } from './typedOperations'

const computeDeltas: <NumericElementType extends Number>(
    array: NumericElementType[],
) => Array<Translation<NumericElementType>> =
    <NumericElementType extends Number>(
        array: NumericElementType[],
    ): Array<Translation<NumericElementType>> => {
        const deltas: Array<Translation<NumericElementType>> = map(
            slice(array, INITIAL as unknown as Ordinal<NumericElementType>, indexOfFinalElement(array)),
            (value: NumericElementType, index: Ordinal<NumericElementType>) => {
                const nextValue: NumericElementType = apply.Ordinal(
                    array,
                    apply.Translation(
                        index,
                        insteadOf<Translation, Ordinal<NumericElementType>>(NEXT),
                    ),
                )

                return delta(nextValue, value)
            },
        )

        if (isCycle(array)) {
            deltas.push(delta(
                initialElement(array) as NumericElementType,
                finalElement(array) as NumericElementType,
            ))
        }

        return deltas
    }

const computeIntervals: <NumericElementType extends Number>(
    array: NumericElementType[],
) => Array<Maybe<Scalar<NumericElementType>>> =
    <NumericElementType extends Number>(
        array: NumericElementType[],
    ): Array<Maybe<Scalar<NumericElementType>>> => {
        const intervals: Array<Maybe<Scalar<NumericElementType>>> = map(
            slice(array, INITIAL as unknown as Ordinal<NumericElementType>, indexOfFinalElement(array)),
            (value: NumericElementType, index: Ordinal<NumericElementType>): Maybe<Scalar<NumericElementType>> => {
                const nextValue: NumericElementType = apply.Ordinal(
                    array,
                    apply.Translation(
                        index,
                        insteadOf<Translation, Ordinal<NumericElementType>>(NEXT),
                    ),
                )

                if (value as unknown as number === 0) {
                    if (nextValue as unknown as number === 0) {
                        return 0 as unknown as Scalar<NumericElementType>
                    }

                    return undefined
                }

                return interval(nextValue, value)
            },
        )

        if (isCycle(array)) {
            intervals.push(interval(
                initialElement(array) as NumericElementType,
                finalElement(array) as NumericElementType,
            ))
        }

        return intervals
    }

export {
    computeDeltas,
    computeIntervals,
}
