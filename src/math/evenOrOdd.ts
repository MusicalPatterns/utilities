import { TWO } from './constants'

const isEven: <T extends number>(n: T) => boolean =
    <T extends number>(n: T): boolean =>
        n % TWO === 0

const isOdd: <T extends number>(n: T) => boolean =
    <T extends number>(n: T): boolean =>
        !isEven(n)

export {
    isEven,
    isOdd,
}
