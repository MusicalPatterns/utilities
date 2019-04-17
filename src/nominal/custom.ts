// tslint:disable

import { reduce } from '../code'
import { NoUnits, Of } from './types'

type DummyValueForComputingNominalInterface = unknown

interface NominalInterfaceOptionObject {
    number?: any,
    numericArray?: any,
}

type CustomFromMono<NominalInterfaceOptionObjectType extends NominalInterfaceOptionObject = NominalInterfaceOptionObject> = {
    [Ordinal in keyof NominalInterfaceOptionObjectType['number']]:
    (value: NominalInterfaceOptionObjectType['number'][Ordinal]) => number
}
type CustomFromPoly<NominalInterfaceOptionObjectType extends NominalInterfaceOptionObject = NominalInterfaceOptionObject> = {
    [Ordinal in keyof NominalInterfaceOptionObjectType['numericArray']]:
    (value: NominalInterfaceOptionObjectType['numericArray'][Ordinal]) => number[]
}
type CustomFrom<NominalInterfaceOptionObjectType extends NominalInterfaceOptionObject = NominalInterfaceOptionObject> =
    CustomFromMono<NominalInterfaceOptionObjectType> & CustomFromPoly<NominalInterfaceOptionObjectType>

type CustomToMono<NominalInterfaceOptionObjectType extends NominalInterfaceOptionObject = NominalInterfaceOptionObject> = {
    [Ordinal in keyof NominalInterfaceOptionObjectType['number']]:
    <NumericType extends NoUnits>(value: NumericType) => NominalInterfaceOptionObjectType['number'][Ordinal]
}
type CustomToPoly<NominalInterfaceOptionObjectType extends NominalInterfaceOptionObject = NominalInterfaceOptionObject> = {
    [Ordinal in keyof NominalInterfaceOptionObjectType['numericArray']]:
    <NumericElementType extends NoUnits>(
        value: NumericElementType[],
    ) => NominalInterfaceOptionObjectType['numericArray'][Ordinal]
}
type CustomTo<NominalInterfaceOptionObjectType extends NominalInterfaceOptionObject = NominalInterfaceOptionObject> =
    CustomToMono<NominalInterfaceOptionObjectType> & CustomToPoly<NominalInterfaceOptionObjectType>

type CustomOfMono<NominalInterfaceOptionObjectType extends NominalInterfaceOptionObject = NominalInterfaceOptionObject> = {
    [Ordinal in keyof NominalInterfaceOptionObjectType['number']]:
    <NumericType extends NoUnits>(value: NumericType) => Of<NominalInterfaceOptionObjectType['number'][Ordinal]>
}
type CustomOfPoly<NominalInterfaceOptionObjectType extends NominalInterfaceOptionObject = NominalInterfaceOptionObject> = {
    [Ordinal in keyof NominalInterfaceOptionObjectType['numericArray']]:
    <NumericType extends NoUnits>(value: NumericType) => Of<NominalInterfaceOptionObjectType['numericArray'][Ordinal]>
}
type CustomOf<NominalInterfaceOptionObjectType extends NominalInterfaceOptionObject = NominalInterfaceOptionObject> =
    CustomOfMono<NominalInterfaceOptionObjectType> & CustomOfPoly<NominalInterfaceOptionObjectType>

interface NominalInterface<NominalInterfaceOptionObjectType extends NominalInterfaceOptionObject = NominalInterfaceOptionObject> {
    from: CustomFrom<NominalInterfaceOptionObjectType>,
    of: CustomOf<NominalInterfaceOptionObjectType>,
    to: CustomTo<NominalInterfaceOptionObjectType>,
}

const computeNominalInterface: <NominalInterfaceOptionObjectType extends NominalInterfaceOptionObject>(
    nominalInterfaceOptionsObject: NominalInterfaceOptionObjectType,
) => NominalInterface<NominalInterfaceOptionObjectType> =
    <NominalInterfaceOptionObjectType extends NominalInterfaceOptionObject>(
        nominalInterfaceOptionsObject: NominalInterfaceOptionObjectType,
    ): NominalInterface<NominalInterfaceOptionObjectType> => ({
        from: {
            ...reduce(
                Object.keys(nominalInterfaceOptionsObject.number || {}),
                (
                    accumulator: CustomFromMono<NominalInterfaceOptionObjectType>, typeName: string,
                ): CustomFromMono<NominalInterfaceOptionObjectType> => ({
                    ...accumulator,
                    [ typeName ]: (value: unknown): number => value as number,
                }),
                {},
            ),
            ...reduce(
                Object.keys(nominalInterfaceOptionsObject.numericArray || {}),
                (
                    accumulator: CustomFromPoly<NominalInterfaceOptionObjectType>, typeName: string,
                ): CustomFromPoly<NominalInterfaceOptionObjectType> => ({
                    ...accumulator,
                    [ typeName ]: (values: unknown): number[] => values as number[],
                }),
                {},
            ),
        },
        of: {
            ...reduce(
                Object.keys(nominalInterfaceOptionsObject.number || {}),
                (
                    accumulator: CustomOfMono<NominalInterfaceOptionObjectType>, typeName: string,
                ): CustomOfMono<NominalInterfaceOptionObjectType> => ({
                    ...accumulator,
                    [ typeName ]: <NumericType extends NoUnits>(value: NumericType): unknown => value,
                }),
                {},
            ),
            ...reduce(
                Object.keys(nominalInterfaceOptionsObject.numericArray || {}),
                (
                    accumulator: CustomOfPoly<NominalInterfaceOptionObjectType>, typeName: string,
                ): CustomOfPoly<NominalInterfaceOptionObjectType> => ({
                    ...accumulator,
                    [ typeName ]: <NumericType extends NoUnits>(value: NumericType): unknown => value,
                }),
                {},
            ),
        },
        to: {
            ...reduce(
                Object.keys(nominalInterfaceOptionsObject.number || {}),
                (
                    accumulator: CustomToMono<NominalInterfaceOptionObjectType>, typeName: string,
                ): CustomToMono<NominalInterfaceOptionObjectType> => ({
                    ...accumulator,
                    [ typeName ]: <NumericType extends NoUnits>(value: NumericType): unknown => value,
                }),
                {},
            ),
            ...reduce(
                Object.keys(nominalInterfaceOptionsObject.numericArray || {}),
                (
                    accumulator: CustomToPoly<NominalInterfaceOptionObjectType>, typeName: string,
                ): CustomToPoly<NominalInterfaceOptionObjectType> => ({
                    ...accumulator,
                    [ typeName ]: <NumericElementType extends NoUnits>(values: NumericElementType[]): unknown => values,
                }),
                {},
            ),
        },
    })

const DUMMY_VALUE_FOR_COMPUTING_NOMINAL_INTERFACE: DummyValueForComputingNominalInterface = undefined

export {
    DUMMY_VALUE_FOR_COMPUTING_NOMINAL_INTERFACE,
    computeNominalInterface,
    NominalInterface,
    NominalInterfaceOptionObject,
    CustomTo,
    CustomFrom,
    CustomOf,
}
