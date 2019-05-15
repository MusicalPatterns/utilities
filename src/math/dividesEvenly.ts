// tslint:disable no-any

import { WholeVersion } from '../nominal'
import { floor } from './typedOperations'

const dividesEvenly: <NumericValue extends Number, AnotherNumericValue extends Number>(
    numeral: NumericValue,
    modulus: AnotherNumericValue,
) => boolean =
    <NumericValue extends Number, AnotherNumericValue extends Number>(
        numeral: NumericValue,
        modulus: AnotherNumericValue,
    ): boolean =>
        numeral as unknown as number % (modulus as unknown as number) === 0

const integerDivide: <NumericValue extends Number, AnotherNumericValue extends Number>(
    numeral: NumericValue,
    modulus: AnotherNumericValue,
) => WholeVersion<NumericValue> =
    <NumericValue extends Number, AnotherNumericValue extends Number>(
        numeral: NumericValue,
        modulus: AnotherNumericValue,
    ): WholeVersion<NumericValue> =>
        floor(numeral as unknown as number / (modulus as unknown as number)) as unknown as WholeVersion<NumericValue>

export {
    dividesEvenly,
    integerDivide,
}
