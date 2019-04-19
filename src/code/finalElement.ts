import { negative } from '../math'
import { apply, Cardinal, from, Ordinal, to, TRANSLATION_FROM_LENGTH_TO_FINAL_INDEX } from '../nominal'
import { isEmpty } from './isEmpty'

const finalElement: <ElementType>(array: ElementType[]) => ElementType =
    <ElementType>(array: ElementType[]): ElementType =>
        apply.Ordinal(array, indexOfFinalElement(array) as unknown as Ordinal<ElementType>)

const indexOfFinalElement: <ElementType>(array: ElementType[]) => Ordinal<ElementType> =
    <ElementType>(array: ElementType[]): Ordinal<ElementType> =>
        to.Ordinal(apply.Translation(
            array.length,
            to.Translation(negative(1)),
        )) as unknown as Ordinal<ElementType>

const indexJustBeyondFinalElement: <ElementType>(array: ElementType[]) => Ordinal<ElementType> =
    <ElementType>(array: ElementType[]): Ordinal<ElementType> =>
        to.Ordinal(array.length) as unknown as Ordinal<ElementType>

const length: <ElementType>(array: ElementType[]) => Cardinal<ElementType> =
    <ElementType>(array: ElementType[]): Cardinal<ElementType> =>
        to.Cardinal<ElementType>(array.length)

const initialElement: <ElementType>(array: ElementType[]) => ElementType =
    <ElementType>(array: ElementType[]): ElementType => {
        if (isEmpty(array)) {
            throw new Error('an empty array has no initial element')
        }

        return apply.Ordinal(array, 0 as unknown as Ordinal<ElementType>)
    }

const finalIndexFromElementsTotal: <ElementType>(elementsTotal: Cardinal<ElementType>) => Ordinal<ElementType> =
    <ElementType>(elementsTotal: Cardinal<ElementType>): Ordinal<ElementType> =>
        to.Ordinal<ElementType>(from.Cardinal(apply.Translation(elementsTotal, TRANSLATION_FROM_LENGTH_TO_FINAL_INDEX)))

const indexJustBeyondFinalElementFromElementsTotal:
    <ElementType>(elementsTotal: Cardinal<ElementType>) => Ordinal<ElementType> =
    <ElementType>(elementsTotal: Cardinal<ElementType>): Ordinal<ElementType> =>
        to.Ordinal<ElementType>(from.Cardinal(elementsTotal))

export {
    indexOfFinalElement,
    finalElement,
    indexJustBeyondFinalElement,
    length,
    initialElement,
    finalIndexFromElementsTotal,
    indexJustBeyondFinalElementFromElementsTotal,
}
