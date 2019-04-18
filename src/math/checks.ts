import { VERY_HIGH_PRECISION } from '../nominal'
import { round } from './typedOperations'

const integerCheck: <NumericType extends Number>(value: NumericType, type: string) => NumericType =
    <NumericType extends Number>(value: NumericType, type: string): NumericType => {
        const roundedValue: number = round(value as unknown as number)
        const roundedValueToPrecisionWeCareAbout: number = round(value as unknown as number, VERY_HIGH_PRECISION)

        if (roundedValue !== roundedValueToPrecisionWeCareAbout as unknown as number) {
            throw new Error(`Numerals of type ${type} must be Integers. This numeral had value ${value}.`)
        }

        return roundedValue as unknown as NumericType
    }

export {
    integerCheck,
}
