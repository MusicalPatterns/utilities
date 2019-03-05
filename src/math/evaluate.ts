// tslint:disable max-file-line-count

import { EXCLUSIVE_TO_LEFT, INITIAL, slice } from '../code'
import { apply, Ordinal, to } from '../nominal'
import { Operands } from './types'

const splitOperands: (expression: string, operatorIndex: Ordinal) => Operands =
    (expression: string, operatorIndex: Ordinal): Operands => {
        const lhs: number = evaluate(slice(expression, INITIAL, operatorIndex))
        const rhs: number = evaluate(slice(expression, apply.Translation(operatorIndex, EXCLUSIVE_TO_LEFT)))

        return { lhs, rhs }
    }

const evaluateExponent: (expression: string) => number =
    (expression: string): number => {
        const lastIndexOfExponentiationSign: Ordinal = to.Ordinal(expression.lastIndexOf('^'))
        const { lhs, rhs } = splitOperands(expression, lastIndexOfExponentiationSign)

        return Math.pow(lhs, rhs)
    }

const evaluateGeometricOperation: (expression: string) => number =
    (expression: string): number => {
        const lastIndexOfMultiplicationSign: Ordinal = to.Ordinal(expression.lastIndexOf('*'))
        const lastIndexOfDivisionSign: Ordinal = to.Ordinal(expression.lastIndexOf('/'))
        const lastIndexOfModulusSign: Ordinal = to.Ordinal(expression.lastIndexOf('%'))

        if (
            lastIndexOfMultiplicationSign > lastIndexOfDivisionSign &&
            lastIndexOfMultiplicationSign > lastIndexOfModulusSign
        ) {
            const { lhs, rhs } = splitOperands(expression, lastIndexOfMultiplicationSign)

            return lhs * rhs
        }
        else if (lastIndexOfDivisionSign > lastIndexOfModulusSign) {
            const { lhs, rhs } = splitOperands(expression, lastIndexOfDivisionSign)

            return lhs / rhs
        }
        else {
            const { lhs, rhs } = splitOperands(expression, lastIndexOfModulusSign)

            return lhs % rhs
        }
    }

const evaluateArithmeticOperation: (expression: string) => number =
    (expression: string): number => {
        const lastIndexOfAdditionSign: Ordinal = to.Ordinal(expression.lastIndexOf('+'))
        const lastIndexOfSubtractionSign: Ordinal = to.Ordinal(expression.lastIndexOf('-'))

        if (lastIndexOfAdditionSign > lastIndexOfSubtractionSign) {
            const { lhs, rhs } = splitOperands(expression, lastIndexOfAdditionSign)

            return lhs + rhs
        }
        else {
            const { lhs, rhs } = splitOperands(expression, lastIndexOfSubtractionSign)

            return lhs - rhs
        }
    }

const evaluateParenthetical: (expression: string) => number =
    (expression: string): number => {
        const beginParantheticalIndex: Ordinal = to.Ordinal(expression.lastIndexOf('('))
        const endParantheticalIndex: Ordinal = apply.Translation(
            beginParantheticalIndex,
            to.Translation(
                expression.slice(beginParantheticalIndex, expression.length)
                    .indexOf(')'),
            ),
        )

        const partBefore: string = expression.slice(0, beginParantheticalIndex)
        const parenthetical: string = expression.slice(beginParantheticalIndex + 1, endParantheticalIndex)
        const partAfter: string = expression.slice(endParantheticalIndex + 1, expression.length)

        return evaluate(`${partBefore}${evaluate(parenthetical)}${partAfter}`)
    }

const evaluate: (expression: string | number) => number =
    // tslint:disable-next-line cyclomatic-complexity
    (expression: string | number): number => {
        let num: number
        if (typeof expression === 'number') {
            num = expression
        }
        else if (expression.trim() === '') {
            num = 0
        }
        else if (expression.includes('(')) {
            num = evaluateParenthetical(expression)
        }
        else if (expression.includes('+') || expression.includes('-')) {
            num = evaluateArithmeticOperation(expression)
        }
        else if (
            expression.includes('*') ||
            expression.includes('/') ||
            expression.includes('%')
        ) {
            num = evaluateGeometricOperation(expression)
        }
        else if (expression.includes('^')) {
            num = evaluateExponent(expression)
        }
        else {
            num = parseFloat(expression)
        }

        if (isNaN(num)) {
            throw new Error(`expression '${expression}' was not able to be evaluated`)
        }

        return num
    }

export {
    evaluate,
}
