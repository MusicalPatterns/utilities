// tslint:disable variable-name max-file-line-count

import { finalIndexFromElementsTotal, length } from '../code'
import * as as from './as'
import { indexCheck, integerCheck, normalCheck } from './checks'
import * as notAs from './notAs'
import { isCycle } from './typeGuards'
import {
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
    NormalScalar,
    Numerator,
    Ordinal,
    Power,
    Scalar,
    Translation,
} from './types'

const Base: <OfType extends Number>(
    value: OfType,
    base: Base<OfType>,
) => OfType =
    <OfType extends Number>(
        value: OfType,
        base: Base<OfType>,
    ): OfType => {
        const integerCheckedBase: Base<OfType> = integerCheck(base, 'Base')

        return Math.log(value as unknown as number) /
        Math.log(integerCheckedBase as unknown as number) as unknown as OfType
    }

const Logarithm: <OfType extends Number>(
    value: OfType,
    logarithm: Logarithm<OfType>,
) => OfType =
    <OfType extends Number>(
        value: OfType,
        logarithm: Logarithm<OfType>,
    ): OfType =>
        Math.log(value as unknown as number) / Math.log(logarithm as unknown as number) as unknown as OfType

const Translation: <TranslatedType>(
    value: TranslatedType,
    translation: Translation<TranslatedType>,
) => TranslatedType =
    <TranslatedType>(
        value: TranslatedType,
        translation: Translation<TranslatedType>,
    ): TranslatedType => {
        if (isCycle(value)) {
            const cycle: Cycle<TranslatedType> = value as unknown as Cycle<TranslatedType>
            const cycledCycle: Cycle<TranslatedType> = as.Cycle([])
            const cellCount: Cardinal<TranslatedType> = length(cycle)

            for (
                let index: Ordinal<TranslatedType> = as.Ordinal<TranslatedType>(0);
                index <= finalIndexFromElementsTotal(cellCount);
                index = Translation(index, as.Translation<Ordinal<TranslatedType>>(1))
            ) {
                let cycledIndex: Ordinal<TranslatedType> = Translation(
                    index,
                    as.Translation<Ordinal<TranslatedType>>(-notAs.Translation(translation as unknown as Translation)),
                )
                cycledIndex = IntegerModulus(
                    cycledIndex,
                    as.IntegerModulus<Ordinal<TranslatedType>>(notAs.Cardinal<TranslatedType>(cellCount)),
                )
                cycledCycle.push(cycle[ notAs.Ordinal<TranslatedType>(cycledIndex) ])
            }

            return cycledCycle as unknown as TranslatedType
        }

        return value as unknown as number +
        notAs.Translation(translation as unknown as Translation) as unknown as TranslatedType
    }

const Power: <OfType extends Number>(
    base: OfType,
    power: Power<OfType>,
) => OfType =
    <OfType extends Number>(
        base: OfType,
        power: Power<OfType>,
    ): OfType => {
        const integerCheckedPower: Power<OfType> = integerCheck(power, 'Power')

        return Math.pow(base as unknown as number, integerCheckedPower as unknown as number) as unknown as OfType
    }
const Exponent: <OfType extends Number>(
    base: OfType,
    exponent: Exponent<OfType>,
) => OfType =
    <OfType extends Number>(
        base: OfType,
        exponent: Exponent<OfType>,
    ): OfType =>
        Math.pow(base as unknown as number, exponent as unknown as number) as unknown as OfType

const Scalar: <OfType extends Number>(
    value: OfType,
    scalar: Scalar<OfType>,
) => OfType =
    <OfType extends Number>(
        value: OfType,
        scalar: Scalar<OfType>,
    ): OfType =>
        value as unknown as number * notAs.Scalar(scalar as unknown as Scalar) as unknown as OfType

const NormalScalar: <OfType extends Number>(
    value: OfType,
    normalScalar: NormalScalar<OfType>,
) => OfType =
    <OfType extends Number>(
        value: OfType,
        normalScalar: NormalScalar<OfType>,
    ): OfType =>
        value as unknown as number * notAs.Scalar(normalCheck(normalScalar) as unknown as Scalar) as unknown as OfType

const Multiple: <OfType extends Number>(
    value: OfType,
    multiple: Multiple<OfType>,
) => OfType =
    <OfType extends Number>(
        value: OfType,
        multiple: Multiple<OfType>,
    ): OfType => {
        const integerCheckedMultiple: Multiple<OfType> = integerCheck(multiple, 'Multiple')

        return value as unknown as number *
        notAs.Multiple(integerCheckedMultiple as unknown as Multiple) as unknown as OfType
    }

const Ordinal: <ElementType>(
    array: ElementType[] | Cycle<ElementType>,
    index: Ordinal<ElementType>,
) => ElementType =
    <ElementType>(
        array: ElementType[] | Cycle<ElementType>,
        index: Ordinal<ElementType>,
    ): ElementType => {
        if (isCycle(array)) {
            const cycledIndex: Ordinal<ElementType> = IntegerModulus(
                index,
                as.IntegerModulus<Ordinal<ElementType>>(array.length),
            )

            return array[ notAs.Ordinal(cycledIndex as unknown as Ordinal) ]
        }

        indexCheck(index, array)

        return array[ notAs.Ordinal(index as unknown as Ordinal) ]
    }

const Modulus: <OfType extends Number>(
    value: OfType,
    modulus: Modulus<OfType>,
) => OfType =
    <OfType extends Number>(
        value: OfType,
        modulus: Modulus<OfType>,
    ): OfType => {
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
const IntegerModulus: <OfType extends Number>(
    value: OfType,
    integerModulus: IntegerModulus<OfType>,
) => OfType =
    <OfType extends Number>(
        value: OfType,
        integerModulus: IntegerModulus<OfType>,
    ): OfType => {
        const integerCheckedIntegerModulus: IntegerModulus<OfType> = integerCheck(integerModulus, 'Base')

        let result: number = value as unknown as number
        const rawIntegerModulus: number = integerCheckedIntegerModulus as unknown as number

        while (result < 0) {
            result += rawIntegerModulus
        }
        while (result >= rawIntegerModulus) {
            result -= rawIntegerModulus
        }

        return result as unknown as OfType
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
    Multiple,
    Exponent,
    Logarithm,
    IntegerModulus,
}
