// tslint:disable variable-name max-file-line-count max-line-length arrow-return-shorthand unified-signatures

import { finalIndexFromElementsTotal } from '../code'
import * as as from './as'
import { indexCheck, integerCheck, unitCheck } from './checks'
import * as notAs from './notAs'
import { isCycle } from './typeGuards'
import {
    ArrayOverload,
    Base,
    Cardinal,
    Cycle,
    Denominator,
    Exponent,
    Fraction,
    IntegerModulus,
    Logarithm,
    Modulus,
    Multiple,
    NaturalUseOfableWithArrayOverloadActive,
    NonUnit,
    Numerator,
    Ordinal,
    Power,
    Rotation,
    Scalar,
    Translation,
    Transposition,
    UnitScalar,
} from './types'

// Natural Units

const Numerator: (denominator: Denominator, numerator: Numerator) => Fraction =
    (denominator: Denominator, numerator: Numerator): Fraction =>
        [ numerator, denominator ]
const Denominator: (numerator: Numerator, denominator: Denominator) => Fraction =
    (numerator: Numerator, denominator: Denominator): Fraction =>
        [ numerator, denominator ]

// Unnatural Transformation Uses

const Scalar: <OfType extends Number>(value: OfType, scalar: Scalar<OfType>) => OfType =
    <OfType extends Number>(value: OfType, scalar: Scalar<OfType>): OfType =>
        // If is array or cycle, apply to every member
        value as unknown as number * (scalar as unknown as number) as unknown as OfType
const Translation: <OfType extends Number>(value: OfType, translation: Translation<OfType>) => OfType =
    <OfType extends Number>(value: OfType, translation: Translation<OfType>): OfType =>
        // If is array or cycle, apply to every member
        value as unknown as number + (translation as unknown as number) as unknown as OfType
const Rotation: <OfType extends Number>(value: OfType, rotation: Rotation<OfType>) => OfType =
    <OfType extends Number>(value: OfType, rotation: Rotation<OfType>): OfType =>
        // If is array or cycle, apply to every member
        value as unknown as OfType

// Unnatural Non-Transformation Uses

const Exponent: <OfType extends Number>(value: OfType, exponent: Exponent<OfType>) => OfType =
    <OfType extends Number>(value: OfType, exponent: Exponent<OfType>): OfType =>
        // If is array or cycle, apply to every member
        Math.pow(value as unknown as number, exponent as unknown as number) as unknown as OfType
const Logarithm: <OfType extends Number>(value: OfType, logarithm: Logarithm<OfType>) => OfType =
    <OfType extends Number>(value: OfType, logarithm: Logarithm<OfType>): OfType =>
        // If is array or cycle, apply to every member
        Math.log(value as unknown as number) / Math.log(logarithm as unknown as number) as unknown as OfType
const Modulus: <OfType extends Number>(value: OfType, modulus: Modulus<OfType>) => OfType =
    <OfType extends Number>(value: OfType, modulus: Modulus<OfType>): OfType => {
        // If is array or cycle, apply to every member
        let result: number = value as unknown as number
        const rawModulus: number = modulus as unknown as number

        while (result < 0) {
            result += rawModulus
        }
        while (result >= rawModulus) {
            result -= rawModulus
        }

        return result as unknown as OfType
    }

// Natural Transformation Uses (with overloads for arrays)

const Multiple: {
    <OfType extends NonUnit>(value: OfType, multiple: Multiple<OfType>): OfType,
    <OfType extends ArrayOverload>(value: OfType, multiple: Multiple<OfType>): OfType,
} =
    <OfType extends NaturalUseOfableWithArrayOverloadActive>(value: OfType, multiple: Multiple<OfType>): OfType => {
        // If is array or cycle, return special array overload here

        return Scalar(
            value as unknown as number,
            integerCheck(multiple, 'Multiple') as unknown as Scalar,
        ) as unknown as OfType
    }
const Cardinal: {
    <OfType extends NonUnit>(value: OfType, cardinal: Cardinal<OfType>): OfType,
    <OfType extends ArrayOverload>(value: OfType, cardinal: Cardinal<OfType>): OfType,
} =
    <OfType extends NaturalUseOfableWithArrayOverloadActive>(value: OfType, cardinal: Cardinal<OfType>): OfType => {
        if (isCycle(value)) {
            const cycle: Cycle<OfType> = value as unknown as Cycle<OfType>
            const cycledCycle: Cycle<OfType> = as.Cycle([])
            const cellCount: Cardinal<Cycle<OfType>> = as.Cardinal<Cycle<OfType>>(cycle.length)

            for (
                let index: Ordinal<Cycle<OfType>> = as.Ordinal<Cycle<OfType>>(0);
                index <= finalIndexFromElementsTotal(cellCount);
                index = Cardinal(index, as.Transition<Cycle<OfType>>(1))
            ) {
                let cycledIndex: Ordinal<Cycle<OfType>> = Cardinal(
                    index,
                    as.Transition<Cycle<OfType>>(-notAs.Cardinal(cardinal as unknown as Cardinal)),
                )
                cycledIndex = IntegerModulus(
                    cycledIndex,
                    as.IntegerModulus<Ordinal<Cycle<OfType>>>(notAs.Cardinal<Cycle<OfType>>(cellCount)),
                )
                cycledCycle.push(cycle[ notAs.Ordinal<Cycle<OfType>>(cycledIndex) ])
            }

            return cycledCycle as unknown as OfType
        }

        return Translation(
            value as unknown as number,
            integerCheck(cardinal, 'Cardinal') as unknown as Translation,
        ) as unknown as OfType
    }
const Transposition: {
    <OfType extends NonUnit>(value: OfType, transposition: Transposition<OfType>): OfType,
    <OfType extends ArrayOverload>(value: OfType, transposition: Transposition<OfType>): OfType,
} =
    <OfType extends NaturalUseOfableWithArrayOverloadActive>(value: OfType, transposition: Transposition<OfType>): OfType => {
        // If is array or cycle, return special array overload here

        return Rotation(
            value as unknown as number,
            integerCheck(transposition, 'Transposition') as unknown as Rotation,
        ) as unknown as OfType
    }

// Natural Non-Transformation Uses

const Power: <OfType extends NonUnit>(value: OfType, power: Power<OfType>) => OfType =
    <OfType extends Number>(value: OfType, power: Power<OfType>): OfType =>
        Exponent(value, integerCheck(power, 'Power'))
const Base: <OfType extends NonUnit>(value: OfType, base: Base<OfType>) => OfType =
    <OfType extends Number>(value: OfType, base: Base<OfType>): OfType =>
        Logarithm(value, integerCheck(base, 'Base'))
const IntegerModulus: <OfType extends NonUnit>(value: OfType, integerModulus: IntegerModulus<OfType>) => OfType =
    <OfType extends Number>(value: OfType, integerModulus: IntegerModulus<OfType>): OfType =>
        Modulus(value, integerCheck(integerModulus, 'Base'))

// Natural Fixed Uses (only used for arrays)

const Ordinal: {
    <ElementType>(array: Cycle<ElementType>, index: Ordinal<Cycle<ElementType>>): ElementType,
    <ElementType>(array: ElementType[], index: Ordinal<ElementType[]>): ElementType,
} =
    <ElementType>(array: ElementType[], index: Ordinal<ElementType[]>): ElementType => {
        if (isCycle(array)) {
            const cycleIndex: Ordinal<Cycle<ElementType>> = index as Ordinal<Cycle<ElementType>>
            const cycledIndex: Ordinal<Cycle<ElementType>> = IntegerModulus(
                cycleIndex,
                as.IntegerModulus<Ordinal<Cycle<ElementType>>>(array.length),
            )

            return array[ notAs.Ordinal(cycledIndex as unknown as Ordinal) ]
        }

        indexCheck(index, array)

        return array[ notAs.Ordinal(index as unknown as Ordinal) ]
    }

// Unit Uses

const UnitScalar: <OfType extends Number>(value: OfType, unitScalar: UnitScalar<OfType>) => OfType =
    <OfType extends Number>(value: OfType, unitScalar: UnitScalar<OfType>): OfType =>
        Scalar(value, unitCheck(unitScalar, 'UnitScalar'))

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
    UnitScalar,
    Multiple,
    Exponent,
    Logarithm,
    IntegerModulus,
    Transposition,
}
