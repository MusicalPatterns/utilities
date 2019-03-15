import { negative } from '../math'
import { apply, Cardinal, Ordinal, to } from '../nominal'

const lastElement: <ElementType>(array: ElementType[]) => ElementType =
    <ElementType>(array: ElementType[]): ElementType =>
        apply.Ordinal(array, indexOfLastElement(array))

const indexOfLastElement: <ElementType>(array: ElementType[]) => Ordinal =
    <ElementType>(array: ElementType[]): Ordinal =>
        to.Ordinal(apply.Translation(
            array.length,
            to.Translation(negative(1)),
        ))

const indexJustBeyondLastElement: <ElementType>(array: ElementType[]) => Ordinal =
    <ElementType>(array: ElementType[]): Ordinal =>
        to.Ordinal(array.length)

const totalElements: <ElementType>(array: ElementType[]) => Cardinal =
    <ElementType>(array: ElementType[]): Cardinal =>
        to.Cardinal(array.length)

export {
    indexOfLastElement,
    lastElement,
    indexJustBeyondLastElement,
    totalElements,
}
