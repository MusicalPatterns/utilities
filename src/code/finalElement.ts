import { negative } from '../math'
import { as, Cardinal, COUNT_FROM_LENGTH_TO_FINAL_INDEX, Cycle, notAs, Ordinal, use } from '../nominal'
import { isEmpty } from './isEmpty'
import { IndexOf } from './types'

const finalElement: <ElementType>(array: ElementType[]) => ElementType =
    <ElementType>(array: ElementType[]): ElementType =>
        use.Ordinal(array, indexOfFinalElement(array) as unknown as Ordinal<ElementType[]>)

const indexOfFinalElement: IndexOf =
    <ElementType>(array: ElementType[]): Ordinal<ElementType[]> & Ordinal<Cycle<ElementType>> =>
        as.Ordinal(use.Cardinal(
            array.length,
            as.Cardinal(negative(1)),
        )) as unknown as Ordinal<ElementType[]> & Ordinal<Cycle<ElementType>>

const indexJustBeyondFinalElement: IndexOf =
    <ElementType>(array: ElementType[]): Ordinal<ElementType[]> & Ordinal<Cycle<ElementType>> =>
        as.Ordinal(array.length) as unknown as Ordinal<ElementType[]> & Ordinal<Cycle<ElementType>>

const length: <ElementType>(array: ElementType[]) => Cardinal<ElementType[]> =
    <ElementType>(array: ElementType[]): Cardinal<ElementType[]> =>
        as.Cardinal<ElementType[]>(array.length)

const initialElement: <ElementType>(array: ElementType[]) => ElementType =
    <ElementType>(array: ElementType[]): ElementType => {
        if (isEmpty(array)) {
            throw new Error('an empty array has no initial element')
        }

        return use.Ordinal(array, 0 as unknown as Ordinal<ElementType[]>)
    }

const finalIndexFromElementsTotal: <ElementType>(elementsTotal: Cardinal<ElementType[]>) => Ordinal<ElementType[]> =
    <ElementType>(elementsTotal: Cardinal<ElementType[]>): Ordinal<ElementType[]> =>
        as.Ordinal<ElementType[]>(notAs.Cardinal(use.Cardinal(elementsTotal, COUNT_FROM_LENGTH_TO_FINAL_INDEX)))

const indexJustBeyondFinalElementFromElementsTotal:
    <ElementType>(elementsTotal: Cardinal<ElementType[]>) => Ordinal<ElementType[]> =
    <ElementType>(elementsTotal: Cardinal<ElementType[]>): Ordinal<ElementType[]> =>
        as.Ordinal<ElementType[]>(notAs.Cardinal(elementsTotal))

export {
    indexOfFinalElement,
    finalElement,
    indexJustBeyondFinalElement,
    length,
    initialElement,
    finalIndexFromElementsTotal,
    indexJustBeyondFinalElementFromElementsTotal,
}
