// tslint:disable ban-types

import { TWO } from './constants'

const isEven: <T extends Number>(n: T) => boolean =
    <T extends Number>(n: T): boolean =>
        // @ts-ignore
        n % TWO === 0

const isOdd: <T extends Number>(n: T) => boolean =
    <T extends Number>(n: T): boolean =>
        !isEven(n)

export {
    isEven,
    isOdd,
}
