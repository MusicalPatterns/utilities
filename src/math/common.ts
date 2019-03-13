import { allElementsEqual } from '../code'
import { from, Integer, to } from '../nominal'
import { TWO } from './constants'
import { absoluteValue, modulus, product, quotient } from './typedOperations'
import { IntegerOperation } from './types'

const lowestCommonMultipleOfTwoNumbers: IntegerOperation =
    (firstValue: Integer, secondValue: Integer): Integer =>
        absoluteValue(quotient(product(firstValue, secondValue), greatestCommonDivisor(firstValue, secondValue)))

const greatestCommonDivisorOfTwoNumbers: IntegerOperation =
    (firstValue: Integer, secondValue: Integer): Integer => {
        let output: Integer = firstValue
        let remainder: Integer = secondValue
        while (remainder) {
            const previousRemainder: Integer = remainder
            remainder = modulus(output, remainder)
            output = previousRemainder
        }

        return output
    }

const recurseCommon: (commonFunction: IntegerOperation, ...integers: Integer[]) => Integer =
    (commonFunction: IntegerOperation, ...integers: Integer[]): Integer => {
        if (integers.length === 1) {
            return integers[ 0 ]
        }
        else if (integers.length === 0) {
            return to.Integer(1)
        }

        const result: Integer = commonFunction(integers[ 0 ], integers[ 1 ])
        if (to.Integer(integers.length) === TWO) {
            return result
        }
        else {
            return recurseCommon(commonFunction, result, ...integers.slice(from.Integer(TWO)))
        }
    }

const common: (integers: Integer[], commonFunction: IntegerOperation) => Integer =
    (integers: Integer[], commonFunction: IntegerOperation): Integer => {
        if (integers.length === 0) {
            return to.Integer(1)
        }

        if (allElementsEqual(integers)) {
            return integers[ 0 ]
        }

        return recurseCommon(commonFunction, ...integers)
    }

const leastCommonMultiple: <IntegerType extends Integer>(...integers: IntegerType[]) => IntegerType =
    <IntegerType extends Integer>(...integers: IntegerType[]): IntegerType =>
        common(integers, lowestCommonMultipleOfTwoNumbers) as IntegerType

const greatestCommonDivisor: <IntegerType extends Integer>(...integers: IntegerType[]) => IntegerType =
    <IntegerType extends Integer>(...integers: IntegerType[]): IntegerType =>
        common(integers, greatestCommonDivisorOfTwoNumbers) as IntegerType

export {
    leastCommonMultiple,
    greatestCommonDivisor,
}
