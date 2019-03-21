import { dividesEvenly, isEven, isOdd } from '../math'
import { Ordinal, Scalar, to } from '../nominal'
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

const everyNthElement: <ElementType>(array: ElementType[], nth: Scalar, startingWith?: Ordinal) => ElementType[] =
    <ElementType>(array: ElementType[], nth: Scalar, startingWith: Ordinal = to.Ordinal(0)): ElementType[] =>
        slice(array, startingWith)
            .filter((element: ElementType, index: number) =>
                dividesEvenly(index, nth),
            )

export {
    evenElements,
    oddElements,
    everyNthElement,
}
