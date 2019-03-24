import { negative } from '../math'
import { apply, Cardinal, from, Ordinal, to } from '../nominal'
import { INITIAL, TRANSLATION_FROM_LENGTH_TO_FINAL_INDEX } from './constants'

const finalElement: <ElementType>(array: ElementType[]) => ElementType =
    <ElementType>(array: ElementType[]): ElementType =>
        apply.Ordinal(array, indexOfFinalElement(array))

const indexOfFinalElement: <ElementType>(array: ElementType[]) => Ordinal =
    <ElementType>(array: ElementType[]): Ordinal =>
        to.Ordinal(apply.Translation(
            array.length,
            to.Translation(negative(1)),
        ))

const indexJustBeyondFinalElement: <ElementType>(array: ElementType[]) => Ordinal =
    <ElementType>(array: ElementType[]): Ordinal =>
        to.Ordinal(array.length)

const totalElements: <ArrayType extends unknown[] | string>(array: ArrayType) => Cardinal =
    <ArrayType extends unknown[] | string>(array: ArrayType): Cardinal =>
        to.Cardinal(array.length)

const initialElement: <ElementType>(array: ElementType[]) => ElementType =
    <ElementType>(array: ElementType[]): ElementType =>
        apply.Ordinal(array, INITIAL)

const finalIndexFromElementsTotal: (elementsTotal: Cardinal) => Ordinal =
    (elementsTotal: Cardinal): Ordinal =>
        to.Ordinal(from.Cardinal(apply.Translation(elementsTotal, TRANSLATION_FROM_LENGTH_TO_FINAL_INDEX)))

export {
    indexOfFinalElement,
    finalElement,
    indexJustBeyondFinalElement,
    totalElements,
    initialElement,
    finalIndexFromElementsTotal,
}
