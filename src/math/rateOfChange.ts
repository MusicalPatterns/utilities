import { finalElement, initialElement, map, Maybe } from '../code'
import { Index, indexOfFinalElement, INITIAL, insteadOf, Scalar, slice, Translation } from '../indexForTest'
import { apply, isCycle, NEXT } from '../nominal'
import { delta, interval } from './typedOperations'

const computeDeltas: <NumericElementType extends Number>(
    array: NumericElementType[],
) => Array<Translation<NumericElementType>> =
    <NumericElementType extends Number>(
        array: NumericElementType[],
    ): Array<Translation<NumericElementType>> => {
        const deltas: Array<Translation<NumericElementType>> = map(
            slice(array, INITIAL as unknown as Index<NumericElementType>, indexOfFinalElement(array)),
            (value: NumericElementType, index: Index<NumericElementType>) => {
                const nextValue: NumericElementType = apply.Index(
                    array,
                    apply.Translation(
                        index,
                        insteadOf<Translation, Index<NumericElementType>>(NEXT),
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
            slice(array, INITIAL as unknown as Index<NumericElementType>, indexOfFinalElement(array)),
            (value: NumericElementType, index: Index<NumericElementType>): Maybe<Scalar<NumericElementType>> => {
                const nextValue: NumericElementType = apply.Index(
                    array,
                    apply.Translation(
                        index,
                        insteadOf<Translation, Index<NumericElementType>>(NEXT),
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
