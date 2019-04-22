import { dividesEvenly, isEven, isOdd } from '../math'
import { as, Multiple, Ordinal } from '../nominal'
import { slice } from './typedIterators'

const evenElements: <ElementType>(array: ElementType[]) => ElementType[] =
    <ElementType>(array: ElementType[]): ElementType[] =>
        array.filter((element: ElementType, index: number) =>
            isEven(index),
        )

const oddElements: <ElementType>(array: ElementType[]) => ElementType[] =
    <ElementType>(array: ElementType[]): ElementType[] =>
        array.filter((element: ElementType, index: number) =>
            isOdd(index),
        )

const everyNthElement: <ElementType>(
    array: ElementType[],
    nth: Multiple,
    startingWith?: Ordinal<ElementType[]>,
) => ElementType[] =
    <ElementType>(
        array: ElementType[],
        nth: Multiple,
        startingWith: Ordinal<ElementType[]> = as.Ordinal(0) as unknown as Ordinal<ElementType[]>,
    ): ElementType[] =>
        slice(array, startingWith)
            .filter((element: ElementType, index: number) =>
                dividesEvenly(index, nth),
            )

export {
    evenElements,
    oddElements,
    everyNthElement,
}
