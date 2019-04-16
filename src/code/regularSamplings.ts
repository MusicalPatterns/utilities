import { dividesEvenly, isEven, isOdd } from '../math'
import { Index, Multiple, to } from '../nominal'
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
    startingWith?: Index<ElementType>,
) => ElementType[] =
    <ElementType>(
        array: ElementType[],
        nth: Multiple,
        startingWith: Index<ElementType> = to.Index(0) as unknown as Index<ElementType>,
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
