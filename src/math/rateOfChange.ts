import { finalElement, initialElement, map, Maybe } from '../code'
import {
    difference,
    indexOfFinalElement,
    INITIAL,
    Ordinal,
    quotient,
    Scalar,
    slice,
    Translation,
} from '../indexForTest'
import { Denature, INCREMENT, isCycle, Point, use } from '../nominal'

const computeDeltas: <NumericElementType extends Number>(
    array: Array<Point<NumericElementType>>,
) => Array<Translation<NumericElementType>> =
    <NumericElementType extends Number>(
        array: Array<Point<NumericElementType>>,
    ): Array<Translation<NumericElementType>> => {
        const deltas: Array<Translation<NumericElementType>> = map(
            slice(array, INITIAL, indexOfFinalElement(array)),
            (
                value: Point<NumericElementType>,
                index: Ordinal<Array<Point<NumericElementType>>>,
            ): Translation<NumericElementType> => {
                const nextValue: Point<NumericElementType> = use.Ordinal(
                    array,
                    use.Cardinal(index, INCREMENT),
                )

                return difference(nextValue, value) as Translation<NumericElementType>
            },
        )

        if (isCycle(array)) {
            deltas.push(difference(
                initialElement(array) as Point<NumericElementType>,
                finalElement(array) as Point<NumericElementType>,
            ) as Translation<NumericElementType>)
        }

        return deltas
    }

const computeIntervals: <NumericElementType extends Number>(
    array: Array<Point<NumericElementType>>,
) => Array<Maybe<Scalar<Denature<NumericElementType>>>> =
    <NumericElementType extends Number>(
        array: Array<Point<NumericElementType>>,
    ): Array<Maybe<Scalar<Denature<NumericElementType>>>> => {
        const intervals: Array<Maybe<Scalar<Denature<NumericElementType>>>> = map(
            slice(array, INITIAL, indexOfFinalElement(array)),
            (
                value: Point<NumericElementType>,
                index: Ordinal<Array<Point<NumericElementType>>>,
            ): Maybe<Scalar<Denature<NumericElementType>>> => {
                const nextValue: Point<NumericElementType> = use.Ordinal(
                    array,
                    use.Cardinal(index, INCREMENT),
                )

                if (value as unknown as number === 0) {
                    if (nextValue as unknown as number === 0) {
                        return 0 as unknown as Scalar<Denature<NumericElementType>>
                    }

                    return undefined
                }

                return quotient(nextValue, value)
            },
        )

        if (isCycle(array)) {
            intervals.push(quotient(
                initialElement(array) as Point<NumericElementType>,
                finalElement(array) as Point<NumericElementType>,
            ) as Maybe<Scalar<Denature<NumericElementType>>>)
        }

        return intervals
    }

export {
    computeDeltas,
    computeIntervals,
}
