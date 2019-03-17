// tslint:disable ban-types

const isLessThan:
    <NumericType extends Number>(firstValue: NumericType, secondValue: NumericType) => boolean =
    <NumericType extends Number>(firstValue: NumericType, secondValue: NumericType): boolean =>
        firstValue < secondValue

const isGreaterThan:
    <NumericType extends Number>(firstValue: NumericType, secondValue: NumericType) => boolean =
    <NumericType extends Number>(firstValue: NumericType, secondValue: NumericType): boolean =>
        firstValue > secondValue

const isLessThanOrEqualTo:
    <NumericType extends Number>(firstValue: NumericType, secondValue: NumericType) => boolean =
    <NumericType extends Number>(firstValue: NumericType, secondValue: NumericType): boolean =>
        firstValue <= secondValue

const isGreaterThanOrEqualTo:
    <NumericType extends Number>(firstValue: NumericType, secondValue: NumericType) => boolean =
    <NumericType extends Number>(firstValue: NumericType, secondValue: NumericType): boolean =>
        firstValue >= secondValue

export {
    isGreaterThan,
    isLessThan,
    isGreaterThanOrEqualTo,
    isLessThanOrEqualTo,
}
