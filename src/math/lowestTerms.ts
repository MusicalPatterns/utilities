import { Fraction, Integer, to } from '../nominal'
import { greatestCommonDivisor } from './common'
import { quotient } from './typedOperations'

const lowestTerms: (fraction: Fraction) => Fraction =
    ([ numerator, denominator ]: Fraction): Fraction => {
        const gcd: Integer = greatestCommonDivisor(numerator, denominator)

        return [
            quotient(numerator, to.Numerator(gcd)),
            quotient(denominator, to.Denominator(gcd)),
        ]
    }

export {
    lowestTerms,
}
