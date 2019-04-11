import { apply, from, ONE_FOURTH, ONE_HALF, SQUARED, to } from '../nominal'
import { difference, floor, product, quotient, squareRoot, sum } from './typedOperations'

const factorial: (value: number) => number =
    (value: number): number =>
        value === 0 ? 1 : value * factorial(value - 1)

const combinationCount: (setSize: number, choose: number) => number =
    (setSize: number, choose: number): number => {
        if (choose > setSize) {
            throw new Error('You cannot choose more objects than you have.')
        }

        if (choose < 0) {
            throw new Error('You cannot choose fewer objects than none.')
        }

        return from.Scalar(quotient(
            factorial(setSize),
            product(factorial(choose), factorial(from.Translation(difference(setSize, choose)))),
        ))
    }

const triangularNumber: (value: number) => number =
    (value: number): number =>
        product(value, apply.Scalar(sum(value, 1), ONE_HALF))

const triangularRoot: (value: number) => number =
    (value: number): number =>
        // tslint:disable-next-line no-magic-numbers
        from.Translation(difference(apply.Scalar(squareRoot(sum(product(value, 8), 1)), ONE_HALF), 0.5))

const quarterSquareNumber: (value: number) => number =
    (value: number): number =>
        floor(apply.Scalar(apply.Power(value, SQUARED), ONE_FOURTH) as number)

const trapezoidalNumber: (trapezoidalNumberParameters: { height: number, start: number }) => number =
    ({ height, start }: { height: number, start: number }): number =>
        from.Translation(difference(triangularNumber(sum(start, height)), triangularNumber(start)))

const termialRoot: (termialRootParameters: { rangeDelta: number, rangeStart: number, value: number }) => number =
    ({ value, rangeDelta, rangeStart }: { rangeDelta: number, rangeStart: number, value: number }): number => {
        // tslint:disable-next-line no-magic-numbers
        const valueC: number = product(rangeStart, 2)
        // tslint:disable-next-line no-magic-numbers
        const valueA: number = apply.Power(from.Translation(difference(valueC, rangeDelta)), to.Power(2))
        // tslint:disable-next-line no-magic-numbers
        const valueB: number = product(rangeDelta, value, 8)
        // tslint:disable-next-line no-magic-numbers
        const valueD: number = product(rangeDelta, 2)

        return from.Scalar(quotient(
            sum(
                from.Translation(difference(squareRoot(sum(valueA, valueB)), valueC)),
                rangeDelta,
            ),
            valueD,
        ))
    }

export {
    factorial,
    combinationCount,
    trapezoidalNumber,
    triangularNumber,
    triangularRoot,
    quarterSquareNumber,
    termialRoot,
}
