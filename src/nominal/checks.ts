import * as from from './from'
import { Ordinal } from './types'

const indexCheck: <ElementType>(index: Ordinal<ElementType>, array: ElementType[]) => void =
    <ElementType>(index: Ordinal<ElementType>, array: ElementType[]): void => {
        if (from.Ordinal(index as unknown as Ordinal) > array.length - 1) {
            throw new Error(`Ordinal ${index} exceeds available indices of array of length ${array.length}`)
        }
    }

const normalScalarCheck: (value: unknown) => void =
    (value: unknown): void => {
        if ((value as number > 1) || (value as number < 0)) {
            throw new Error(`A NormalScalar must be between 0 and 1. It was ${value}.`)
        }
    }

export {
    indexCheck,
    normalScalarCheck,
}
