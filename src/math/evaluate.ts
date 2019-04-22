// tslint:disable max-file-line-count

import { HtmlValue } from '../browser'
import { stringSlice } from '../code'
import { as, Cardinal, EXCLUSIVE_TO_LEFT, INITIAL, insteadOf, notAs, Ordinal, use } from '../nominal'
import { Operands } from './types'

const splitOperands: (expression: string, operatorIndex: Ordinal<string>) => Operands =
    (expression: string, operatorIndex: Ordinal<string>): Operands => {
        const lhs: number =
            evaluateString(stringSlice(expression, as.Ordinal<string>(notAs.Ordinal(INITIAL)), operatorIndex))
        const rhs: number = evaluateString(
            stringSlice(
                expression,
                use.Cardinal(
                    operatorIndex,
                    insteadOf<Cardinal, Ordinal<string>>(EXCLUSIVE_TO_LEFT),
                ),
            ),
        )

        return { lhs, rhs }
    }

const evaluateExponent: (expression: string) => number =
    (expression: string): number => {
        const finalIndexOfExponentiationSign: Ordinal<string> = as.Ordinal<string>(expression.lastIndexOf('^'))
        const { lhs, rhs } = splitOperands(expression, finalIndexOfExponentiationSign)

        return Math.pow(lhs, rhs)
    }

const evaluateGeometricOperation: (expression: string) => number =
    (expression: string): number => {
        const finalIndexOfMultiplicationSign: Ordinal<string> = as.Ordinal<string>(expression.lastIndexOf('*'))
        const finalIndexOfDivisionSign: Ordinal<string> = as.Ordinal<string>(expression.lastIndexOf('/'))
        const finalIndexOfModulusSign: Ordinal<string> = as.Ordinal<string>(expression.lastIndexOf('%'))

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
        const finalIndexOfAdditionSign: Ordinal<string> = as.Ordinal<string>(expression.lastIndexOf('+'))
        const finalIndexOfSubtractionSign: Ordinal<string> = as.Ordinal<string>(expression.lastIndexOf('-'))

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
        const beginParantheticalIndex: Ordinal<string> = as.Ordinal<string>(expression.lastIndexOf('('))
        const endIndex: Ordinal<string> = as.Ordinal<string>(expression.length)
        const endParantheticalIndex: Ordinal<string> = use.Cardinal(
            beginParantheticalIndex,
            as.Cardinal<Ordinal<string>>(
                stringSlice(expression, beginParantheticalIndex, endIndex)
                    .indexOf(')'),
            ),
        )

        const partBefore: string = stringSlice(expression, as.Ordinal<string>(0), beginParantheticalIndex)
        const parenthetical: string = stringSlice(
            expression,
            use.Cardinal(beginParantheticalIndex, as.Cardinal<Ordinal<string>>(1)),
            endParantheticalIndex,
        )
        const partAfter: string = stringSlice(
            expression,
            use.Cardinal(endParantheticalIndex, as.Cardinal<Ordinal<string>>(1)),
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
