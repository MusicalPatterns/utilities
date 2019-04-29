import { negative } from '../math'
import { ArrayedType, as, Cardinal, COUNT_FROM_LENGTH_TO_FINAL_INDEX, Cycle, Ordinal, use } from '../nominal'
import { isEmpty } from './isEmpty'

const finalElement: <ElementType>(array: ElementType[]) => ElementType =
    <ElementType>(array: ElementType[]): ElementType =>
        use.Ordinal(array, indexOfFinalElement(array) as unknown as Ordinal<ElementType[]>)

const indexOfFinalElement: {
    <ElementType>(array: Cycle<ElementType>): Ordinal<Cycle<ElementType>>,
    <ElementType, ArrayType extends ArrayedType & ElementType[] = ElementType[]>(
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
    <ElementType, ArrayType extends ArrayedType & ElementType[] = ElementType[]>(
        array: ArrayType,
    ): Ordinal<ArrayType>,
} =
    <ElementType>(array: ElementType[]): Ordinal<ElementType[]> & Ordinal<Cycle<ElementType>> =>
        as.Ordinal(array.length) as unknown as Ordinal<ElementType[]> & Ordinal<Cycle<ElementType>>

const length: <ArrayType extends ArrayedType>(array: ArrayType) => Cardinal<ArrayType> =
    <ArrayType extends ArrayedType>(array: ArrayType): Cardinal<ArrayType> =>
        as.Cardinal<ArrayType>(array.length)

const initialElement: <ElementType>(array: ElementType[]) => ElementType =
    <ElementType>(array: ElementType[]): ElementType => {
        if (isEmpty(array)) {
            throw new Error('an empty array has no initial element')
        }

        return use.Ordinal(array, 0 as unknown as Ordinal<ElementType[]>)
    }

const finalIndexFromElementsTotal:
    <ArrayType extends ArrayedType>(elementsTotal: Cardinal<ArrayType>) => Ordinal<ArrayType> =
    <ArrayType extends ArrayedType>(elementsTotal: Cardinal<ArrayType>): Ordinal<ArrayType> =>
        as.Ordinal<ArrayType>(as.number(use.Cardinal(elementsTotal, COUNT_FROM_LENGTH_TO_FINAL_INDEX)))

export {
    indexOfFinalElement,
    finalElement,
    indexJustBeyondFinalElement,
    length,
    initialElement,
    finalIndexFromElementsTotal,
}
