import { finalElement, initialElement, map, Maybe } from '../code'
import { Index, indexOfFinalElement, INITIAL, Ordinal, Scalar, slice, Translation } from '../indexForTest'
import { apply, isCycle, NEXT, to } from '../nominal'
import { difference, quotient } from './typedOperations'

const computeDeltas: <NumericElementType extends Number = Number>(
    array: NumericElementType[],
) => Array<Translation<NumericElementType>> =
    <NumericElementType extends Number = Number>(
        array: NumericElementType[],
    ): Array<Translation<NumericElementType>> => {
        const deltas: Array<Translation<NumericElementType>> = map(
            slice(array, INITIAL, indexOfFinalElement(array)),
            (value: NumericElementType, index: Ordinal) => {
                const nextValue: NumericElementType = apply.Index(
                    array,
                    to.Index(apply.Translation(index, NEXT)) as Index<NumericElementType>,
                )

                return difference(nextValue, value)
            },
        )

        if (isCycle(array)) {
            deltas.push(difference(
                initialElement(array) as NumericElementType,
                finalElement(array) as NumericElementType,
            ))
        }

        return deltas
    }

const computeIntervals: <NumericElementType extends Number = Number>(
    array: NumericElementType[],
) => Array<Maybe<Scalar<NumericElementType>>> =
    <NumericElementType extends Number = Number>(
        array: NumericElementType[],
    ): Array<Maybe<Scalar<NumericElementType>>> => {
        const intervals: Array<Maybe<Scalar<NumericElementType>>> = map(
            slice(array, INITIAL, indexOfFinalElement(array)),
            (value: NumericElementType, index: Ordinal): Maybe<Scalar<NumericElementType>> => {
                const nextValue: NumericElementType = apply.Index(
                    array,
                    to.Index(apply.Translation(index, NEXT)) as Index<NumericElementType>,
                )

                if (value as unknown as number === 0) {
                    if (nextValue as unknown as number === 0) {
                        return to.Scalar(0 as unknown as NumericElementType)
                    }

                    return undefined
                }

                return quotient(nextValue, value)
            },
        )

        if (isCycle(array)) {
            intervals.push(quotient(
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
