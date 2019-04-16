// tslint:disable variable-name max-file-line-count

import { finalIndexFromElementsTotal, totalElements } from '../code'
import { indexCheck, normalScalarCheck } from './checks'
import * as from from './from'
import * as to from './to'
import { isCycle } from './typeGuards'
import {
    Base,
    Cardinal,
    Cycle,
    Denominator,
    Fraction,
    Index,
    Modulus,
    Multiple,
    NormalScalar,
    Numerator,
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
    ): OfType =>
        Math.log(value as unknown as number) / Math.log(base as unknown as number) as unknown as OfType

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
            const cycledCycle: Cycle<TranslatedType> = to.Cycle([])
            const cellCount: Cardinal = totalElements(cycle)

            for (
                let index: Index = to.Index(0);
                index <= finalIndexFromElementsTotal(cellCount);
                index = Translation(index, to.Translation<Index>(1))
            ) {
                let cycledIndex: Index = Translation(
                    index,
                    to.Translation<Index>(-from.Translation(translation as unknown as Translation)),
                )
                cycledIndex = Modulus(cycledIndex, to.Modulus<Index>(from.Cardinal(cellCount)))
                cycledCycle.push(cycle[ from.Index(cycledIndex) ])
            }

            return cycledCycle as unknown as TranslatedType
        }

        return value as unknown as number +
        from.Translation(translation as unknown as Translation) as unknown as TranslatedType
    }

const Power: <OfType extends Number>(
    base: OfType,
    power: Power<OfType>,
) => OfType =
    <OfType extends Number>(
        base: OfType,
        power: Power<OfType>,
    ): OfType =>
        Math.pow(base as unknown as number, power as unknown as number) as unknown as OfType

const Scalar: <OfType extends Number>(
    value: OfType,
    scalar: Scalar<OfType>,
) => OfType =
    <OfType extends Number>(
        value: OfType,
        scalar: Scalar<OfType>,
    ): OfType =>
        value as unknown as number * from.Scalar(scalar as unknown as Scalar) as unknown as OfType

const NormalScalar: <OfType extends Number>(
    value: OfType,
    scalar: NormalScalar<OfType>,
) => OfType =
    <OfType extends Number>(
        value: OfType,
        scalar: NormalScalar<OfType>,
    ): OfType => {
        normalScalarCheck(value)

        return value as unknown as number * from.Scalar(scalar as unknown as Scalar) as unknown as OfType
    }

const Multiple: <OfType extends Number>(
    value: OfType,
    scalar: Multiple<OfType>,
) => OfType =
    <OfType extends Number>(
        value: OfType,
        scalar: Multiple<OfType>,
    ): OfType =>
        value as unknown as number * from.Multiple(scalar as unknown as Multiple) as unknown as OfType

const Index: <ElementType>(
    array: ElementType[] | Cycle<ElementType>,
    index: Index<ElementType>,
) => ElementType =
    <ElementType>(
        array: ElementType[] | Cycle<ElementType>,
        index: Index<ElementType>,
    ): ElementType => {
        if (isCycle(array)) {
            const cycledIndex: Index<ElementType> = Modulus(
                index,
                to.Modulus<Index<ElementType>>(array.length),
            )

            return array[ from.Index(cycledIndex as unknown as Index) ]
        }

        indexCheck(index, array)

        return array[ from.Index(index as unknown as Index) ]
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
    Index,
    Modulus,
    Numerator,
    Denominator,
    NormalScalar,
    Multiple,
}
