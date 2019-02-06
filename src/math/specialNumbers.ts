import { apply, to } from '../nominal'
import { ONE_FOURTH, ONE_HALF, SQUARED } from './constants'
import { floor, squareRoot } from './typedOperations'

const triangularNumber: (n: number) => number =
    (n: number): number => n * apply.Scalar(n + 1, ONE_HALF)

const triangularRoot: (n: number) => number =
    // tslint:disable-next-line no-magic-numbers
    (n: number): number => apply.Scalar(squareRoot(n * 8 + 1), ONE_HALF) - 0.5

const quarterSquareNumber: (n: number) => number =
    (n: number): number => floor(apply.Scalar(apply.Power(n, SQUARED), ONE_FOURTH))

const trapezoidalNumber: (trapezoidalNumberParameters: { height: number, start: number }) => number =
    ({ height, start }: { height: number, start: number }): number =>
        triangularNumber(start + height) - triangularNumber(start)

const termialRoot: (termialRootParameters: { n: number, rangeDelta: number, rangeStart: number }) => number =
    ({ n, rangeDelta, rangeStart }: { n: number, rangeDelta: number, rangeStart: number }): number => {
        // tslint:disable-next-line no-magic-numbers
        const c: number = rangeStart * 2
        // tslint:disable-next-line no-magic-numbers
        const a: number = apply.Power(c - rangeDelta, to.Power(2))
        // tslint:disable-next-line no-magic-numbers
        const b: number = rangeDelta * n * 8
        // tslint:disable-next-line no-magic-numbers
        const d: number = rangeDelta * 2

        return (squareRoot(a + b) - c + rangeDelta) / d
    }

export {
    trapezoidalNumber,
    triangularNumber,
    triangularRoot,
    quarterSquareNumber,
    termialRoot,
}
