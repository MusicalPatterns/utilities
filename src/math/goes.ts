import { every, finalElement, initialElement, isEmpty, isUndefined } from '../code'
import { isCloseTo } from './isCloseTo'

const beginValueIsCorrect: <NumericElementType extends Number>(
    array: NumericElementType[],
    expectedBeginValue: NumericElementType,
    precision?: number,
) => boolean =
    <NumericElementType extends Number>(
        array: NumericElementType[],
        expectedBeginValue: NumericElementType,
        precision?: number,
    ): boolean => {
        if (isUndefined(precision)) {
            return initialElement(array) === expectedBeginValue
        }

        return isCloseTo(initialElement(array), expectedBeginValue, precision)
    }

const goesFromValueToValue: <NumericElementType extends Number>(
    array: NumericElementType[],
    expectedBeginValue: NumericElementType,
    expectedEndValue: NumericElementType,
    precision?: number,
) => boolean =
    // tslint:disable-next-line cyclomatic-complexity
    <NumericElementType extends Number>(
        array: NumericElementType[],
        expectedBeginValue: NumericElementType,
        expectedEndValue: NumericElementType,
        precision?: number,
    ): boolean => {
        if (isUndefined(precision)) {
            if (initialElement(array) !== expectedBeginValue || finalElement(array) !== expectedEndValue) {
                return false
            }
        }
        else {
            if (
                !isCloseTo(initialElement(array), expectedBeginValue, precision) ||
                !isCloseTo(finalElement(array), expectedEndValue, precision)
            ) {
                return false
            }
        }

        return true
    }

const allValuesAreTheSame: <NumericElementType extends Number>(
    array: NumericElementType[],
    manualExpectedValue?: NumericElementType,
    precision?: number,
) => boolean =
    <NumericElementType extends Number>(
        array: NumericElementType[],
        manualExpectedValue?: NumericElementType,
        precision?: number,
    ): boolean => {
        if (isEmpty(array)) {
            return true
        }

        const expectedValue: NumericElementType = isUndefined(manualExpectedValue) ?
            initialElement(array) :
            manualExpectedValue

        return every(array, (value: NumericElementType): boolean => {
            if (isUndefined(precision)) {
                if (value !== expectedValue) {
                    return false
                }
            }
            else {
                if (!isCloseTo(value, expectedValue, precision)) {
                    return false
                }
            }

            return true
        })
    }

export {
    allValuesAreTheSame,
    goesFromValueToValue,
    beginValueIsCorrect,
}
