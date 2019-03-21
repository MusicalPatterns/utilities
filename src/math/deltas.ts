// tslint:disable ban-types

import { finalElement, initialElement, map } from '../code'
import { indexOfFinalElement, INITIAL, Ordinal, slice, Translation } from '../indexForTest'
import { apply, isCycle, to } from '../nominal'
import { NEXT } from './constants'
import { difference } from './typedOperations'

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

export {
    computeDeltas,
}
