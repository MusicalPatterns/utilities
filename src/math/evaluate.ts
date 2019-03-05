// tslint:disable max-file-line-count

import { Operands } from './types'

const splitOperands: (expression: string, operatorIndex: number) => Operands =
    (expression: string, operatorIndex: number): Operands => {
        const lhs: number = evaluate(expression.slice(0, operatorIndex))
        const rhs: number = evaluate(expression.slice(operatorIndex + 1))

        return { lhs, rhs }
    }

const evaluateExponent: (expression: string) => number =
    (expression: string): number => {
        const lastIndexOfExponentiationSign: number = expression.lastIndexOf('^')
        const { lhs, rhs } = splitOperands(expression, lastIndexOfExponentiationSign)

        return Math.pow(lhs, rhs)
    }

const evaluateGeometricOperation: (expression: string) => number =
    (expression: string): number => {
        const lastIndexOfMultiplicationSign: number = expression.lastIndexOf('*')
        const lastIndexOfDivisionSign: number = expression.lastIndexOf('/')
        const lastIndexOfModulusSign: number = expression.lastIndexOf('%')

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
        const lastIndexOfAdditionSign: number = expression.lastIndexOf('+')
        const lastIndexOfSubtractionSign: number = expression.lastIndexOf('-')

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
        const beginParantheticalIndex: number = expression.lastIndexOf('(')
        const endParantheticalIndex: number =
            beginParantheticalIndex + expression.slice(beginParantheticalIndex, expression.length)
                .indexOf(')')

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
