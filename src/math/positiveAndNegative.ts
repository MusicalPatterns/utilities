const isPositive: <NumericType extends Number>(numeral: NumericType) => boolean =
    <NumericType extends Number = Number>(numeral: NumericType): boolean =>
        numeral as unknown as number > 0

const isNegative: <NumericType extends Number>(numeral: NumericType) => boolean =
    <NumericType extends Number = Number>(numeral: NumericType): boolean =>
        numeral as unknown as number < 0

export {
    isPositive,
    isNegative,
}
