import { deepEqual } from './deepEqual'

const allElementsEqual: <ElementType>(array: ElementType[]) => boolean =
    <ElementType>(array: ElementType[]): boolean =>
        array.every((element: ElementType): boolean =>
            deepEqual(element, array[ 0 ]),
        )

export {
    allElementsEqual,
}
