// tslint:disable ban-types

import { EVEN } from './constants'

const isEven: <T extends Number>(n: T) => boolean =
    <T extends Number>(n: T): boolean =>
        // @ts-ignore
        n % EVEN === 0

const isOdd: <T extends Number>(n: T) => boolean =
    <T extends Number>(n: T): boolean =>
        !isEven(n)

export {
    isEven,
    isOdd,
}
