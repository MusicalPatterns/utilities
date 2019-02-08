// tslint:disable ban-types

import { TWO } from './constants'
import { dividesEvenly } from './dividesEvenly'

const isEven: <T extends Number>(n: T) => boolean =
    <T extends Number>(n: T): boolean =>
        dividesEvenly(n, TWO)

const isOdd: <T extends Number>(n: T) => boolean =
    <T extends Number>(n: T): boolean =>
        !isEven(n)

export {
    isEven,
    isOdd,
}
