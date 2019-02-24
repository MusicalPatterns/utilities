// tslint:disable ban-types

import { TWO } from './constants'
import { dividesEvenly } from './dividesEvenly'

const isEven: <T extends Number>(value: T) => boolean =
    <T extends Number>(value: T): boolean =>
        dividesEvenly(value, TWO)

const isOdd: <T extends Number>(value: T) => boolean =
    <T extends Number>(value: T): boolean =>
        !isEven(value)

export {
    isEven,
    isOdd,
}
