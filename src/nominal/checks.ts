import { ArrayedType, Ordinal } from './types'

const unfortunatelyNecessaryReimplementationOfRoundForCheckToAvoidCircularDependencyHell: (numeral: number) => number =
    (numeral: number): number => {
        // tslint:disable-next-line no-magic-numbers
        if (Math.abs(numeral) < 1 / 1000000) {
            return 0
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
        const roundedValue: number =
            unfortunatelyNecessaryReimplementationOfRoundForCheckToAvoidCircularDependencyHell(
                numeral as unknown as number,
            )
        if (roundedValue > 1 || roundedValue < 0) {
            throw new Error(
                `Numerals of type ${type} must be between 0 and 1. This numeral was ${numeral}.`,
            )
        }

        return numeral as unknown as number > 1 || numeral as unknown as number < 0 ?
            (roundedValue > 1 ? 1 : roundedValue < 0 ? 0 : roundedValue) as unknown as NumericType :
            numeral as unknown as NumericType
    }

const integerCheck: <NumericType extends Number>(numeral: NumericType, type: string) => NumericType =
    <NumericType extends Number>(numeral: NumericType, type: string): NumericType => {
        const roundedValue: number = Math.round(numeral as unknown as number)
        const roundedValueToPrecisionWeCareAbout: number =
            unfortunatelyNecessaryReimplementationOfRoundForCheckToAvoidCircularDependencyHell(
                numeral as unknown as number,
            )

        if (roundedValue !== roundedValueToPrecisionWeCareAbout as unknown as number) {
            throw new Error(`Numerals of type ${type} must be integers. This numeral was ${numeral}.`)
        }

        return roundedValue as unknown as NumericType
    }

export {
    ordinalCheck,
    normalCheck,
    integerCheck,
}
