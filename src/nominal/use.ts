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

// Units - Whole

const Numerator: (numeral: Denominator, useNumerator: Numerator) => Fraction =
    (numeral: Denominator, useNumerator: Numerator): Fraction =>
        [ useNumerator, numeral ]
const Denominator: (numeral: Numerator, useDenominator: Denominator) => Fraction =
    (numeral: Numerator, useDenominator: Denominator): Fraction =>
        [ numeral, useDenominator ]

// Uses - Unwhole - Transformation

const Scalar: <OfType extends Unwhole>(numeral: OfType, useScalar: Scalar<OfType>) => OfType =
    <OfType extends Unwhole>(numeral: OfType, useScalar: Scalar<OfType>): OfType =>
        // If is array or cycle, apply to every member
        numeral as unknown as number * (useScalar as unknown as number) as unknown as OfType
const Translation: <OfType extends Unwhole>(numeral: OfType, useTranslation: Translation<OfType>) => OfType =
    <OfType extends Unwhole>(numeral: OfType, useTranslation: Translation<OfType>): OfType =>
        // If is array or cycle, apply to every member
        numeral as unknown as number + (useTranslation as unknown as number) as unknown as OfType
const Rotation: <OfType extends Unwhole>(numeral: OfType, useRotation: Rotation<OfType>) => OfType =
    <OfType extends Unwhole>(numeral: OfType, useRotation: Rotation<OfType>): OfType =>
        // If is array or cycle, apply to every member
        numeral as unknown as OfType

// Uses - Unwhole - Other

const Exponent: <OfType extends Unwhole>(numeral: OfType, useExponent: Exponent<OfType>) => OfType =
    <OfType extends Unwhole>(numeral: OfType, useExponent: Exponent<OfType>): OfType =>
        // If is array or cycle, apply to every member
        Math.pow(numeral as unknown as number, useExponent as unknown as number) as unknown as OfType
const Logarithm: <OfType extends Unwhole>(numeral: OfType, useLogarithm: Logarithm<OfType>) => OfType =
    <OfType extends Unwhole>(numeral: OfType, useLogarithm: Logarithm<OfType>): OfType =>
        // If is array or cycle, apply to every member
        Math.log(numeral as unknown as number) / Math.log(useLogarithm as unknown as number) as unknown as OfType
const Modulus: <OfType extends Unwhole>(numeral: OfType, useModulus: Modulus<OfType>) => OfType =
    <OfType extends Unwhole>(numeral: OfType, useModulus: Modulus<OfType>): OfType => {
        // If is array or cycle, apply to every member
        let result: number = numeral as unknown as number
        const rawModulus: number = useModulus as unknown as number

        while (result < 0) {
            result += rawModulus
        }
        while (result >= rawModulus) {
            result -= rawModulus
        }

        return result as unknown as OfType
    }

// Uses - Unwhole - Compound

const Interval: <OfType extends Unwhole>(numeral: OfType, useInterval: Interval<OfType>) => OfType =
    <OfType extends Unwhole>(numeral: OfType, useInterval: Interval<OfType>): OfType =>
        Scalar(numeral as unknown as number, useInterval as unknown as Scalar) as unknown as OfType
const Delta: <OfType extends Unwhole>(numeral: OfType, useDelta: Delta<OfType>) => OfType =
    <OfType extends Unwhole>(numeral: OfType, useDelta: Delta<OfType>): OfType =>
        Translation(numeral as unknown as number, useDelta as unknown as Translation) as unknown as OfType
const Arc: <OfType extends Unwhole>(numeral: OfType, useArc: Arc<OfType>) => OfType =
    <OfType extends Unwhole>(numeral: OfType, useArc: Arc<OfType>): OfType =>
        Rotation(numeral as unknown as number, useArc as unknown as Rotation) as unknown as OfType

// Uses - Whole - Transformation, with Array Overloads

const Multiple: {
    <OfType extends NonNormal>(numeral: OfType, useMultiple: Multiple<OfType>): OfType,
    <OfType extends ArrayedType>(numeral: OfType, useMultiple: Multiple<OfType>): OfType,
} =
    <OfType extends CanBeAsAWholeUseWithAnArrayOverloadOfSomeType>(numeral: OfType, useMultiple: Multiple<OfType>): OfType => {
        // If is array or cycle, return special array overload here

        return Scalar(
            numeral as unknown as number,
            integerCheck(useMultiple, 'Multiple') as unknown as Scalar,
        ) as unknown as OfType
    }
const Cardinal: {
    <OfType extends NonNormal>(numeral: OfType, useCardinal: Cardinal<OfType>): OfType,
    <OfType extends ArrayedType>(array: OfType, useCardinal: Cardinal<OfType>): OfType,
} =
    // tslint:disable-next-line cyclomatic-complexity
    <OfType extends CanBeAsAWholeUseWithAnArrayOverloadOfSomeType>(numeralOrArray: OfType, useCardinal: Cardinal<OfType>): OfType => {
        // tslint:disable-next-line strict-type-predicates
        if (isCycle(numeralOrArray) || typeof numeralOrArray === 'string') {
            // tslint:disable-next-line strict-type-predicates
            const cycle: Cycle<OfType> = typeof numeralOrArray === 'string' ?
                (numeralOrArray as string).split('') as unknown as Cycle<OfType> :
                numeralOrArray as unknown as Cycle<OfType>
            const cycledCycle: Cycle<OfType> = as.Cycle([])
            const cellCount: Cardinal<Cycle<OfType>> = as.Cardinal<Cycle<OfType>>(cycle.length)

            for (
                let index: Ordinal<Cycle<OfType>> = as.Ordinal<Cycle<OfType>>(0);
                index <= finalIndexFromElementsTotal(cellCount);
                index = Cardinal(index, as.Transition<Cycle<OfType>>(1))
            ) {
                let cycledIndex: Ordinal<Cycle<OfType>> = Cardinal(
                    index,
                    as.Transition<Cycle<OfType>>(-as.number(useCardinal as unknown as Cardinal)),
                )
                cycledIndex = Remaindee(
                    cycledIndex,
                    as.Remaindee<Ordinal<Cycle<OfType>>>(as.number(cellCount)),
                )
                cycledCycle.push(cycle[ as.number(cycledIndex) ])
            }

            // tslint:disable-next-line strict-type-predicates
            return typeof numeralOrArray === 'string' ?
                cycledCycle.join('') as unknown as OfType :
                cycledCycle as unknown as OfType
        }

        return Translation(
            numeralOrArray as unknown as number,
            integerCheck(useCardinal, 'Cardinal') as unknown as Translation,
        ) as unknown as OfType
    }
const Transposition: {
    <OfType extends NonNormal>(numeral: OfType, useTransposition: Transposition<OfType>): OfType,
    <OfType extends ArrayedType>(numeral: OfType, useTransposition: Transposition<OfType>): OfType,
} =
    <OfType extends CanBeAsAWholeUseWithAnArrayOverloadOfSomeType>(numeral: OfType, useTransposition: Transposition<OfType>): OfType => {
        // If is array or cycle, return special array overload here

        return Rotation(
            numeral as unknown as number,
            integerCheck(useTransposition, 'Transposition') as unknown as Rotation,
        ) as unknown as OfType
    }

// Uses - Whole - Other

const Power: <OfType extends NonNormal>(numeral: OfType, usePower: Power<OfType>) => OfType =
    <OfType extends Number>(numeral: OfType, usePower: Power<OfType>): OfType =>
        Exponent(numeral, integerCheck(usePower, 'Power'))
const Base: <OfType extends NonNormal>(numeral: OfType, useBase: Base<OfType>) => OfType =
    <OfType extends Number>(numeral: OfType, useBase: Base<OfType>): OfType =>
        Logarithm(numeral, integerCheck(useBase, 'Base'))
const Remaindee: <OfType extends NonNormal>(numeral: OfType, useRemaindee: Remaindee<OfType>) => OfType =
    <OfType extends Number>(numeral: OfType, useRemaindee: Remaindee<OfType>): OfType =>
        Modulus(numeral, integerCheck(useRemaindee, 'Base'))

// Uses - Whole - Fixed, only for Arrays

const Ordinal:
    <ElementType>(array: ArrayedType<ElementType>, useOrdinal: Ordinal<ArrayedType<ElementType>>) => ElementType =
    <ElementType>(array: ArrayedType<ElementType>, useOrdinal: Ordinal<ArrayedType<ElementType>>): ElementType => {
        if (isCycle(array)) {
            const cycleOrdinal: Ordinal<Cycle<ElementType>> = useOrdinal as Ordinal<Cycle<ElementType>>
            const cycledOrdinal: Ordinal<Cycle<ElementType>> = Remaindee(
                cycleOrdinal,
                as.Remaindee<Ordinal<Cycle<ElementType>>>(array.length),
            )

            return array[ as.number(cycledOrdinal as unknown as Ordinal) ]
        }

        ordinalCheck(useOrdinal, array)

        return array[ as.number(useOrdinal as unknown as Ordinal) ] as ElementType
    }

// Uses - Whole - Compound, only for Arrays

const Factor: {
    <ElementType>(numeral: Ordinal<Cycle<ElementType>>, useFactor: Factor<Cycle<ElementType>>): Ordinal<Cycle<ElementType>>,
    <ElementType>(numeral: Ordinal<ElementType[]>, useFactor: Factor<ElementType[]>): Ordinal<ElementType[]>,
} =
    <ElementType>(
        numeral: Ordinal<ElementType[]> | Ordinal<Cycle<ElementType>>,
        useFactor: Factor<ElementType[]> | Factor<Cycle<ElementType>>,
    ): Ordinal<ElementType[]> & Ordinal<Cycle<ElementType>> =>
        Multiple(
            numeral as unknown as number,
            useFactor as unknown as Multiple,
        ) as unknown as Ordinal<ElementType[]> & Ordinal<Cycle<ElementType>>
const Transition: {
    <ElementType>(numeral: Ordinal<Cycle<ElementType>>, useTransition: Transition<Cycle<ElementType>>): Ordinal<Cycle<ElementType>>,
    <ElementType>(numeral: Ordinal<ElementType[]>, useTransition: Transition<ElementType[]>): Ordinal<ElementType[]>,
} =
    <ElementType>(
        numeral: Ordinal<ElementType[]> | Ordinal<Cycle<ElementType>>,
        useTransition: Transition<ElementType[]> | Transition<Cycle<ElementType>>,
    ): Ordinal<ElementType[]> & Ordinal<Cycle<ElementType>> =>
        Cardinal(
            numeral as unknown as number,
            useTransition as unknown as Cardinal,
        ) as unknown as Ordinal<ElementType[]> & Ordinal<Cycle<ElementType>>
const Turn: {
    <ElementType>(numeral: Ordinal<Cycle<ElementType>>, useFactor: Turn<Cycle<ElementType>>): Ordinal<Cycle<ElementType>>,
    <ElementType>(numeral: Ordinal<ElementType[]>, useFactor: Turn<ElementType[]>): Ordinal<ElementType[]>,
} =
    <ElementType>(
        numeral: Ordinal<ElementType[]> | Ordinal<Cycle<ElementType>>,
        useFactor: Turn<ElementType[]> | Turn<Cycle<ElementType>>,
    ): Ordinal<ElementType[]> & Ordinal<Cycle<ElementType>> =>
        Transposition(
            numeral as unknown as number,
            useFactor as unknown as Transposition,
        ) as unknown as Ordinal<ElementType[]> & Ordinal<Cycle<ElementType>>

// Uses - Normal

const NormalScalar: <OfType extends Number>(numeral: OfType, useNormalScalar: NormalScalar<OfType>) => OfType =
    <OfType extends Number>(numeral: OfType, useNormalScalar: NormalScalar<OfType>): OfType =>
        Scalar(numeral, normalCheck(useNormalScalar, 'NormalScalar'))

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
