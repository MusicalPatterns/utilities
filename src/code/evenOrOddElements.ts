import { isEven, isOdd } from '../math'

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

export {
    evenElements,
    oddElements,
}
