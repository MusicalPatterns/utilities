const isPositive: <NumericValue extends Number = Number>(value: NumericValue) => boolean =
    <NumericValue extends Number = Number>(value: NumericValue): boolean =>
        value as unknown as number > 0

const isNegative: <NumericValue extends Number = Number>(value: NumericValue) => boolean =
    <NumericValue extends Number = Number>(value: NumericValue): boolean =>
        value as unknown as number < 0

export {
    isPositive,
    isNegative,
}
