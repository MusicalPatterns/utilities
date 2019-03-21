// tslint:disable ban-types

import { TWO } from './constants'
import { dividesEvenly } from './dividesEvenly'

const isEven: <NumericType extends Number = Number>(value: NumericType) => boolean =
    <NumericType extends Number = Number>(value: NumericType): boolean =>
        dividesEvenly(value, TWO)

const isOdd: <NumericType extends Number = Number>(value: NumericType) => boolean =
    <NumericType extends Number = Number>(value: NumericType): boolean =>
        !isEven(value)

export {
    isEven,
    isOdd,
}
