import { EVEN } from './constants'

const isEven: (n: number) => boolean =
    (n: number): boolean =>
        n % EVEN === 0

const isOdd: (n: number) => boolean =
    (n: number): boolean =>
        !isEven(n)

export {
    isEven,
    isOdd,
}
