import { Integer, Ratio, to } from '../nominal'
import { greatestCommonDivisor } from './common'
import { quotient } from './typedOperations'

const lowestTerms: (ratio: Ratio) => Ratio =
    ([ numerator, denominator ]: Ratio): Ratio => {
        const gcd: Integer = greatestCommonDivisor(numerator, denominator)

        return [
            quotient(numerator, to.Numerator(gcd)),
            quotient(denominator, to.Denominator(gcd)),
        ]
    }

export {
    lowestTerms,
}
