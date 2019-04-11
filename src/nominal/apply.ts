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
    NoDoubleInteriorNumeric,
    NormalScalar,
    Numerator,
    Power,
    Scalar,
    Translation,
} from './types'

const Base: <InteriorType extends NoDoubleInteriorNumeric>(
    value: InteriorType,
    base: Base<InteriorType>,
) => InteriorType =
    <InteriorType extends NoDoubleInteriorNumeric>(
        value: InteriorType,
        base: Base<InteriorType>,
    ): InteriorType =>
        Math.log(value as unknown as number) / Math.log(base as unknown as number) as unknown as InteriorType

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
                index = Translation(index, to.Translation(to.Index(1)))
            ) {
                let cycledIndex: Index = Translation(
                    index,
                    to.Translation(to.Index(-from.Translation(translation as unknown as Translation))),
                )
                cycledIndex = Modulus(cycledIndex, to.Modulus(to.Index(from.Cardinal(cellCount))))
                cycledCycle.push(cycle[ from.Index(cycledIndex) ])
            }

            return cycledCycle as unknown as TranslatedType
        }

        return value as unknown as number +
        from.Translation(translation as unknown as Translation) as unknown as TranslatedType
    }

const Power: <InteriorType extends NoDoubleInteriorNumeric>(
    base: InteriorType,
    power: Power<InteriorType>,
) => InteriorType =
    <InteriorType extends NoDoubleInteriorNumeric>(
        base: InteriorType,
        power: Power<InteriorType>,
    ): InteriorType =>
        Math.pow(base as unknown as number, power as unknown as number) as unknown as InteriorType

const Scalar: <InteriorType extends NoDoubleInteriorNumeric>(
    value: InteriorType,
    scalar: Scalar<InteriorType>,
) => InteriorType =
    <InteriorType extends NoDoubleInteriorNumeric>(
        value: InteriorType,
        scalar: Scalar<InteriorType>,
    ): InteriorType =>
        value as unknown as number * from.Scalar(scalar as unknown as Scalar) as unknown as InteriorType

const NormalScalar: <InteriorType extends NoDoubleInteriorNumeric>(
    value: InteriorType,
    scalar: NormalScalar<InteriorType>,
) => InteriorType =
    <InteriorType extends NoDoubleInteriorNumeric>(
        value: InteriorType,
        scalar: NormalScalar<InteriorType>,
    ): InteriorType => {
        normalScalarCheck(value)

        return value as unknown as number * from.Scalar(scalar as unknown as Scalar) as unknown as InteriorType
    }

const Multiple: <InteriorType extends NoDoubleInteriorNumeric>(
    value: InteriorType,
    scalar: Multiple<InteriorType>,
) => InteriorType =
    <InteriorType extends NoDoubleInteriorNumeric>(
        value: InteriorType,
        scalar: Multiple<InteriorType>,
    ): InteriorType =>
        value as unknown as number * from.Multiple(scalar as unknown as Multiple) as unknown as InteriorType

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

const Modulus: <InteriorType extends NoDoubleInteriorNumeric>(
    value: InteriorType,
    modulus: Modulus<InteriorType>,
) => InteriorType =
    <InteriorType extends NoDoubleInteriorNumeric>(
        value: InteriorType,
        modulus: Modulus<InteriorType>,
    ): InteriorType => {
        let result: number = value as unknown as number
        const rawModulus: number = modulus as unknown as number

        while (result < 0) {
            result += rawModulus
        }
        while (result >= rawModulus) {
            result -= rawModulus
        }

        return result as unknown as InteriorType
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
