import { allElementsEqual, isEmpty, isSingleton } from '../code'
import { from, Integer, Integerlike, to, TWO } from '../nominal'
import { absoluteValue, modulus, product, quotient } from './typedOperations'
import { IntegerOperation } from './types'

const computeLowestCommonMultipleOfTwoNumbers: <IntegerType extends Integerlike = Integer>(
    firstValue: IntegerType,
    secondValue: IntegerType,
) => IntegerType =
    <IntegerType extends Integerlike = Integer>(firstValue: IntegerType, secondValue: IntegerType): IntegerType =>
        absoluteValue(quotient(
            product(firstValue, secondValue) as unknown as IntegerType,
            computeGreatestCommonDivisor(firstValue, secondValue),
        )) as unknown as IntegerType

const computeGreatestCommonDivisorOfTwoNumbers: <IntegerType extends Integerlike = Integer>(
    firstValue: IntegerType,
    secondValue: IntegerType,
) => IntegerType =
    <IntegerType extends Integerlike = Integer>(firstValue: IntegerType, secondValue: IntegerType): IntegerType => {
        let output: IntegerType = firstValue
        let remainder: IntegerType = secondValue
        while (remainder) {
            const previousRemainder: IntegerType = remainder
            remainder = modulus(output, remainder) as unknown as IntegerType
            output = previousRemainder
        }

        return output
    }

const recurseCommon: <IntegerType extends Integerlike = Integer>(
    commonFunction: IntegerOperation<IntegerType>,
    ...integers: IntegerType[]
) => IntegerType =
    <IntegerType extends Integerlike = Integer>(
        commonFunction: IntegerOperation<IntegerType>,
        ...integers: IntegerType[]
    ): IntegerType => {
        if (isSingleton(integers)) {
            return integers[ 0 ]
        }
        if (isEmpty(integers)) {
            return 1 as unknown as IntegerType
        }

        const result: IntegerType = commonFunction(integers[ 0 ], integers[ 1 ])
        if (to.Integer(integers.length) === TWO) {
            return result
        }

        return recurseCommon(commonFunction, result, ...integers.slice(from.Integer(TWO)))
    }

const computeCommon: <IntegerType extends Integerlike>(
    integers: IntegerType[],
    commonFunction: IntegerOperation<IntegerType>,
) => IntegerType =
    <IntegerType extends Integerlike>(
        integers: IntegerType[],
        commonFunction: IntegerOperation<IntegerType>,
    ): IntegerType => {
        if (isEmpty(integers)) {
            return 1 as unknown as IntegerType
        }

        if (allElementsEqual(integers)) {
            return integers[ 0 ]
        }

        return recurseCommon(commonFunction, ...integers)
    }

const computeLeastCommonMultiple: <IntegerType extends Integerlike>(...integers: IntegerType[]) => IntegerType =
    <IntegerType extends Integerlike>(...integers: IntegerType[]): IntegerType =>
        computeCommon(integers, computeLowestCommonMultipleOfTwoNumbers)

const computeGreatestCommonDivisor: <IntegerType extends Integerlike>(...integers: IntegerType[]) => IntegerType =
    <IntegerType extends Integerlike>(...integers: IntegerType[]): IntegerType =>
        computeCommon(integers, computeGreatestCommonDivisorOfTwoNumbers)

export {
    computeLeastCommonMultiple,
    computeGreatestCommonDivisor,
}
