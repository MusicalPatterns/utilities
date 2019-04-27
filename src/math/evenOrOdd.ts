import { TWO } from '../nominal'
import { dividesEvenly } from './dividesEvenly'

const isEven: <NumericType extends Number>(numeral: NumericType) => boolean =
    <NumericType extends Number>(numeral: NumericType): boolean =>
        dividesEvenly(numeral, TWO)

const isOdd: <NumericType extends Number>(numeral: NumericType) => boolean =
    <NumericType extends Number>(numeral: NumericType): boolean =>
        !isEven(numeral)

export {
    isEven,
    isOdd,
}
