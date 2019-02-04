import { deepEqual } from './deepEqual'

const allElementsEqual: <T>(array: T[]) => boolean =
    <T>(array: T[]): boolean =>
        array.every((element: T): boolean =>
            deepEqual(element, array[ 0 ]),
        )

export {
    allElementsEqual,
}
