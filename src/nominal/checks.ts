import { Integer, Ordinal } from './types'

const ordinalCheck: <ElementType>(ordinal: Ordinal, array: ElementType[]) => void =
    <ElementType>(ordinal: Ordinal, array: ElementType[]): void => {
        if (ordinal > array.length - 1) {
            throw new Error(`Ordinal ${ordinal} exceeds available indices of array of length ${array.length}`)
        }
    }

const normalScalarCheck: (value: unknown) => void =
    (value: unknown): void => {
        if ((value as number > 1) || (value as number < 0)) {
            throw new Error(`A NormalScalar must be between 0 and 1. It was ${value}.`)
        }
    }

const integerCheck: (value: number | Integer, type: string) => void =
    (value: number | Integer, type: string): void => {
        if (Math.round(value as unknown as number) !== value as unknown as number) {
            throw new Error(`${type}s must be Integers.`)
        }
    }

export {
    ordinalCheck,
    normalScalarCheck,
    integerCheck,
}
