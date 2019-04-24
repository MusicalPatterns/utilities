import { negative } from '../math'
import { ArrayOverload, as, Cardinal, COUNT_FROM_LENGTH_TO_FINAL_INDEX, Cycle, notAs, Ordinal, use } from '../nominal'
import { isEmpty } from './isEmpty'

const finalElement: <ElementType>(array: ElementType[]) => ElementType =
    <ElementType>(array: ElementType[]): ElementType =>
        use.Ordinal(array, indexOfFinalElement(array) as unknown as Ordinal<ElementType[]>)

const indexOfFinalElement: {
    <ElementType>(array: Cycle<ElementType>): Ordinal<Cycle<ElementType>>,
    <ElementType, ArrayType extends ArrayOverload & ElementType[] = ElementType[]>(
        array: ArrayType,
    ): Ordinal<ArrayType>,
} =
    <ElementType>(array: ElementType[]): Ordinal<ElementType[]> & Ordinal<Cycle<ElementType>> =>
        as.Ordinal(use.Cardinal(
            array.length,
            as.Cardinal(negative(1)),
        )) as unknown as Ordinal<ElementType[]> & Ordinal<Cycle<ElementType>>

const indexJustBeyondFinalElement: {
    <ElementType>(array: Cycle<ElementType>): Ordinal<Cycle<ElementType>>,
    <ElementType, ArrayType extends ArrayOverload & ElementType[] = ElementType[]>(
        array: ArrayType,
    ): Ordinal<ArrayType>,
} =
    <ElementType>(array: ElementType[]): Ordinal<ElementType[]> & Ordinal<Cycle<ElementType>> =>
        as.Ordinal(array.length) as unknown as Ordinal<ElementType[]> & Ordinal<Cycle<ElementType>>

const length: <ArrayType extends ArrayOverload>(array: ArrayType) => Cardinal<ArrayType> =
    <ArrayType extends ArrayOverload>(array: ArrayType): Cardinal<ArrayType> =>
        as.Cardinal<ArrayType>(array.length)

const initialElement: <ElementType>(array: ElementType[]) => ElementType =
    <ElementType>(array: ElementType[]): ElementType => {
        if (isEmpty(array)) {
            throw new Error('an empty array has no initial element')
        }

        return use.Ordinal(array, 0 as unknown as Ordinal<ElementType[]>)
    }

const finalIndexFromElementsTotal:
    <ArrayType extends ArrayOverload>(elementsTotal: Cardinal<ArrayType>) => Ordinal<ArrayType> =
    <ArrayType extends ArrayOverload>(elementsTotal: Cardinal<ArrayType>): Ordinal<ArrayType> =>
        as.Ordinal<ArrayType>(notAs.Cardinal(use.Cardinal(elementsTotal, COUNT_FROM_LENGTH_TO_FINAL_INDEX)))

const indexJustBeyondFinalElementFromElementsTotal:
    <ArrayType extends ArrayOverload>(elementsTotal: Cardinal<ArrayType>) => Ordinal<ArrayType> =
    <ArrayType extends ArrayOverload>(elementsTotal: Cardinal<ArrayType>): Ordinal<ArrayType> =>
        as.Ordinal<ArrayType>(notAs.Cardinal(elementsTotal))

export {
    indexOfFinalElement,
    finalElement,
    indexJustBeyondFinalElement,
    length,
    initialElement,
    finalIndexFromElementsTotal,
    indexJustBeyondFinalElementFromElementsTotal,
}
