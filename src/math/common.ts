import { TWO } from './constants'
import { NumericOperation } from './types'

const lowestCommonMultipleOfTwoNumbers: NumericOperation =
    (a: number, b: number): number =>
        Math.abs((a * b) / greatestCommonDivisor(a, b))

const greatestCommonDivisorOfTwoNumbers: NumericOperation =
    (a: number, b: number): number => {
        let output: number = a
        let modulus: number = b
        while (modulus) {
            const previousModulus: number = modulus
            modulus = output % modulus
            output = previousModulus
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

const lowestCommonMultiple: (...numbers: number[]) => number =
    (...numbers: number[]): number =>
        recurseCommon(lowestCommonMultipleOfTwoNumbers, ...numbers)

const greatestCommonDivisor: (...numbers: number[]) => number =
    (...numbers: number[]): number =>
        recurseCommon(greatestCommonDivisorOfTwoNumbers, ...numbers)

export {
    lowestCommonMultiple,
    greatestCommonDivisor,
}
