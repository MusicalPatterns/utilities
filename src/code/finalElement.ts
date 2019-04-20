import { negative } from '../math'
import { as, Cardinal, notAs, Ordinal, TRANSLATION_FROM_LENGTH_TO_FINAL_INDEX, use } from '../nominal'
import { isEmpty } from './isEmpty'

const finalElement: <ElementType>(array: ElementType[]) => ElementType =
    <ElementType>(array: ElementType[]): ElementType =>
        use.Ordinal(array, indexOfFinalElement(array) as unknown as Ordinal<ElementType>)

const indexOfFinalElement: <ElementType>(array: ElementType[]) => Ordinal<ElementType> =
    <ElementType>(array: ElementType[]): Ordinal<ElementType> =>
        as.Ordinal(use.Translation(
            array.length,
            as.Translation(negative(1)),
        )) as unknown as Ordinal<ElementType>

const indexJustBeyondFinalElement: <ElementType>(array: ElementType[]) => Ordinal<ElementType> =
    <ElementType>(array: ElementType[]): Ordinal<ElementType> =>
        as.Ordinal(array.length) as unknown as Ordinal<ElementType>

const length: <ElementType>(array: ElementType[]) => Cardinal<ElementType> =
    <ElementType>(array: ElementType[]): Cardinal<ElementType> =>
        as.Cardinal<ElementType>(array.length)

const initialElement: <ElementType>(array: ElementType[]) => ElementType =
    <ElementType>(array: ElementType[]): ElementType => {
        if (isEmpty(array)) {
            throw new Error('an empty array has no initial element')
        }

        return use.Ordinal(array, 0 as unknown as Ordinal<ElementType>)
    }

const finalIndexFromElementsTotal: <ElementType>(elementsTotal: Cardinal<ElementType>) => Ordinal<ElementType> =
    <ElementType>(elementsTotal: Cardinal<ElementType>): Ordinal<ElementType> =>
        as.Ordinal<ElementType>(notAs.Cardinal(use.Translation(elementsTotal, TRANSLATION_FROM_LENGTH_TO_FINAL_INDEX)))

const indexJustBeyondFinalElementFromElementsTotal:
    <ElementType>(elementsTotal: Cardinal<ElementType>) => Ordinal<ElementType> =
    <ElementType>(elementsTotal: Cardinal<ElementType>): Ordinal<ElementType> =>
        as.Ordinal<ElementType>(notAs.Cardinal(elementsTotal))

export {
    indexOfFinalElement,
    finalElement,
    indexJustBeyondFinalElement,
    length,
    initialElement,
    finalIndexFromElementsTotal,
    indexJustBeyondFinalElementFromElementsTotal,
}
