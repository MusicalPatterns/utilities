import { finalElement, indexOfFinalElement, initialElement, map, Maybe, slice } from '../code'
import { Delta, INCREMENT, INITIAL, Interval, isCycle, Ordinal, Point, Scalar, UnwholeVersion, use } from '../nominal'
import { difference, quotient } from './typedOperations'

const computeDeltas: <NumericElementType extends Number>(
    array: Array<Point<NumericElementType>>,
) => Array<Delta<NumericElementType>> =
    <NumericElementType extends Number>(
        array: Array<Point<NumericElementType>>,
    ): Array<Delta<NumericElementType>> => {
        const deltas: Array<Delta<NumericElementType>> = map(
            slice(array, INITIAL, indexOfFinalElement(array)),
            (
                value: Point<NumericElementType>,
                index: Ordinal<Array<Point<NumericElementType>>>,
            ): Delta<NumericElementType> => {
                const nextValue: Point<NumericElementType> = use.Ordinal(
                    array,
                    use.Cardinal(index, INCREMENT),
                )

                return difference(nextValue, value) as Delta<NumericElementType>
            },
        )

        if (isCycle(array)) {
            deltas.push(difference(
                initialElement(array) as Point<NumericElementType>,
                finalElement(array) as Point<NumericElementType>,
            ) as Delta<NumericElementType>)
        }

        return deltas
    }

const computeIntervals: <NumericElementType extends Number>(
    array: Array<Point<NumericElementType>>,
) => Array<Maybe<Interval<UnwholeVersion<NumericElementType>>>> =
    <NumericElementType extends Number>(
        array: Array<Point<NumericElementType>>,
    ): Array<Maybe<Interval<UnwholeVersion<NumericElementType>>>> => {
        const intervals: Array<Maybe<Interval<UnwholeVersion<NumericElementType>>>> = map(
            slice(array, INITIAL, indexOfFinalElement(array)),
            (
                value: Point<NumericElementType>,
                index: Ordinal<Array<Point<NumericElementType>>>,
            ): Maybe<Interval<UnwholeVersion<NumericElementType>>> => {
                const nextValue: Point<NumericElementType> = use.Ordinal(
                    array,
                    use.Cardinal(index, INCREMENT),
                )

                if (value as unknown as number === 0) {
                    if (nextValue as unknown as number === 0) {
                        return 0 as unknown as Scalar<Point<UnwholeVersion<NumericElementType>>>
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
            ) as Maybe<Interval<UnwholeVersion<NumericElementType>>>)
        }

        return intervals
    }

export {
    computeDeltas,
    computeIntervals,
}
