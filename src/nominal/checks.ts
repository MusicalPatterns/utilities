import * as notAs from './notAs'
import { Ordinal } from './types'

const unfortunatelyNecessaryReimplementationOfRoundForCheckToAvoidCircularDependencyHell: (value: number) => number =
    (value: number): number => {
        // tslint:disable-next-line no-magic-numbers
        if (Math.abs(value) < 1 / 1000000) {
            return 0
        }

        // tslint:disable-next-line no-any prefer-template no-magic-numbers
        return +(Math.round(`${value}e+10` as unknown as number) + 'e-' + 10)
    }

const indexCheck: <ElementType>(index: Ordinal<ElementType>, array: ElementType[]) => void =
    <ElementType>(index: Ordinal<ElementType>, array: ElementType[]): void => {
        if (notAs.Ordinal(index as unknown as Ordinal) > array.length - 1) {
            throw new Error(`Ordinal ${index} exceeds available indices of array of length ${array.length}`)
        }
    }

const normalCheck: <NumericType extends Number>(value: NumericType) => number =
    // tslint:disable-next-line cyclomatic-complexity
    <NumericType extends Number>(value: NumericType): number => {
        const roundedValue: number =
            unfortunatelyNecessaryReimplementationOfRoundForCheckToAvoidCircularDependencyHell(
                value as unknown as number,
            )
        if (roundedValue > 1 || roundedValue < 0) {
            throw new Error(`A NormalScalar must be between 0 and 1. It was ${value}.`)
        }

        return value as unknown as number > 1 || value as unknown as number < 0 ?
            roundedValue > 1 ? 1 : roundedValue < 0 ? 0 : roundedValue :
            value as unknown as number
    }

const integerCheck: <NumericType extends Number>(value: NumericType, type: string) => NumericType =
    <NumericType extends Number>(value: NumericType, type: string): NumericType => {
        const roundedValue: number = Math.round(value as unknown as number)
        const roundedValueToPrecisionWeCareAbout: number =
            unfortunatelyNecessaryReimplementationOfRoundForCheckToAvoidCircularDependencyHell(
                value as unknown as number,
            )

        if (roundedValue !== roundedValueToPrecisionWeCareAbout as unknown as number) {
            throw new Error(`Numerals of type ${type} must be Integers. This numeral had value ${value}.`)
        }

        return roundedValue as unknown as NumericType
    }

export {
    indexCheck,
    normalCheck,
    integerCheck,
}
