import { ArrayedType, Ordinal } from './types'

const fixJavascriptFloatingPointArithmeticIssuesAndCastToNumber: (numeral: number) => number =
    (numeral: number): number => {
        // tslint:disable-next-line no-magic-numbers
        if (Math.abs(numeral) < 1 / 1000000) {
            return 0
        }

        // tslint:disable-next-line no-magic-numbers
        if (numeral > 1000000) {
            // tslint:disable-next-line no-any prefer-template no-magic-numbers
            return +(Math.round(`${numeral}e+0` as unknown as number) + 'e-' + 0)
        }

        // tslint:disable-next-line no-any prefer-template no-magic-numbers
        return +(Math.round(`${numeral}e+10` as unknown as number) + 'e-' + 10)
    }

const ordinalCheck: (index: Ordinal<ArrayedType>, array: ArrayedType) => void =
    (index: Ordinal<ArrayedType>, array: ArrayedType): void => {
        if (index as unknown as number > array.length - 1) {
            throw new Error(`Ordinal ${index} exceeds available indices of array of length ${array.length}`)
        }
    }

const normalCheck: <NumericType extends Number>(numeral: NumericType, type: string) => NumericType =
    // tslint:disable-next-line cyclomatic-complexity
    <NumericType extends Number>(numeral: NumericType, type: string): NumericType => {
        const fixedNumeral: number =
            fixJavascriptFloatingPointArithmeticIssuesAndCastToNumber(numeral as unknown as number)

        if (fixedNumeral > 1 || fixedNumeral < 0) {
            throw new Error(
                `Numerals of type ${type} must be between 0 and 1. This numeral was ${numeral}.`,
            )
        }

        return numeral as unknown as number > 1 || numeral as unknown as number < 0 ?
            (fixedNumeral > 1 ? 1 : fixedNumeral < 0 ? 0 : fixedNumeral) as unknown as NumericType :
            numeral as unknown as NumericType
    }

const integerCheck: <NumericType extends Number>(numeral: NumericType, type: string) => NumericType =
    <NumericType extends Number>(numeral: NumericType, type: string): NumericType => {
        const roundedValue: number = Math.round(numeral as unknown as number)

        const fixedNumeral: number =
            fixJavascriptFloatingPointArithmeticIssuesAndCastToNumber(numeral as unknown as number)

        if (roundedValue !== fixedNumeral as unknown as number) {
            throw new Error(`Numerals of type ${type} must be integers. This numeral was ${numeral}.`)
        }

        return roundedValue as unknown as NumericType
    }

export {
    ordinalCheck,
    normalCheck,
    integerCheck,
}
