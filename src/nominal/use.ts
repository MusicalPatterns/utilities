// tslint:disable variable-name max-file-line-count max-line-length arrow-return-shorthand unified-signatures

import { finalIndexFromElementsTotal } from '../code'
import * as as from './as'
import { integerCheck, normalCheck, ordinalCheck } from './checks'
import { isCycle } from './typeGuards'
import {
    Arc,
    ArrayedType,
    Base,
    CanBeAsAWholeUseWithAnArrayOverloadOfSomeType,
    Cardinal,
    Cycle,
    Delta,
    Denominator,
    Exponent,
    Factor,
    Fraction,
    Interval,
    Logarithm,
    Modulus,
    Multiple,
    NonNormal,
    NormalScalar,
    Numerator,
    Ordinal,
    Power,
    Remaindee,
    Rotation,
    Scalar,
    Transition,
    Translation,
    Transposition,
    Turn,
    Unwhole,
} from './types'

// Whole Units

const Numerator: (denominator: Denominator, numerator: Numerator) => Fraction =
    (denominator: Denominator, numerator: Numerator): Fraction =>
        [ numerator, denominator ]
const Denominator: (numerator: Numerator, denominator: Denominator) => Fraction =
    (numerator: Numerator, denominator: Denominator): Fraction =>
        [ numerator, denominator ]

// Unwhole Transformation Uses

const Scalar: <OfType extends Unwhole>(value: OfType, scalar: Scalar<OfType>) => OfType =
    <OfType extends Unwhole>(value: OfType, scalar: Scalar<OfType>): OfType =>
        // If is array or cycle, apply to every member
        value as unknown as number * (scalar as unknown as number) as unknown as OfType
const Translation: <OfType extends Unwhole>(value: OfType, translation: Translation<OfType>) => OfType =
    <OfType extends Unwhole>(value: OfType, translation: Translation<OfType>): OfType =>
        // If is array or cycle, apply to every member
        value as unknown as number + (translation as unknown as number) as unknown as OfType
const Rotation: <OfType extends Unwhole>(value: OfType, rotation: Rotation<OfType>) => OfType =
    <OfType extends Unwhole>(value: OfType, rotation: Rotation<OfType>): OfType =>
        // If is array or cycle, apply to every member
        value as unknown as OfType

// Unwhole Non-Transformation Uses

const Exponent: <OfType extends Unwhole>(value: OfType, exponent: Exponent<OfType>) => OfType =
    <OfType extends Unwhole>(value: OfType, exponent: Exponent<OfType>): OfType =>
        // If is array or cycle, apply to every member
        Math.pow(value as unknown as number, exponent as unknown as number) as unknown as OfType
const Logarithm: <OfType extends Unwhole>(value: OfType, logarithm: Logarithm<OfType>) => OfType =
    <OfType extends Unwhole>(value: OfType, logarithm: Logarithm<OfType>): OfType =>
        // If is array or cycle, apply to every member
        Math.log(value as unknown as number) / Math.log(logarithm as unknown as number) as unknown as OfType
const Modulus: <OfType extends Unwhole>(value: OfType, modulus: Modulus<OfType>) => OfType =
    <OfType extends Unwhole>(value: OfType, modulus: Modulus<OfType>): OfType => {
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

// Unwhole Compound Uses

const Interval: <OfType extends Unwhole>(value: OfType, interval: Interval<OfType>) => OfType =
    <OfType extends Unwhole>(value: OfType, interval: Interval<OfType>): OfType =>
        Scalar(value as unknown as number, interval as unknown as Scalar) as unknown as OfType
const Delta: <OfType extends Unwhole>(value: OfType, delta: Delta<OfType>) => OfType =
    <OfType extends Unwhole>(value: OfType, delta: Delta<OfType>): OfType =>
        Translation(value as unknown as number, delta as unknown as Translation) as unknown as OfType
const Arc: <OfType extends Unwhole>(value: OfType, arc: Arc<OfType>) => OfType =
    <OfType extends Unwhole>(value: OfType, arc: Arc<OfType>): OfType =>
        Rotation(value as unknown as number, arc as unknown as Rotation) as unknown as OfType

// Whole Transformation Uses (with overloads for arrays)

const Multiple: {
    <OfType extends NonNormal>(value: OfType, multiple: Multiple<OfType>): OfType,
    <OfType extends ArrayedType>(value: OfType, multiple: Multiple<OfType>): OfType,
} =
    <OfType extends CanBeAsAWholeUseWithAnArrayOverloadOfSomeType>(value: OfType, multiple: Multiple<OfType>): OfType => {
        // If is array or cycle, return special array overload here

        return Scalar(
            value as unknown as number,
            integerCheck(multiple, 'Multiple') as unknown as Scalar,
        ) as unknown as OfType
    }
const Cardinal: {
    <OfType extends NonNormal>(value: OfType, cardinal: Cardinal<OfType>): OfType,
    <OfType extends ArrayedType>(value: OfType, cardinal: Cardinal<OfType>): OfType,
} =
    <OfType extends CanBeAsAWholeUseWithAnArrayOverloadOfSomeType>(value: OfType, cardinal: Cardinal<OfType>): OfType => {
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
                    as.Transition<Cycle<OfType>>(-as.number(cardinal as unknown as Cardinal)),
                )
                cycledIndex = Remaindee(
                    cycledIndex,
                    as.Remaindee<Ordinal<Cycle<OfType>>>(as.number(cellCount)),
                )
                cycledCycle.push(cycle[ as.number(cycledIndex) ])
            }

            return cycledCycle as unknown as OfType
        }

        return Translation(
            value as unknown as number,
            integerCheck(cardinal, 'Cardinal') as unknown as Translation,
        ) as unknown as OfType
    }
const Transposition: {
    <OfType extends NonNormal>(value: OfType, transposition: Transposition<OfType>): OfType,
    <OfType extends ArrayedType>(value: OfType, transposition: Transposition<OfType>): OfType,
} =
    <OfType extends CanBeAsAWholeUseWithAnArrayOverloadOfSomeType>(value: OfType, transposition: Transposition<OfType>): OfType => {
        // If is array or cycle, return special array overload here

        return Rotation(
            value as unknown as number,
            integerCheck(transposition, 'Transposition') as unknown as Rotation,
        ) as unknown as OfType
    }

// Whole Non-Transformation Uses

const Power: <OfType extends NonNormal>(value: OfType, power: Power<OfType>) => OfType =
    <OfType extends Number>(value: OfType, power: Power<OfType>): OfType =>
        Exponent(value, integerCheck(power, 'Power'))
const Base: <OfType extends NonNormal>(value: OfType, base: Base<OfType>) => OfType =
    <OfType extends Number>(value: OfType, base: Base<OfType>): OfType =>
        Logarithm(value, integerCheck(base, 'Base'))
const Remaindee: <OfType extends NonNormal>(value: OfType, integerModulus: Remaindee<OfType>) => OfType =
    <OfType extends Number>(value: OfType, integerModulus: Remaindee<OfType>): OfType =>
        Modulus(value, integerCheck(integerModulus, 'Base'))

// Whole Fixed Uses (only used for arrays)

const Ordinal: {
    <ElementType>(array: Cycle<ElementType>, ordinal: Ordinal<Cycle<ElementType>>): ElementType,
    <ElementType>(array: ElementType[], ordinal: Ordinal<ElementType[]>): ElementType,
} =
    <ElementType>(array: ElementType[], ordinal: Ordinal<ElementType[]>): ElementType => {
        if (isCycle(array)) {
            const cycleOrdinal: Ordinal<Cycle<ElementType>> = ordinal as Ordinal<Cycle<ElementType>>
            const cycledOrdinal: Ordinal<Cycle<ElementType>> = Remaindee(
                cycleOrdinal,
                as.Remaindee<Ordinal<Cycle<ElementType>>>(array.length),
            )

            return array[ as.number(cycledOrdinal as unknown as Ordinal) ]
        }

        ordinalCheck(ordinal, array)

        return array[ as.number(ordinal as unknown as Ordinal) ]
    }

// Whole Compound Uses

const Factor: {
    <ElementType>(ordinal: Ordinal<Cycle<ElementType>>, factor: Factor<Cycle<ElementType>>): Ordinal<Cycle<ElementType>>,
    <ElementType>(ordinal: Ordinal<ElementType[]>, factor: Factor<ElementType[]>): Ordinal<ElementType[]>,
} =
    <ElementType>(
        ordinal: Ordinal<ElementType[]> | Ordinal<Cycle<ElementType>>,
        factor: Factor<ElementType[]> | Factor<Cycle<ElementType>>,
    ): Ordinal<ElementType[]> & Ordinal<Cycle<ElementType>> =>
        Multiple(
            ordinal as unknown as number,
            factor as unknown as Multiple,
        ) as unknown as Ordinal<ElementType[]> & Ordinal<Cycle<ElementType>>
const Transition: {
    <ElementType>(ordinal: Ordinal<Cycle<ElementType>>, transition: Transition<Cycle<ElementType>>): Ordinal<Cycle<ElementType>>,
    <ElementType>(ordinal: Ordinal<ElementType[]>, transition: Transition<ElementType[]>): Ordinal<ElementType[]>,
} =
    <ElementType>(
        ordinal: Ordinal<ElementType[]> | Ordinal<Cycle<ElementType>>,
        transition: Transition<ElementType[]> | Transition<Cycle<ElementType>>,
    ): Ordinal<ElementType[]> & Ordinal<Cycle<ElementType>> =>
        Cardinal(
            ordinal as unknown as number,
            transition as unknown as Cardinal,
        ) as unknown as Ordinal<ElementType[]> & Ordinal<Cycle<ElementType>>
const Turn: {
    <ElementType>(ordinal: Ordinal<Cycle<ElementType>>, factor: Turn<Cycle<ElementType>>): Ordinal<Cycle<ElementType>>,
    <ElementType>(ordinal: Ordinal<ElementType[]>, factor: Turn<ElementType[]>): Ordinal<ElementType[]>,
} =
    <ElementType>(
        ordinal: Ordinal<ElementType[]> | Ordinal<Cycle<ElementType>>,
        factor: Turn<ElementType[]> | Turn<Cycle<ElementType>>,
    ): Ordinal<ElementType[]> & Ordinal<Cycle<ElementType>> =>
        Transposition(
            ordinal as unknown as number,
            factor as unknown as Transposition,
        ) as unknown as Ordinal<ElementType[]> & Ordinal<Cycle<ElementType>>

// Normal Uses

const NormalScalar: <OfType extends Number>(value: OfType, normalScalar: NormalScalar<OfType>) => OfType =
    <OfType extends Number>(value: OfType, normalScalar: NormalScalar<OfType>): OfType =>
        Scalar(value, normalCheck(normalScalar, 'NormalScalar'))

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
    Multiple,
    Rotation,
    Exponent,
    Logarithm,
    Remaindee,
    Transposition,
    Interval,
    Delta,
    Arc,
    Factor,
    Transition,
    Turn,
}
