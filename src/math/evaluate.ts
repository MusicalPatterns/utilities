// tslint:disable max-file-line-count

import { HtmlValue } from '../browser'
import { EXCLUSIVE_TO_LEFT, INITIAL, slice } from '../code'
import { apply, Ordinal, to } from '../nominal'
import { Operands } from './types'

const splitOperands: (expression: string, operatorIndex: Ordinal) => Operands =
    (expression: string, operatorIndex: Ordinal): Operands => {
        const lhs: number = evaluateString(
            slice(expression, INITIAL, operatorIndex),
        )
        const rhs: number = evaluateString(
            slice(expression, apply.Translation(operatorIndex, EXCLUSIVE_TO_LEFT)),
        )

        return { lhs, rhs }
    }

const evaluateExponent: (expression: string) => number =
    (expression: string): number => {
        const finalIndexOfExponentiationSign: Ordinal = to.Ordinal(expression.lastIndexOf('^'))
        const { lhs, rhs } = splitOperands(expression, finalIndexOfExponentiationSign)

        return Math.pow(lhs, rhs)
    }

const evaluateGeometricOperation: (expression: string) => number =
    (expression: string): number => {
        const finalIndexOfMultiplicationSign: Ordinal = to.Ordinal(expression.lastIndexOf('*'))
        const finalIndexOfDivisionSign: Ordinal = to.Ordinal(expression.lastIndexOf('/'))
        const finalIndexOfModulusSign: Ordinal = to.Ordinal(expression.lastIndexOf('%'))

        let operands: Operands
        if (finalIndexOfMultiplicationSign > finalIndexOfDivisionSign &&
            finalIndexOfMultiplicationSign > finalIndexOfModulusSign) {
            operands = splitOperands(expression, finalIndexOfMultiplicationSign)

            return operands.lhs * operands.rhs
        }
        if (finalIndexOfDivisionSign > finalIndexOfModulusSign) {
            operands = splitOperands(expression, finalIndexOfDivisionSign)

            return operands.lhs / operands.rhs
        }
        operands = splitOperands(expression, finalIndexOfModulusSign)

        return operands.lhs % operands.rhs
    }

const evaluateArithmeticOperation: (expression: string) => number =
    (expression: string): number => {
        const finalIndexOfAdditionSign: Ordinal = to.Ordinal(expression.lastIndexOf('+'))
        const finalIndexOfSubtractionSign: Ordinal = to.Ordinal(expression.lastIndexOf('-'))

        let operands: Operands
        if (finalIndexOfAdditionSign > finalIndexOfSubtractionSign) {
            operands = splitOperands(expression, finalIndexOfAdditionSign)

            return operands.lhs + operands.rhs
        }
        operands = splitOperands(expression, finalIndexOfSubtractionSign)

        return operands.lhs - operands.rhs
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

        return evaluateString(`${partBefore}${evaluateString(parenthetical)}${partAfter}`)
    }

const evaluateString: (expression: string) => number =
    // tslint:disable-next-line cyclomatic-complexity
    (expression: string): number => {
        let num: number
        if (expression.trim() === '') {
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

const isString: (expression: HtmlValue) => expression is string =
    (expression: HtmlValue): expression is string =>
        typeof expression === 'string'

const evaluate: (expression: HtmlValue) => number =
    (expression: HtmlValue): number => {
        if (typeof expression === 'number') {
            return expression
        }

        if (!isString(expression)) {
            throw new Error('expression is not string')
        }

        return evaluateString(expression)
    }

export {
    evaluate,
}
