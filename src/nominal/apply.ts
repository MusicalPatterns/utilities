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
    Modulus, NoDoubleInterior,
    NormalScalar,
    Numerator,
    Ordinal,
    Power,
    Scalar,
    Translation,
} from './types'

const Base: <UnitsType extends NoDoubleInterior = number>(value: UnitsType, base: Base<UnitsType>) => UnitsType =
    <UnitsType extends NoDoubleInterior = number>(value: UnitsType, base: Base<UnitsType>): UnitsType =>
        Math.log(value as unknown as number) / Math.log(base as unknown as number) as unknown as UnitsType

const Translation: <TranslatedType = number>(
    value: TranslatedType,
    translation: Translation<TranslatedType>,
) => TranslatedType =
    <TranslatedType = number>(
        value: TranslatedType,
        translation: Translation<TranslatedType>,
    ): TranslatedType => {
        if (isCycle(value)) {
            const cycle: Cycle<TranslatedType> = value as unknown as Cycle<TranslatedType>
            const cycledCycle: Cycle<TranslatedType> = to.Cycle([])
            const cellCount: Cardinal = totalElements(cycle)

            for (
                let index: Ordinal = to.Ordinal(0);
                index <= finalIndexFromElementsTotal(cellCount);
                index = to.Ordinal(from.Ordinal(index) + 1)
            ) {
                let cycledIndex: Ordinal = Translation(
                    index,
                    to.Translation(to.Ordinal(-from.Translation(translation as Translation))),
                )
                cycledIndex = Modulus(cycledIndex, to.Modulus(to.Ordinal(from.Cardinal(cellCount))))
                cycledCycle.push(cycle[ from.Ordinal(cycledIndex) ])
            }

            return cycledCycle as unknown as TranslatedType
        }

        return value as unknown as number +
        from.Translation(translation as unknown as Translation) as unknown as TranslatedType
    }

const Power: <UnitsType extends NoDoubleInterior = number>(
    base: UnitsType,
    power: Power<UnitsType>,
) => UnitsType =
    <UnitsType extends NoDoubleInterior = number>(
        base: UnitsType,
        power: Power<UnitsType>,
    ): UnitsType =>
        Math.pow(base as unknown as number, power as unknown as number) as unknown as UnitsType

const Scalar: <UnitsType extends NoDoubleInterior = number>(
    value: UnitsType,
    scalar: Scalar<UnitsType>,
) => UnitsType =
    <UnitsType extends NoDoubleInterior = number>(
        value: UnitsType,
        scalar: Scalar<UnitsType>,
    ): UnitsType =>
        value as unknown as number * from.Scalar(scalar as unknown as Scalar) as unknown as UnitsType

const NormalScalar: <UnitsType extends NoDoubleInterior = number>(
    value: UnitsType,
    scalar: NormalScalar<UnitsType>,
) => UnitsType =
    <UnitsType extends NoDoubleInterior = number>(
        value: UnitsType,
        scalar: NormalScalar<UnitsType>,
    ): UnitsType => {
        normalScalarCheck(value)

        return value as unknown as number * from.Scalar(scalar as unknown as Scalar) as unknown as UnitsType
    }

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
                array.length as unknown as Modulus<Index<ElementType>>,
            )

            return array[ from.Index(cycledIndex as Index) ]
        }

        indexCheck(index, array)

        return array[ from.Index(index as Index) ]
    }

const Modulus:
    <UnitsType extends NoDoubleInterior = number>(value: UnitsType, modulus: Modulus<UnitsType>) => UnitsType =
    <UnitsType extends NoDoubleInterior = number>(value: UnitsType, modulus: Modulus<UnitsType>): UnitsType => {
        let result: number = value as unknown as number
        const rawModulus: number = modulus as unknown as number

        while (result < 0) {
            result += rawModulus
        }
        while (result >= rawModulus) {
            result -= rawModulus
        }

        return result as unknown as UnitsType
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
}
