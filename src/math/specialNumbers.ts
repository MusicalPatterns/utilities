import { apply, to } from '../nominal'
import { ONE_FOURTH, ONE_HALF, SQUARED } from './constants'
import { difference, floor, product, quotient, squareRoot, sum } from './typedOperations'

const triangularNumber: (n: number) => number =
    (n: number): number => product(n, apply.Scalar(sum(n, 1), ONE_HALF))

const triangularRoot: (n: number) => number =
    // tslint:disable-next-line no-magic-numbers
    (n: number): number => difference(apply.Scalar(squareRoot(sum(product(n, 8), 1)), ONE_HALF), 0.5)

const quarterSquareNumber: (n: number) => number =
    (n: number): number => floor(apply.Scalar(apply.Power(n, SQUARED), ONE_FOURTH))

const trapezoidalNumber: (trapezoidalNumberParameters: { height: number, start: number }) => number =
    ({ height, start }: { height: number, start: number }): number =>
        difference(triangularNumber(start + height), triangularNumber(start))

const termialRoot: (termialRootParameters: { n: number, rangeDelta: number, rangeStart: number }) => number =
    ({ n, rangeDelta, rangeStart }: { n: number, rangeDelta: number, rangeStart: number }): number => {
        // tslint:disable-next-line no-magic-numbers
        const c: number = product(rangeStart, 2)
        // tslint:disable-next-line no-magic-numbers
        const a: number = apply.Power(difference(c, rangeDelta), to.Power(2))
        // tslint:disable-next-line no-magic-numbers
        const b: number = product(product(rangeDelta, n), 8)
        // tslint:disable-next-line no-magic-numbers
        const d: number = product(rangeDelta, 2)

        return quotient(sum(difference(squareRoot(sum(a, b)), c), rangeDelta), d)
    }

export {
    trapezoidalNumber,
    triangularNumber,
    triangularRoot,
    quarterSquareNumber,
    termialRoot,
}
