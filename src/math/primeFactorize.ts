import { arraySet, computeLength, indexOfFinalElement, map } from '../code'
import {
    as,
    Fraction,
    INCREMENT,
    INITIAL,
    Integer,
    isFraction,
    Monzo,
    NEXT,
    ONE,
    Ordinal,
    Remaindee,
    use,
    Whole,
    ZERO,
} from '../nominal'
import { PRIMES } from './constants'
import { integerDivide } from './dividesEvenly'
import { getDenominator, getNumerator } from './fractions'
import { difference } from './typedOperations'

const primeFactorize: (integerOrFraction: Integer | Fraction) => Monzo =
    (integerOrFraction: Integer | Fraction): Monzo => {
        if (isFraction(integerOrFraction)) {
            return primeFactorizeFraction(integerOrFraction)
        }

        return primeFactorizeInteger(integerOrFraction)
    }

const primeFactorizeFraction: (fraction: Fraction) => Monzo =
    (fraction: Fraction): Monzo => {
        const positiveFactors: Monzo = primeFactorizeInteger(getNumerator(fraction))
        const negativeFactors: Monzo = primeFactorizeInteger(getDenominator(fraction))

        while (computeLength(positiveFactors) < computeLength(negativeFactors)) {
            positiveFactors.push(ZERO)
        }

        return as.Monzo(map(
            positiveFactors,
            (positiveFactor: Integer, index: Ordinal<Monzo>): Integer => {
                const negativeFactor: Integer = use.Ordinal(negativeFactors, index)

                return difference(positiveFactor, negativeFactor)
            },
        ))
    }

const primeFactorizeInteger: (integer: Whole) => Monzo =
    (integer: Whole): Monzo => {
        if (integer === ZERO) {
            throw new Error('The prime factorization of zero is not defined.')
        }

        const monzo: Monzo = as.Monzo([])
        let remnant: Whole = integer

        const computePrimeFactorizationForPrimeAtIndexAndUpdateRemnant: (index: Ordinal<Integer[]>) => void =
            (index: Ordinal<Integer[]>): void => {
            const divisor: Remaindee<Integer> = as.Remaindee<Integer>(as.number(use.Ordinal(PRIMES, index)))
            let remainder: Whole = use.Remaindee(remnant, divisor)

            if (remainder === ZERO) {
                while (as.number(computeLength(monzo)) <= as.number(index)) {
                    monzo.push(ZERO)
                }

                while (remainder === ZERO) {
                    remnant = integerDivide(remnant, divisor)
                    arraySet(monzo, index, use.Cardinal(use.Ordinal(monzo, index), INCREMENT))
                    remainder = use.Remaindee(remnant, divisor)
                }
            }
        }

        for (
            let index: Ordinal<Integer[]> = INITIAL;
            index <= indexOfFinalElement(PRIMES);
            index = use.Cardinal(index, NEXT)
        ) {
            computePrimeFactorizationForPrimeAtIndexAndUpdateRemnant(index)

            if (remnant === ONE) {
                break
            }
        }

        return monzo
    }

export {
    primeFactorize,
}
