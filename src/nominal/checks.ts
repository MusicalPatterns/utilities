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

const roundForIntegerCheck: (value: number) => number =
    (value: number): number =>
        // tslint:disable-next-line no-any prefer-template no-magic-numbers
        +(Math.round(`${value}e+10` as unknown as number) + 'e-' + 10)

const integerCheck: <NumericType extends Number>(value: NumericType, type: string) => NumericType =
    <NumericType extends Number>(value: NumericType, type: string): NumericType => {
        const roundedValue: number = Math.round(value as unknown as number)
        const roundedValueToPrecisionWeCareAbout: number = roundForIntegerCheck(value as unknown as number)

        if (roundedValue !== roundedValueToPrecisionWeCareAbout as unknown as number) {
            throw new Error(`Numerals of type ${type} must be Integers. This numeral had value ${value}.`)
        }

        return roundedValue as unknown as NumericType
    }

export {
    indexCheck,
    normalScalarCheck,
    integerCheck,
}
