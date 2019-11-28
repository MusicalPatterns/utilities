// tslint:disable max-file-line-count no-magic-numbers max-line-length

import { ObjectDifference } from '../code'

// Brands

type Brand =
    HzBrand |
    MsBrand |
    MetersBrand |
    FrequencyBrand |
    TimeBrand |
    SpaceBrand |
    RadiansBrand |
    CentsBrand |
    SemitonesBrand |
    AmplitudeBrand |
    NumeratorBrand |
    DenominatorBrand |
    CardinalBrand |
    TranslationBrand |
    MultipleBrand |
    ScalarBrand |
    TranspositionBrand |
    RotationBrand |
    PowerBrand |
    ExponentBrand |
    BaseBrand |
    LogarithmBrand |
    RemaindeeBrand |
    ModulusBrand |
    OrdinalBrand |
    PointBrand |
    NormalScalarBrand |
    NormalBrand |
    NonNormalBrand |
    IntegerBrand |
    NonIntegerBrand

interface BrandUse {_UseBrand: Brand}

interface HzBrand {_HzBrand: 'Hz'}

interface MsBrand {_MsBrand: 'Ms'}

interface MetersBrand {_MetersBrand: 'Meters'}

interface FrequencyBrand {_FrequencyBrand: 'Frequency'}

interface TimeBrand {_TimeBrand: 'Time'}

interface SpaceBrand {_SpaceBrand: 'Space'}

interface RadiansBrand {_RadiansBrand: 'Radians'}

interface CentsBrand {_CentsBrand: 'Cents'}

interface SemitonesBrand {_SemitonesBrand: 'Semitones'}

interface AmplitudeBrand {_AmplitudeBrand: 'Amplitude'}

interface NumeratorBrand {_NumeratorBrand: 'Numerator'}

interface DenominatorBrand {_DenominatorBrand: 'Denominator'}

interface CardinalBrand {_CardinalBrand: 'Cardinal'}

interface TranslationBrand {_TranslationBrand: 'Translation'}

interface MultipleBrand {_MultipleBrand: 'Multiple'}

interface ScalarBrand {_ScalarBrand: 'Scalar'}

interface TranspositionBrand {_TranspositionBrand: 'Transposition'}

interface RotationBrand {_RotationBrand: 'Rotation'}

interface PowerBrand {_PowerBrand: 'Power'}

interface ExponentBrand {_ExponentBrand: 'Exponent'}

interface BaseBrand {_BaseBrand: 'Base'}

interface LogarithmBrand {_LogarithmBrand: 'Logarithm'}

interface RemaindeeBrand {_RemaindeeBrand: 'Remaindee'}

interface ModulusBrand {_ModulusBrand: 'Modulus'}

interface OrdinalBrand {_OrdinalBrand: 'Ordinal'}

interface PointBrand {_PointBrand: 'Point'}

interface NormalScalarBrand {_NormalScalarBrand: 'NormalScalar'}

interface NormalBrand {_NormalBrand: 'Normal'}

interface NonNormalBrand {_NonNormalBrand: 'NonNormal'}

interface IntegerBrand {_IntegerBrand: 'Integer'}

interface NonIntegerBrand {_NonIntegerBrand: 'NonInteger'}

// Utilities - Units

type NoUnits = Number & { _UnitsBrand?: 'NoUnits' }
type UnitsBrand<BrandType> = NoUse & { _UnitsBrand: BrandType } & MaybeWhole<BrandType>

// Units - Unwhole - Physical

type Hz = UnitsBrand<HzBrand>
type Ms = UnitsBrand<MsBrand>
type Meters = UnitsBrand<MetersBrand>

// Units - Unwhole - Abstract

type Frequency = UnitsBrand<FrequencyBrand>
type Time = UnitsBrand<TimeBrand>
type Space = UnitsBrand<SpaceBrand>

// Units - Unwhole - Other

type Radians = UnitsBrand<RadiansBrand>

type Cents = UnitsBrand<CentsBrand>
type Semitones = UnitsBrand<SemitonesBrand>

type Amplitude = UnitsBrand<AmplitudeBrand>

// Units - Whole

type Numerator = UnitsBrand<NumeratorBrand>
type Denominator = UnitsBrand<DenominatorBrand>
type FractionalPart = Numerator & Denominator

type Fraction = [ Numerator, Denominator ]

// Utilities - Uses

type NoUse = Number & { _UseBrand?: 'NoUse' }

type UseBrand<BrandType, OfType = number> =
    UseOf<OfType>
    & { _UseBrand: BrandType }
    & MaybeWhole<BrandType>
    & MaybeNormal<BrandType>

type UseBrandFromUse<Use> =
    Use extends Multiple ? MultipleBrand & ScalarBrand :
        Use extends Cardinal ? CardinalBrand & TranslationBrand :
            Use extends Transposition ? TranspositionBrand & RotationBrand :
                Use extends Power ? PowerBrand & ExponentBrand :
                    Use extends Base ? BaseBrand & LogarithmBrand :
                        Use extends Remaindee ? RemaindeeBrand & ModulusBrand :
                            Use extends Ordinal ? OrdinalBrand & PointBrand :
                                Use extends NormalScalar ? NormalScalarBrand & ScalarBrand :
                                    Use extends Scalar ? ScalarBrand :
                                        Use extends Translation ? TranslationBrand :
                                            Use extends Rotation ? RotationBrand :
                                                Use extends Exponent ? ExponentBrand :
                                                    Use extends Logarithm ? LogarithmBrand :
                                                        Use extends Modulus ? ModulusBrand :
                                                            Use extends Point ? PointBrand :
                                                                ''

type UseOf<OfType> = Number & { _UseOfBrand: OfType }
type NoOf = number & { _OfBrand?: 'NoOf' }
type Of<OfType> = number | { _OfBrand: OfType }

// Uses - Unwhole - Transformation

type Scalar<OfType extends CanBeAsAnUnwholeUseOfSomeType = number> = UseBrand<ScalarBrand, OfType>
type Translation<OfType extends CanBeAsAnUnwholeUseOfSomeType = number> = UseBrand<TranslationBrand, OfType>
type Rotation<OfType extends CanBeAsAnUnwholeUseOfSomeType = number> = UseBrand<RotationBrand, OfType>

// Uses - Unwhole - Other

type Exponent<OfType extends CanBeAsAnUnwholeUseOfSomeType = number> = UseBrand<ExponentBrand, OfType>
type Logarithm<OfType extends CanBeAsAnUnwholeUseOfSomeType = number> = UseBrand<LogarithmBrand, OfType>
type Modulus<OfType extends CanBeAsAnUnwholeUseOfSomeType = number> = UseBrand<ModulusBrand, OfType>

// Uses - Unwhole - Fixed

type Point<OfType extends CanBeAsAnUnwholeUseOfSomeType & NoUse = number> = UseBrand<PointBrand, OfType>

// Uses - Unwhole - Compound

type Interval<OfType extends CanBeAsAnUnwholeUseOfSomeType = number> = Scalar<Point<OfType>>
type Delta<OfType extends CanBeAsAnUnwholeUseOfSomeType = number> = Translation<Point<OfType>>
type Arc<OfType extends CanBeAsAnUnwholeUseOfSomeType = number> = Rotation<Point<OfType>>

// Uses - Whole - Transformation, with Array Overloads

type Multiple<OfType extends CanBeAsAWholeUseWithAnArrayOverloadOfSomeType = number> =
    UseBrand<MultipleBrand & ScalarBrand, OfType>
    & NonNormal
type Cardinal<OfType extends CanBeAsAWholeUseWithAnArrayOverloadOfSomeType = number> =
    UseBrand<CardinalBrand & TranslationBrand, OfType>
    & NonNormal
type Transposition<OfType extends CanBeAsAWholeUseWithAnArrayOverloadOfSomeType = number> =
    UseBrand<TranspositionBrand & RotationBrand, OfType>
    & NonNormal

// Uses - Whole - Other

type Power<OfType extends CanBeAsAWholeUseOfSomeType = number> =
    UseBrand<PowerBrand & ExponentBrand, OfType>
    & NonNormal
type Base<OfType extends CanBeAsAWholeUseOfSomeType = number> = UseBrand<BaseBrand & LogarithmBrand, OfType> & NonNormal
type Remaindee<OfType extends CanBeAsAWholeUseOfSomeType = number> =
    UseBrand<RemaindeeBrand & ModulusBrand, OfType>
    & NonNormal

// Uses - Whole - Fixed, only for Arrays

type Ordinal<OfType extends { _OfBrand?: 'NoOf' } & ArrayedOrStringType = number[] & { _OfBrand?: 'NoOf' }> =
    UseBrand<OrdinalBrand & PointBrand, OfType>
    & NonNormal

// Uses - Whole - Compound, only for Arrays

type Factor<OfType extends { _OfBrand?: 'NoOf' } & ArrayedOrStringType = number[] & { _OfBrand?: 'NoOf' }> = Multiple<Ordinal<OfType>>
type Transition<OfType extends { _OfBrand?: 'NoOf' } & ArrayedOrStringType = number[] & { _OfBrand?: 'NoOf' }> = Cardinal<Ordinal<OfType>>
type Turn<OfType extends { _OfBrand?: 'NoOf' } & ArrayedOrStringType = number[] & { _OfBrand?: 'NoOf' }> = Transposition<Ordinal<OfType>>

// Utilities - Normal

type MaybeNormal<Name> =
    Name extends NormalScalarBrand ? Normal :
        {}

type Normal = Number & { _NormalBrand: NormalBrand }
type NonNormal = Number & { _NormalBrand?: NonNormalBrand }

// Uses - Normal

type NormalScalar<OfType extends Unwhole = number> = UseBrand<NormalScalarBrand & ScalarBrand, OfType> & Unwhole

// Wholeness

type Integer = number & Whole
type Whole = Number & { _IntegerBrand: IntegerBrand }
type Unwhole = Number & { _IntegerBrand?: NonIntegerBrand }

type UnwholeVersion<NumericType extends Number> = (
    NumericType extends Whole ?
        NumericType extends Brand | BrandUse ?
            WholeToUnwhole<NumericType> & { _IntegerBrand: NonIntegerBrand } :
            number & { _IntegerBrand: NonIntegerBrand } :
        NumericType
    )

type WholeVersion<NumericType extends Number> =
    { _IntegerBrand: IntegerBrand } &
    (NumericType extends BrandUse ? UnwholeToWhole<NumericType> : NumericType)

type UnwholeToWhole<UnwholeType> =
    UnwholeType extends ScalarBrand ? UnwholeType & MultipleBrand :
        UnwholeType extends TranslationBrand ? UnwholeType & CardinalBrand :
            UnwholeType extends RotationBrand ? UnwholeType & TranspositionBrand :
                UnwholeType extends ExponentBrand ? UnwholeType & PowerBrand :
                    UnwholeType extends LogarithmBrand ? UnwholeType & BaseBrand :
                        UnwholeType extends ModulusBrand ? UnwholeType & RemaindeeBrand :
                            UnwholeType extends PointBrand ? UnwholeType & OrdinalBrand :
                                UnwholeType

type WholeToUnwhole<WholeType> =
    WholeType extends NumeratorBrand ? number :
        WholeType extends DenominatorBrand ? number :
            WholeType extends { _UseBrand: MultipleBrand } ? ObjectDifference<WholeType, { _UseBrand: MultipleBrand }> & { _UseBrand: ScalarBrand } :
                WholeType extends { _UseBrand: CardinalBrand } ? ObjectDifference<WholeType, { _UseBrand: CardinalBrand }> & { _UseBrand: TranslationBrand } :
                    WholeType extends { _UseBrand: TranspositionBrand } ? ObjectDifference<WholeType, { _UseBrand: TranspositionBrand }> & { _UseBrand: RotationBrand } :
                        WholeType extends { _UseBrand: PowerBrand } ? ObjectDifference<WholeType, { _UseBrand: PowerBrand }> & { _UseBrand: ExponentBrand } :
                            WholeType extends { _UseBrand: BaseBrand } ? ObjectDifference<WholeType, { _UseBrand: BaseBrand }> & { _UseBrand: LogarithmBrand } :
                                WholeType extends { _UseBrand: RemaindeeBrand } ? ObjectDifference<WholeType, { _UseBrand: RemaindeeBrand }> & { _UseBrand: ModulusBrand } :
                                    WholeType extends { _UseBrand: OrdinalBrand } ? ObjectDifference<WholeType, { _UseBrand: OrdinalBrand }> & { _UseBrand: PointBrand } :
                                        WholeType

type MaybeWhole<Name> =
    Name extends MultipleBrand ? Whole :
        Name extends CardinalBrand ? Whole :
            Name extends TranspositionBrand ? Whole :
                Name extends PowerBrand ? Whole :
                    Name extends BaseBrand ? Whole :
                        Name extends RemaindeeBrand ? Whole :
                            Name extends OrdinalBrand ? Whole :
                                Name extends NumeratorBrand ? Whole :
                                    Name extends DenominatorBrand ? Whole :
                                        {}

type CanBeAsAWholeUseOfSomeType = NonNormal
type CanBeAsAWholeUseOfNoType = CanBeAsAWholeUseOfSomeType & NoOf
type CanBeAsAnUnwholeUseOfSomeType = CanBeAsAWholeUseOfSomeType & Unwhole
type CanBeAsAnUnwholeUseOfNoType = CanBeAsAWholeUseOfNoType & Unwhole

// Array

type ArrayedType<ElementType = unknown> = ElementType[] | Cycle<ElementType>
type ArrayedOrStringType<ElementType = unknown> = ArrayedType<ElementType> | string

type CanBeAsAWholeUseWithAnArrayOverloadOfSomeType = CanBeAsAWholeUseOfSomeType | ArrayedOrStringType
type CanBeAsAWholeUseWithAnArrayOverloadOfNoType = CanBeAsAWholeUseOfNoType | ArrayedOrStringType

// tslint:disable-next-line no-any
type AnyArrayedType = any[] & Cycle<any>
type AnyArrayedOrStringType = AnyArrayedType & string

type Cycle<ElementType = number> = ElementType[] & { _CycleBrand: boolean }

type Monzo = Integer[] & { _MonzoBrand: boolean }
type Val = Integer[] & { _ValBrand: boolean }

type Block = number[] & { _BlockBrand: unknown }

type ContourElement<ContourType> = [ number, ...number[] ] &
    { length: ContourType } & (
    ContourType extends 1 ? { 0: number } :
        ContourType extends 2 ? { 0: number, 1: number } :
            ContourType extends 3 ? { 0: number, 1: number, 2: number } :
                ContourType extends 4 ? { 0: number, 1: number, 2: number, 3: number } :
                    ContourType extends 5 ? { 0: number, 1: number, 2: number, 3: number, 4: number } :
                        ContourType extends 6 ? { 0: number, 1: number, 2: number, 3: number, 4: number, 5: number } :
                            ContourType extends 7 ? { 0: number, 1: number, 2: number, 3: number, 4: number, 5: number, 6: number } :
                                ContourType extends 8 ? { 0: number, 1: number, 2: number, 3: number, 4: number, 5: number, 6: number, 7: number } :
                                    ContourType extends 9 ? { 0: number, 1: number, 2: number, 3: number, 4: number, 5: number, 6: number, 7: number, 8: number } :
                                        ContourType extends 10 ? { 0: number, 1: number, 2: number, 3: number, 4: number, 5: number, 6: number, 7: number, 8: number, 9: number } :
                                            { [ index: number ]: number }
    )

type ContourPiece<ContourType> = Array<ContourElement<ContourType>> & { _ContourPieceBrand: unknown }
type ContourWhole<ContourType> = Array<ContourElement<ContourType>> & { _ContourWholeBrand: unknown }

export {
    Base,
    Cardinal,
    Scalar,
    Translation,
    Power,
    Hz,
    Ms,
    Radians,
    Cents,
    Semitones,
    Block,
    Cycle,
    ContourElement,
    ContourPiece,
    ContourWhole,
    Fraction,
    Numerator,
    Denominator,
    Modulus,
    Rotation,
    Ordinal,
    NoUnits,
    NoUse,
    Integer,
    Meters,
    Space,
    Time,
    Frequency,
    Amplitude,
    NormalScalar,
    UseBrand,
    UseOf,
    UnitsBrand,
    Multiple,
    Of,
    UseBrandFromUse,
    NoOf,
    Whole,
    Unwhole,
    Exponent,
    Logarithm,
    Remaindee,
    NonNormal,
    UnwholeVersion,
    WholeVersion,
    CanBeAsAWholeUseOfNoType,
    CanBeAsAnUnwholeUseOfNoType,
    Transposition,
    Point,
    CanBeAsAWholeUseOfSomeType,
    CanBeAsAnUnwholeUseOfSomeType,
    CanBeAsAWholeUseWithAnArrayOverloadOfNoType,
    CanBeAsAWholeUseWithAnArrayOverloadOfSomeType,
    ArrayedOrStringType,
    AnyArrayedType,
    Interval,
    Delta,
    Arc,
    Factor,
    Transition,
    Turn,
    ArrayedType,
    AnyArrayedOrStringType,
    Monzo,
    Val,
    TranslationBrand,
    PointBrand,
    ScalarBrand,
    FractionalPart,
    Brand,
}
