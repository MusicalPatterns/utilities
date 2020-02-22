import { ArrayedOrStringType, as, Cardinal, Cycle, use } from '../nominal'
import { allElementsEqual } from './allElementsEqual'
import { deepEqual } from './deepEqual'
import { exampleElement } from './exampleElement'
import { computeLength } from './finalElement'
import { range } from './range'
import { every } from './typedIterators'

const areCyclicalTranslations: <ElementType, ArrayType extends ArrayedOrStringType<ElementType> = ElementType[]>(
    ...arrays: ArrayType[]
) => boolean =
    <ElementType, ArrayType extends ArrayedOrStringType<ElementType> = ElementType[]>(
        ...arrays: ArrayType[]
    ): boolean => {
        if (!allElementsEqual(arrays.map(computeLength))) {
            return false
        }

        const comparisonCycle: Cycle<ElementType> = as.Cycle(exampleElement<ArrayType>(arrays))

        return every(
            arrays,
            (array: ArrayType): boolean => {
                let result: boolean = false

                range(computeLength(array))
                    .map((cardinal: number): Cardinal<Cycle<ElementType>> => as.Cardinal<Cycle<ElementType>>(cardinal))
                    .forEach((cardinal: Cardinal<Cycle<ElementType>>): void => {
                        const asCycle: Cycle<ElementType> = as.Cycle(array)
                        const cycled: Cycle<ElementType> = use.Cardinal(asCycle, cardinal)

                        if (deepEqual(cycled, comparisonCycle)) {
                            result = true
                        }
                    })

                return result
            },
        )
    }

export {
    areCyclicalTranslations,
}
