import * as from from './from'
import { Index, Integer } from './types'

const indexCheck: <ElementType>(index: Index<ElementType>, array: ElementType[]) => void =
    <ElementType>(index: Index<ElementType>, array: ElementType[]): void => {
        if (from.Index(index) > array.length - 1) {
            throw new Error(`Index ${index} exceeds available indices of array of length ${array.length}`)
        }
    }

const normalScalarCheck: (value: unknown) => void =
    (value: unknown): void => {
        if ((value as number > 1) || (value as number < 0)) {
            throw new Error(`A NormalScalar must be between 0 and 1. It was ${value}.`)
        }
    }

const integerCheck: (value: number | Number | Integer, type: string) => void =
    (value: number | Number | Integer, type: string): void => {
        if (Math.round(value as unknown as number) !== value as unknown as number) {
            throw new Error(`${type}s must be Integers.`)
        }
    }

export {
    indexCheck,
    normalScalarCheck,
    integerCheck,
}
