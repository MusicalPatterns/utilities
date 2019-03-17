// tslint:disable variable-name max-file-line-count ban-types

import { totalElements } from '../code'
import * as from from './from'
import * as to from './to'
import { isCycle } from './typeGuards'
import {
    Base,
    Cardinal,
    Cycle,
    Denominator,
    Fraction,
    Modulus,
    NormalScalar,
    NoUnits,
    Numerator,
    Ordinal,
    Power,
    Scalar,
    Translation,
} from './types'

const Base: <ValueType, UnitsType extends Number = NoUnits>(value: ValueType, base: Base<UnitsType>) => ValueType =
    <ValueType, UnitsType extends Number = NoUnits>(value: ValueType, base: Base<UnitsType>): ValueType =>
        Math.log(value as unknown as number) / Math.log(base as unknown as number) as unknown as ValueType

const Translation: <ValueType, UnitsType extends Number = NoUnits>(
    value: ValueType,
    translation: Translation<UnitsType>,
) => ValueType =
    <ValueType, UnitsType extends Number = NoUnits>(
        value: ValueType,
        translation: Translation<UnitsType>,
    ): ValueType => {
        if (isCycle(value)) {
            const cycle: Cycle<ValueType> = value as unknown as Cycle<ValueType>
            const cycledCycle: Cycle<ValueType> = to.Cycle([])
            const cellCount: Cardinal = totalElements(cycle)

            for (
                let index: Ordinal = to.Ordinal(0);
                index < to.Ordinal(from.Cardinal(cellCount));
                index = Translation(index, to.Translation(1))
            ) {
                let cycledIndex: Ordinal = Translation(index, to.Translation(-from.Translation(translation)))
                cycledIndex = Modulus(cycledIndex, cellCount)
                cycledCycle.push(cycle[ from.Ordinal(cycledIndex) ])
            }

            return cycledCycle as unknown as ValueType
        }

        return value as unknown as number + from.Translation(translation) as unknown as ValueType
    }

const Power: <ValueType, UnitsType extends Number = NoUnits>(
    base: ValueType,
    power: Power<UnitsType>,
) => ValueType =
    <ValueType, UnitsType extends Number = NoUnits>(
        base: ValueType,
        power: Power<UnitsType>,
    ): ValueType =>
        Math.pow(base as unknown as number, power as unknown as number) as unknown as ValueType

const Scalar: <ValueType, UnitsType extends Number = NoUnits>(
    value: ValueType,
    scalar: Scalar<UnitsType>,
) => ValueType =
    <ValueType, UnitsType extends Number = NoUnits>(
        value: ValueType,
        scalar: Scalar<UnitsType>,
    ): ValueType =>
        value as unknown as number * from.Scalar(scalar) as unknown as ValueType

const NormalScalar: <ValueType, UnitsType extends Number = NoUnits>(
    value: ValueType,
    scalar: NormalScalar<UnitsType>,
) => ValueType =
    <ValueType, UnitsType extends Number = NoUnits>(
        value: ValueType,
        scalar: NormalScalar<UnitsType>,
    ): ValueType =>
        value as unknown as number * from.NormalScalar(scalar) as unknown as ValueType

const Ordinal: <ElementType>(array: ElementType[] | Cycle<ElementType>, ordinal: Ordinal) => ElementType =
    <ElementType>(array: ElementType[] | Cycle<ElementType>, ordinal: Ordinal): ElementType => {
        // tslint:disable-next-line strict-type-predicates
        if (isCycle(array)) {
            const cycledIndex: Ordinal = Modulus(ordinal, array.length as unknown as Modulus)

            return array[ from.Ordinal(cycledIndex) ]
        }

        if (ordinal > array.length - 1) {
            throw new Error(`Ordinal ${ordinal} exceeds available indices of array of length ${array.length}`)
        }

        return array[ from.Ordinal(ordinal) ]
    }

const Modulus:
    <ValueType, UnitsType extends Number = NoUnits>(value: ValueType, modulus: Modulus<UnitsType>) => ValueType =
    <ValueType, UnitsType extends Number = NoUnits>(value: ValueType, modulus: Modulus<UnitsType>): ValueType => {
        let result: number = value as unknown as number
        const rawModulus: number = modulus as unknown as number

        while (result < 0) {
            result += rawModulus
        }
        while (result >= rawModulus) {
            result -= rawModulus
        }

        return result as unknown as ValueType
    }

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
    NormalScalar,
}
