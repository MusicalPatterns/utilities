import { negative } from '../math'
import { apply, Cardinal, from, Index, to, TRANSLATION_FROM_LENGTH_TO_FINAL_INDEX } from '../nominal'
import { isEmpty } from './isEmpty'

const finalElement: <ElementType>(array: ElementType[]) => ElementType =
    <ElementType>(array: ElementType[]): ElementType =>
        apply.Index(array, indexOfFinalElement(array) as unknown as Index<ElementType>)

const indexOfFinalElement: <ElementType>(array: ElementType[]) => Index =
    <ElementType>(array: ElementType[]): Index =>
        to.Index(apply.Translation(
            array.length,
            to.Translation(negative(1)),
        ))

const indexJustBeyondFinalElement: <ElementType>(array: ElementType[]) => Index =
    <ElementType>(array: ElementType[]): Index =>
        to.Index(array.length)

const totalElements: <ArrayType extends unknown[] | string>(array: ArrayType) => Cardinal =
    <ArrayType extends unknown[] | string>(array: ArrayType): Cardinal =>
        to.Cardinal(array.length)

const initialElement: <ElementType>(array: ElementType[]) => ElementType =
    <ElementType>(array: ElementType[]): ElementType => {
        if (isEmpty(array)) {
            throw new Error('an empty array has no initial element')
        }

        return apply.Index(array, 0 as unknown as Index<ElementType>)
    }

const finalIndexFromElementsTotal: (elementsTotal: Cardinal) => Index =
    (elementsTotal: Cardinal): Index =>
        to.Index(from.Cardinal(apply.Translation(elementsTotal, TRANSLATION_FROM_LENGTH_TO_FINAL_INDEX)))

const indexJustBeyondFinalElementFromElementsTotal: (elementsTotal: Cardinal) => Index =
    (elementsTotal: Cardinal): Index =>
        to.Index(from.Cardinal(elementsTotal))

export {
    indexOfFinalElement,
    finalElement,
    indexJustBeyondFinalElement,
    totalElements,
    initialElement,
    finalIndexFromElementsTotal,
    indexJustBeyondFinalElementFromElementsTotal,
}
