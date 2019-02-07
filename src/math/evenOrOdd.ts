import { TWO } from './constants'
import { dividesEvenly } from './dividesEvenly'

const isEven: <T extends number>(n: T) => boolean =
    <T extends number>(n: T): boolean =>
        dividesEvenly(n, TWO)

const isOdd: <T extends number>(n: T) => boolean =
    <T extends number>(n: T): boolean =>
        !isEven(n)

export {
    isEven,
    isOdd,
}
