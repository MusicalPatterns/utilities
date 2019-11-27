import { ArrayedType, Ordinal } from './types'

// tslint:disable-next-line no-magic-numbers
const LOWER_THRESHOLD_FOR_SCIENTIC_NOTATION: number = 1 / 1000000
const UPPER_THRESHOLD_FOR_SCIENTIC_NOTATION: number = 100000000000

const fixJavascriptFloatingPointArithmeticIssuesAndCastToNumber: (numeral: number) => number =
    (numeral: number): number => {
        // tslint:disable-next-line no-magic-numbers
        if (Math.abs(numeral) < LOWER_THRESHOLD_FOR_SCIENTIC_NOTATION) {
            return 0
        }

        if (Math.abs(numeral) >= UPPER_THRESHOLD_FOR_SCIENTIC_NOTATION) {
            return Math.round(numeral)
        }

        // tslint:disable-next-line no-any prefer-template no-magic-numbers
        return +(Math.round(`${numeral}e+10` as unknown as number) + 'e-' + 10)
    }

const ordinalCheck: (index: Ordinal<ArrayedType>, array: ArrayedType) => void =
    (index: Ordinal<ArrayedType>, array: ArrayedType): void => {
        if (index as unknown as number > array.length - 1) {
            throw new Error(`Ordinal ${String(index)} exceeds available indices of array of length ${array.length}`)
        }
    }

const normalCheck: <NumericType extends Number>(numeral: NumericType, type: string) => NumericType =
    // tslint:disable-next-line cyclomatic-complexity
    <NumericType extends Number>(numeral: NumericType, type: string): NumericType => {
        const fixedNumeral: number =
            fixJavascriptFloatingPointArithmeticIssuesAndCastToNumber(numeral as unknown as number)

        if (fixedNumeral > 1 || fixedNumeral < 0) {
            throw new Error(
                `Numerals of type ${type} must be between 0 and 1. This numeral was ${String(numeral)}.`,
            )
        }

        return numeral as unknown as number > 1 || numeral as unknown as number < 0 ?
            (fixedNumeral > 1 ? 1 : fixedNumeral < 0 ? 0 : fixedNumeral) as unknown as NumericType :
            numeral as unknown as NumericType
    }

const integerCheck: <NumericType extends Number>(numeral: NumericType, type?: string) => NumericType =
    <NumericType extends Number>(numeral: NumericType, type?: string): NumericType => {
        const roundedValue: number = Math.round(numeral as unknown as number)

        const fixedNumeral: number =
            fixJavascriptFloatingPointArithmeticIssuesAndCastToNumber(numeral as unknown as number)

        if (roundedValue !== fixedNumeral as unknown as number) {
            if (!type) {
                throw new Error()
            }
            throw new Error(`Numerals of type ${type} must be integers. This numeral was ${String(numeral)}.`)
        }

        return roundedValue as unknown as NumericType
    }

export {
    ordinalCheck,
    normalCheck,
    integerCheck,
}
