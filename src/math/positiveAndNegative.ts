const isPositive: <NumericType extends Number>(value: NumericType) => boolean =
    <NumericType extends Number = Number>(value: NumericType): boolean =>
        value as unknown as number > 0

const isNegative: <NumericType extends Number>(value: NumericType) => boolean =
    <NumericType extends Number = Number>(value: NumericType): boolean =>
        value as unknown as number < 0

export {
    isPositive,
    isNegative,
}
