// tslint:disable variable-name max-file-line-count ban-types

import * as from from './from'
import * as to from './to'
import {
    Base,
    Cardinal,
    Cycle,
    Denominator,
    Fraction,
    Modulus,
    Numerator,
    Ordinal,
    Power,
    Scalar,
    Translation,
} from './types'

const isCycle: (value: unknown) => value is Cycle<unknown> =
    (value: unknown): value is Cycle<unknown> =>
        value && (value as Cycle<unknown>)._CycleBrand

const wrapWithin: <T, U extends Number>(value: T, within: U) => T =
    <T, U extends Number>(value: T, within: U): T => {
        let newN: number = value as unknown as number
        const withinN: number = within as unknown as number

        while (newN < 0) {
            newN += withinN
        }
        while (newN >= withinN) {
            newN -= withinN
        }

        return newN as unknown as T
    }

const Base: <T, U extends Number>(value: T, base: Base<U>) => T =
    <T, U extends Number>(value: T, base: Base<U>): T =>
        Math.log(value as unknown as number) / Math.log(base as unknown as number) as unknown as T

const Translation: <T, U extends Number>(value: T, translation: Translation<U>) => T =
    <T, U extends Number>(value: T, translation: Translation<U>): T => {
        if (isCycle(value)) {
            const cycle: Cycle<T> = value as unknown as Cycle<T>
            const cycledCycle: Cycle<T> = to.Cycle([])
            const cellCount: Cardinal = to.Cardinal(cycle.length)

            for (
                let index: Ordinal = to.Ordinal(0);
                index < to.Ordinal(from.Cardinal(cellCount));
                index = Translation(index, to.Translation(1))
            ) {
                let cycledIndex: Ordinal = Translation(index, to.Translation(-from.Translation(translation)))
                cycledIndex = wrapWithin(cycledIndex, cellCount)
                cycledCycle.push(cycle[ from.Ordinal(cycledIndex) ])
            }

            return cycledCycle as unknown as T
        }

        return value as unknown as number + from.Translation(translation) as unknown as T
    }

const Power: <T, U extends Number>(base: T, power: Power<U>) => T =
    <T, U extends Number>(base: T, power: Power<U>): T =>
        Math.pow(base as unknown as number, power as unknown as number) as unknown as T

const Scalar: <T, U extends Number>(value: T, scalar: Scalar<U>) => T =
    <T, U extends Number>(value: T, scalar: Scalar<U>): T =>
        value as unknown as number * from.Scalar(scalar) as unknown as T

const Ordinal: <T>(array: T[] | Cycle<T>, ordinal: Ordinal) => T =
    <T>(array: T[] | Cycle<T>, ordinal: Ordinal): T => {
        // tslint:disable-next-line strict-type-predicates
        if (isCycle(array)) {
            const cycledIndex: Ordinal = wrapWithin(ordinal, array.length)

            return array[ from.Ordinal(cycledIndex) ]
        }

        return array[ from.Ordinal(ordinal) ]
    }

const Modulus: <T, U extends Number>(value: T, modulus: Modulus<U>) => T =
    <T, U extends Number>(value: T, modulus: Modulus<U>): T =>
        value as unknown as number % from.Modulus(modulus) as unknown as T

const Numerator: (denominator: Denominator, numerator: Numerator) => Fraction =
    (denominator: Denominator, numerator: Numerator): Fraction =>
        [ numerator, denominator ]

const Denominator: (numerator: Numerator, denominator: Denominator) => Fraction =
    (numerator: Numerator, denominator: Denominator): Fraction =>
        [ numerator, denominator ]

export {
    Cardinal,
    Base,
    Translation,
    Power,
    Scalar,
    Ordinal,
    Modulus,
    Numerator,
    Denominator,
}
