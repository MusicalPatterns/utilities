import { negative } from '../math'
import { apply, Cardinal, Cycle, from, Ordinal, to } from '../nominal'

const lastElement: <ArrayOrString extends string | Cycle<ElementType> | ElementType[], ElementType>(
    arrayOrString: ArrayOrString,
) => ElementType | string =
    <ArrayOrString extends string | Cycle<ElementType> | ElementType[], ElementType>(
        arrayOrString: ArrayOrString,
    ): ElementType | string => {
        if (typeof arrayOrString === 'string') {
            return arrayOrString[ from.Ordinal(indexOfLastElement(arrayOrString)) ]
        }

        if (arrayOrString instanceof Array) {
            return apply.Ordinal(arrayOrString, indexOfLastElement(arrayOrString))
        }

        throw new Error('could not figure out the last element')
    }

const indexOfLastElement: <ArrayOrString extends string | Cycle<ElementType> | ElementType[], ElementType>(
    arrayOrString: ArrayOrString,
) => Ordinal =
    <ArrayOrString extends string | Cycle<ElementType> | ElementType[], ElementType>(
        arrayOrString: ArrayOrString,
    ): Ordinal =>
        to.Ordinal(apply.Translation(
            arrayOrString.length,
            to.Translation(negative(1)),
        ))

const indexJustBeyondLastElement: <ArrayOrString extends string | Cycle<ElementType> | ElementType[], ElementType>(
    arrayOrString: ArrayOrString,
) => Ordinal =
    <ArrayOrString extends string | Cycle<ElementType> | ElementType[], ElementType>(
        arrayOrString: ArrayOrString,
    ): Ordinal =>
        to.Ordinal(arrayOrString.length)

const totalElements: <ElementType>(array: ElementType[]) => Cardinal =
    <ElementType>(array: ElementType[]): Cardinal =>
        to.Cardinal(array.length)

export {
    indexOfLastElement,
    indexJustBeyondLastElement,
    lastElement,
    totalElements,
}
