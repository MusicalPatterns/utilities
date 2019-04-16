// tslint:disable max-file-line-count

import { HtmlValue } from '../browser'
import { stringSlice } from '../code'
import { apply, EXCLUSIVE_TO_LEFT, from, Index, INITIAL, insteadOf, to, Translation } from '../nominal'
import { Operands } from './types'

const splitOperands: (expression: string, operatorIndex: Index<string>) => Operands =
    (expression: string, operatorIndex: Index<string>): Operands => {
        const lhs: number =
            evaluateString(stringSlice(expression, to.Index<string>(from.Index(INITIAL)), operatorIndex))
        const rhs: number = evaluateString(
            stringSlice(
                expression,
                apply.Translation(
                    operatorIndex,
                    insteadOf<Translation, Index<string>>(EXCLUSIVE_TO_LEFT),
                ),
            ),
        )

        return { lhs, rhs }
    }

const evaluateExponent: (expression: string) => number =
    (expression: string): number => {
        const finalIndexOfExponentiationSign: Index<string> = to.Index<string>(expression.lastIndexOf('^'))
        const { lhs, rhs } = splitOperands(expression, finalIndexOfExponentiationSign)

        return Math.pow(lhs, rhs)
    }

const evaluateGeometricOperation: (expression: string) => number =
    (expression: string): number => {
        const finalIndexOfMultiplicationSign: Index<string> = to.Index<string>(expression.lastIndexOf('*'))
        const finalIndexOfDivisionSign: Index<string> = to.Index<string>(expression.lastIndexOf('/'))
        const finalIndexOfModulusSign: Index<string> = to.Index<string>(expression.lastIndexOf('%'))

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
        const finalIndexOfAdditionSign: Index<string> = to.Index<string>(expression.lastIndexOf('+'))
        const finalIndexOfSubtractionSign: Index<string> = to.Index<string>(expression.lastIndexOf('-'))

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
        const beginParantheticalIndex: Index<string> = to.Index<string>(expression.lastIndexOf('('))
        const endIndex: Index<string> = to.Index<string>(expression.length)
        const endParantheticalIndex: Index<string> = apply.Translation(
            beginParantheticalIndex,
            to.Translation<Index<string>>(
                stringSlice(expression, beginParantheticalIndex, endIndex)
                    .indexOf(')'),
            ),
        )

        const partBefore: string = stringSlice(expression, to.Index<string>(0), beginParantheticalIndex)
        const parenthetical: string = stringSlice(
            expression,
            apply.Translation(beginParantheticalIndex, to.Translation<Index<string>>(1)),
            endParantheticalIndex,
        )
        const partAfter: string = stringSlice(
            expression,
            apply.Translation(endParantheticalIndex, to.Translation<Index<string>>(1)),
            endIndex,
        )

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
