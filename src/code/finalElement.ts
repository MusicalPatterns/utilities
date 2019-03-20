import { negative } from '../math'
import { apply, Cardinal, Ordinal, to } from '../nominal'

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

export {
    indexOfFinalElement,
    finalElement,
    indexJustBeyondFinalElement,
    totalElements,
}
