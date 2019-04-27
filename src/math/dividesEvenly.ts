// tslint:disable no-any

const dividesEvenly: <NumericValue extends Number, AnotherNumericValue extends Number>(
    numeral: NumericValue,
    modulus: AnotherNumericValue,
) => boolean =
    <NumericValue extends Number, AnotherNumericValue extends Number>(
        numeral: NumericValue,
        modulus: AnotherNumericValue,
    ): boolean =>
        numeral as unknown as number % (modulus as unknown as number) === 0

export {
    dividesEvenly,
}
