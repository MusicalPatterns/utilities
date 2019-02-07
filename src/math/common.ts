import { allElementsEqual } from '../code'
import { TWO } from './constants'
import { absoluteValue, modulus, product, quotient } from './typedOperations'
import { NumericOperation } from './types'

const lowestCommonMultipleOfTwoNumbers: NumericOperation =
    (a: number, b: number): number =>
        absoluteValue(quotient(product(a, b), greatestCommonDivisor(a, b)))

const greatestCommonDivisorOfTwoNumbers: NumericOperation =
    (a: number, b: number): number => {
        let output: number = a
        let remainder: number = b
        while (remainder) {
            const previousRemainder: number = remainder
            remainder = modulus(output, remainder)
            output = previousRemainder
        }

        return output
    }

const recurseCommon: (commonFunction: NumericOperation, ...numbers: number[]) => number =
    (commonFunction: NumericOperation, ...numbers: number[]): number => {
        if (numbers.length === 1) {
            return numbers[ 0 ]
        }
        else if (numbers.length === 0) {
            return 1
        }

        const result: number = commonFunction(numbers[ 0 ], numbers[ 1 ])
        if (numbers.length === TWO) {
            return result
        }
        else {
            return recurseCommon(commonFunction, result, ...numbers.slice(TWO))
        }
    }

const common: (numbers: number[], commonFunction: NumericOperation) => number =
    (numbers: number[], commonFunction: NumericOperation): number => {
        if (numbers.length === 0) {
            return 1
        }

        if (allElementsEqual(numbers)) {
            return numbers[ 0 ]
        }

        return recurseCommon(commonFunction, ...numbers)
    }

const lowestCommonMultiple: (...numbers: number[]) => number =
    (...numbers: number[]): number =>
        common(numbers, lowestCommonMultipleOfTwoNumbers)

const greatestCommonDivisor: (...numbers: number[]) => number =
    (...numbers: number[]): number =>
        common(numbers, greatestCommonDivisorOfTwoNumbers)

export {
    lowestCommonMultiple,
    greatestCommonDivisor,
}
