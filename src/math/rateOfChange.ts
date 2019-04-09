import { finalElement, initialElement, map, Maybe } from '../code'
import { indexOfFinalElement, INITIAL, Ordinal, Scalar, slice, Translation } from '../indexForTest'
import { apply, isCycle, NEXT, to } from '../nominal'
import { difference, quotient } from './typedOperations'

const computeDeltas: <NumericElementType extends Number = Number>(array: NumericElementType[]) => Translation[] =
    <NumericElementType extends Number = Number>(array: NumericElementType[]): Translation[] => {
        const deltas: Translation[] = map(
            slice(array, INITIAL, indexOfFinalElement(array)),
            (value: NumericElementType, index: Ordinal) => {
                const nextValue: NumericElementType = apply.Ordinal(array, apply.Translation(index, NEXT))

                return to.Translation(difference(nextValue, value))
            },
        )

        if (isCycle(array)) {
            deltas.push(to.Translation(difference(
                initialElement(array) as number,
                finalElement(array) as number,
            )))
        }

        return deltas
    }

const computeIntervals:
    <NumericElementType extends Number = Number>(array: NumericElementType[]) => Array<Maybe<Scalar>> =
    <NumericElementType extends Number = Number>(array: NumericElementType[]): Array<Maybe<Scalar>> => {
        const intervals: Array<Maybe<Scalar>> = map(
            slice(array, INITIAL, indexOfFinalElement(array)),
            (value: NumericElementType, index: Ordinal) => {
                const nextValue: NumericElementType = apply.Ordinal(array, apply.Translation(index, NEXT))

                if (value as unknown as number === 0) {
                    if (nextValue as unknown as number === 0) {
                        return to.Scalar(0)
                    }

                    return undefined
                }

                return to.Scalar(quotient(nextValue, value))
            },
        )

        if (isCycle(array)) {
            intervals.push(to.Scalar(quotient(
                initialElement(array) as number,
                finalElement(array) as number,
            )))
        }

        return intervals
    }

export {
    computeDeltas,
    computeIntervals,
}
