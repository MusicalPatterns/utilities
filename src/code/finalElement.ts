import { negative } from '../math'
import {
    ArrayedOrStringType,
    ArrayedType,
    as,
    Cardinal,
    COUNT_FROM_LENGTH_TO_FINAL_INDEX,
    Cycle,
    Ordinal,
    use,
} from '../nominal'
import { isEmpty } from './isEmpty'

const finalElement: <ElementType>(array: ElementType[]) => ElementType =
    <ElementType>(array: ElementType[]): ElementType =>
        use.Ordinal(array, indexOfFinalElement(array) as unknown as Ordinal<ElementType[]>)

const indexOfFinalElement: {
    <ElementType>(array: Cycle<ElementType>): Ordinal<Cycle<ElementType>>,
    <ArrayType extends ArrayedType>(array: ArrayType): Ordinal<ArrayType>,
} =
    <ElementType = Number, ArrayType extends ArrayedType<ElementType> = ElementType[]>(
        array: ElementType[],
    ): Ordinal<ElementType[]> & Ordinal<Cycle<ElementType>> =>
        as.Ordinal(as.number(use.Cardinal(
            computeLength(array),
            as.Cardinal<Cardinal<ArrayType>>(negative(1)),
        ))) as unknown as Ordinal<ArrayType> & Ordinal<Cycle<ElementType>>

const indexJustBeyondFinalElement: {
    <ElementType>(array: Cycle<ElementType>): Ordinal<Cycle<ElementType>>,
    <ArrayType extends ArrayedOrStringType>(array: ArrayType): Ordinal<ArrayType>,
} =
    <ElementType>(array: ElementType[]): Ordinal<ElementType[]> & Ordinal<Cycle<ElementType>> =>
        computeLength(array) as unknown as Ordinal<ElementType[]> & Ordinal<Cycle<ElementType>>

const computeLength: <ArrayType extends ArrayedOrStringType>(array: ArrayType) => Cardinal<ArrayType> =
    <ArrayType extends ArrayedOrStringType>(array: ArrayType): Cardinal<ArrayType> =>
        as.Cardinal<ArrayType>(array.length)

const initialElement: <ElementType>(array: ElementType[]) => ElementType =
    <ElementType>(array: ElementType[]): ElementType => {
        if (isEmpty(array)) {
            throw new Error('an empty array has no initial element')
        }

        return use.Ordinal(array, 0 as unknown as Ordinal<ElementType[]>)
    }

const finalIndexFromElementsTotal: <ElementType, ArrayType extends ArrayedOrStringType<ElementType> = ElementType[]>(
    elementsTotal: Cardinal<ArrayType>,
) => Ordinal<ArrayType> =
    <ElementType, ArrayType extends ArrayedOrStringType<ElementType> = ElementType[]>(
        elementsTotal: Cardinal<ArrayType>,
    ): Ordinal<ArrayType> =>
        as.Ordinal<ArrayType>(as.number(use.Cardinal(elementsTotal, COUNT_FROM_LENGTH_TO_FINAL_INDEX)))

export {
    indexOfFinalElement,
    finalElement,
    indexJustBeyondFinalElement,
    computeLength,
    initialElement,
    finalIndexFromElementsTotal,
}
