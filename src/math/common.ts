import { allElementsEqual, isEmpty, isSingleton } from '../code'
import { as, Integer, TWO, Whole } from '../nominal'
import { absoluteValue, modulus, product, quotient } from './typedOperations'
import { ManyToOneIntegerOperation, TwoToOneIntegerOperation } from './types'

const computeLowestCommonMultipleOfTwoNumbers: <WholeType extends Whole = Integer>(
    firstValue: WholeType,
    secondValue: WholeType,
) => WholeType =
    <WholeType extends Whole = Integer>(firstValue: WholeType, secondValue: WholeType): WholeType =>
        absoluteValue(quotient(
            product(firstValue, secondValue) as unknown as WholeType,
            computeGreatestCommonDivisor(firstValue, secondValue),
        )) as unknown as WholeType

const computeGreatestCommonDivisorOfTwoNumbers: <WholeType extends Whole = Integer>(
    firstValue: WholeType,
    secondValue: WholeType,
) => WholeType =
    <WholeType extends Whole = Integer>(firstValue: WholeType, secondValue: WholeType): WholeType => {
        let output: WholeType = firstValue
        let remainder: WholeType = secondValue
        while (remainder) {
            const previousRemainder: WholeType = remainder
            remainder = modulus(output, remainder) as unknown as WholeType
            output = previousRemainder
        }

        return output
    }

const recurseCommon: <WholeType extends Whole = Integer>(
    commonFunction: TwoToOneIntegerOperation<WholeType>,
    ...integers: WholeType[]
) => WholeType =
    <WholeType extends Whole = Integer>(
        commonFunction: TwoToOneIntegerOperation<WholeType>,
        ...integers: WholeType[]
    ): WholeType => {
        if (isSingleton(integers)) {
            return integers[ 0 ]
        }
        if (isEmpty(integers)) {
            return 1 as unknown as WholeType
        }

        const result: WholeType = commonFunction(integers[ 0 ], integers[ 1 ])
        if (as.Integer(integers.length) === TWO) {
            return result
        }

        return recurseCommon(commonFunction, result, ...integers.slice(TWO))
    }

const computeCommon: <WholeType extends Whole = Integer>(
    integers: WholeType[],
    commonFunction: TwoToOneIntegerOperation<WholeType>,
) => WholeType =
    <WholeType extends Whole = Integer>(
        integers: WholeType[],
        commonFunction: TwoToOneIntegerOperation<WholeType>,
    ): WholeType => {
        if (isEmpty(integers)) {
            return 1 as unknown as WholeType
        }

        if (allElementsEqual(integers)) {
            return integers[ 0 ]
        }

        return recurseCommon(commonFunction, ...integers)
    }

const computeLeastCommonMultiple: ManyToOneIntegerOperation =
    <WholeType extends Whole = Integer>(...integers: WholeType[]): WholeType =>
        computeCommon(integers, computeLowestCommonMultipleOfTwoNumbers)

const computeGreatestCommonDivisor: ManyToOneIntegerOperation =
    <WholeType extends Whole = Integer>(...integers: WholeType[]): WholeType =>
        computeCommon(integers, computeGreatestCommonDivisorOfTwoNumbers)

export {
    computeLeastCommonMultiple,
    computeGreatestCommonDivisor,
}
